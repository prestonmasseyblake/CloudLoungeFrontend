import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Slider from '../components/Swiper';
import axios from 'axios';
import Lounges from '../components/Lounges';
import Search from '../components/Search';
function Home() {
    const[searchResponses,setSearchResponses]=useState();
    const[showSearch, setShowSearch] = useState(false);
    const popularUrl = 'https://cloudloungebackend.herokuapp.com/api/create/lounges';
    
    const handleSubmit = (search) => {
        let url = `https://cloudloungebackend.herokuapp.com/api/create/search/${search}`;
        console.log(url);
        axios.get(url)
        .then(res => {
            
            setSearchResponses(res.data);
            setShowSearch(true);
            console.log(searchResponses);
        })
        .catch(err => {
            console.log(err);
        });
    }
    const displaySearchResults = () => {
        let display = [];
        console.log(searchResponses);
        if(showSearch) {
            if (searchResponses.length === 0) {
                return (
                    <div className='container'>
                        <p>There are no results. Try something else.</p>
                    </div>
                )
            }
            else if (searchResponses.length !== 0) {
            
                    searchResponses.map(s => { 
                    return display.push(
                        <div className='container'>
                            <Link style={{textDecoration: 'none'}} to={`/${s.name}`}><div><img style={{width: '20px',height: '20px'}} src={s.picture} />{s.name}</div></Link>
                            
                        </div>
                    )
                     })
            
            }
            return display;
        }

    }

    return (
        <div className='home'>
            <div className='container-fluid'>
            <Search handleSubmit={handleSubmit} />
            {displaySearchResults()}
            <Lounges url={popularUrl}/>
            <Lounges url={popularUrl}/>
            <div className='jumbotron'>
            <div className='text-center'>
                <h1 className="text-center">Create A Lounge</h1>
                <Link exact to='/create' ><button className='btn btn-primary btn-success'>Create</button></Link>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Home;
