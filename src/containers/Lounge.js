import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Video from '../components/youtubeVideo';
import YoutubeWidget from '../containers/YouTubeWidget';
import Reddit from './RedditSearch/Reddit';
import Spotify from './SpotifySearch/Spotify';
import './Lounge.css';
import SubNav from '../components/loungeNav/Nav';
const Lounge = (props) => {
    const [youtube, setYouTube] = useState(false);
    const [bitcoin, setBitcoin] = useState(false);
    const [amazon, setAmazon] = useState(false);
    const [spotify, setSpotify] = useState(false);
    const [tiktok, setTiktok] = useState(false);
    const [page, setPage] = useState({});
    const [name, setName] = useState('');
    useEffect(() => {
        const slugv = props.match.params.id;
        console.log('slig is ',slugv);
        // axios.get(`http://127.0.0.1:8000/api/create/edit/${slugv}`)
        axios.get(`https://cloudloungebackend.herokuapp.com/api/create/edit/${slugv}`)
        .then(res => {
            setPage(res.data);
            setName(page.name);
            console.log('page',page);
        })
        .catch(err => {
            console.log(err);
        });
    },[props.match.params.id]);
    
    const pageStyle = {
        
    } 
    const displayYoutube = () => {
        
        if(page.isYoutube === true) {
            
            return ( 
                <div>
                    <YoutubeWidget/>
                </div>
            )
        }
    }

    const displayBitcoin = () => {
        
        if(page.isBitcoin === true) {
            console.log('display bitcoin')
            return ( 
                <div>
                    
                    <a href='https://cex.io'><img src='https://cex.io/widget/dark/300/btc-usd' width='300' height='250' /></a>
                </div>
            )
        }
    }

    const displayAmazon = () => {
        
        if(page.isAmazon === true) {
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
        if(page.isSpotify === true) {
            return ( 
                <div>
                    
                    <Spotify/>
                </div>
            )
        }
    }

    const displayTiktok = () => {
        console.log('display tiktok')
        if(page.isTiktok === true) {
            return ( 
                <div>
                    Tiktok
            <div style={{overflow: 'hidden', marginTop: '-100px', marginLeft: '-15px'}}>
            
</div>
                </div>
            )
        }
    }

    return (
        <div >
            <SubNav name={name}/>
            <div className='container-fluid'>
            <button className="btn btn-primary btn-success">
            <Link to={`/edit/${page.slug}`}>Editer</Link>
            </button>
            <h1 className="text-center">{page.name}</h1>
            <div className='page-picture'><img src={page.picture} />
            </div>
            {displayYoutube()}
            {displayAmazon()}
            {displayBitcoin()}
            {displayTiktok()}
            {displaySpotify()}
            
            </div>
        </div>
    )
}

export default Lounge;
