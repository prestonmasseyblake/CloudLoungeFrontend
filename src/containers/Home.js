import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Slider from '../components/Swiper';
import axios from 'axios';
import Lounges from '../components/Lounges';

import Search from '../components/Search';
function Home() {
    const popularUrl = 'https://cloudloungebackend.herokuapp.com/api/create/lounges';
    return (
        <div className='home'>
            <div className='container-fluid'>
            <Search/>
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
