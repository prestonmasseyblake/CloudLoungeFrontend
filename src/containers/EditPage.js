import React, {useState, useEffect, useRef} from 'react';
import Item from "../components/Item";
import DropWrapper from "../components/DropWrapper";
import Col from "../components/Col";
import { data, statuses } from "../data";
import Video from '../components/youtubeVideo';
import axios from 'axios';
import Cookies from 'js-cookie';
import YoutubeWidget from '../containers/YouTubeWidget';
import Reddit from './RedditSearch/Reddit';
import Spotify from './SpotifySearch/Spotify';
import {Redirect} from 'react-router-dom';
const EditPage = (props) => {
    const [youtube, setYouTube] = useState(false);
    const [bitcoin, setBitcoin] = useState(false);
    const [amazon, setAmazon] = useState(false);
    const [spotify, setSpotify] = useState(false);
    const [tiktok, setTiktok] = useState(false);
    const [redirect,setRedirect] = useState(false);
    //setting the info from the api
    const [page, setPage] = useState({});
    //items for the drag and drop
    const [items, setItems] = useState(data);
    const slugger = props.match.params.id;
    useEffect(() => {
        const slugv = props.match.params.id;
        console.log(slugv);
        axios.get(`https://cloudloungebackend.herokuapp.com/api/create/edit/${slugv}`)
        .then(res => {
            setPage(res.data);
            //console.log('page',page);
            console.log("page Response: ",res.data)
        })
        .catch(err => {
            console.log(err);
        });
    },[props.match.params.id]);

    const displayYoutube = () => {
        
        if(youtube === true) {
            
            return ( 
                <div>
                    <YoutubeWidget/>
                </div>
            )
        }
    }

    const displayBitcoin = () => {
        
        if(bitcoin === true) {
            console.log('display bitcoin')
            return ( 
                <div>
                    
                    <a href='https://cex.io'><img src='https://cex.io/widget/dark/300/btc-usd' width='300' height='250' /></a>
                </div>
            )
        }
    }

    const displayAmazon = () => {
        
        if(amazon === true) {
            console.log('display amazon')
            return ( 
                <div>
                    <Reddit/>
                </div>
            )
        }
    }

    const displaySpotify = () => {
        console.log('display spotify')
        if(spotify === true) {
            return ( 
                <div>
                    
                    <Spotify/>
                </div>
            )
        }
    }

    const displayTiktok = () => {
        console.log('display tiktok')
        if(tiktok === true) {
            return ( 
                <div>
                    Tiktok
            <div style={{overflow: 'hidden', marginTop: '-100px', marginLeft: '-15px'}}>
            
</div>
                </div>
            )
        }
    }

    // functions for the drag and drop
    const onDrop = (item, monitor, status) => {
        const mapping = statuses.find(si => si.status === status);
        console.log('dropped', item.id);
        console.log(item.name);
        if (item.name === 'youtube'){
            setYouTube(true);
        }
        else if (item.name === 'bitcoin'){
            setBitcoin(true);
        }
        else if (item.name === 'amazon'){
            setAmazon(true);
        }
        else if (item.name === 'spotify'){
            setSpotify(true);
        }
        else if (item.name === 'tiktok'){
            setTiktok(true);
        }
            
        
        setItems(prevState => {
            const newItems = prevState
                .filter(i => i.id !== item.id)
                .concat({ ...item, status, icon: mapping.icon });
            return [ ...newItems ];
        });
        
    };
    let handleSubmit = (e) => {
        const cookies = Cookies.get();
        e.preventDefault();
        const data = {
        'name': slugger,
        'isYoutube': youtube,
        'isAmazon' :amazon,
        'isBitcoin' :bitcoin,
        'isTiktok': tiktok,
        'isSpotify':spotify   
        };
        console.log('this is the context data',data);
        axios.defaults.withCredentials = true;
        //axios.defaults.headers.common['X-CSRF-TOKEN'] = $('meta[name="csrf-token"]').attr('content');
        axios({
        url: `https://cloudloungebackend.herokuapp.com/api/create/update/${slugger}`,
        data: data,
        method: 'put',
        headers: new Headers({"Content-Type": "application/json", 'X-CSRFToken': cookies.csrftoken})
      }).then(res=> {
          console.log(res.data);
          setRedirect(true);
          
      }).catch(err => {console.log("this is the error", err.message)});

    }

    const moveItem = (dragIndex, hoverIndex) => {
        const item = items[dragIndex];
        setItems(prevState => {
            const newItems = prevState.filter((i, idx) => idx !== dragIndex);
            newItems.splice(hoverIndex, 0, item);
            return  [ ...newItems ];
        });
    };
    //end of functions for the drag and drop
   
    const pageStyle = {
        left: '50%',
        transform: 'translateX(-50%)',
        position: 'absolute',
        backgroundColor: 'white',
        width: '90%',
        height: 'auto'
    }
    const widgetContainer = {
        bottom: '0px',
        position: 'fixed',
        width: '100%',
        height: '100px',
        backgroundColor: 'green'
    }
    const submitStyle = {
        position: 'absolute',
        bottom: 0,
        textAlign: 'center',
        left: '50%',
        transform: 'translateX(-50%)'
    }
    let RedirectPage = () => {
        console.log('trying');
        if(redirect === true) {
            return <Redirect to={`/`} />
        }
    } 
    return (
        <div style={{width: '100vw',backgroundColor: 'white', height: 'auto'}}>
            <div style={pageStyle}>
                <div className='row '>
                    <div>
                
               </div>
               <div className='text-right'>
               <h1> <i class="fas fa-mobile-alt"></i></h1>
                </div>
                </div>
                
                <div className={"row"}>
            
                    <div key={statuses[1].status} className={"col-wrapper"} style={{border: '2px solid red',
                width: '100%'}}>
                        {displayYoutube()}
                        {displayAmazon()}
                        {displayBitcoin()}
                        {displayTiktok()}
                        {displaySpotify()}
                        <DropWrapper onDrop={onDrop} status={'in progress'}>
                            <Col>
                            <h1>{page.name} </h1> 
                                {items
                                    .filter(i => i.status === 'in progress')
                                    .map((i, idx) =><div style={{display: 'none'}}> <Item key={i.id} item={i} index={idx} moveItem={moveItem} status={'in progress'} /></div>)
                                }
                            </Col>
                        </DropWrapper>
                    </div>
            
        </div>
            
            </div>
            <DropWrapper onDrop={onDrop} status={'open'}>
            <div style={widgetContainer}>
            <Col>
            <div style={{display: 'flex'}}>
            {items
             .map((i, idx) => <Item key={i.id} item={i} index={idx} moveItem={moveItem} status={'open'} />)}
            </div>
            </Col>
            <button onClick={(e) => handleSubmit(e)} style={submitStyle} className='btn btn-primary btn-warning'>Save Changes</button>
            </div>
            
                        </DropWrapper>
                        {RedirectPage()}
        </div>
        
    )
}

export default EditPage;






