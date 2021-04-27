import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Video from '../components/youtubeVideo';

const Lounge = (props) => {
    const [page, setPage] = useState({});
    useEffect(() => {
        const slugv = props.match.params.id;
        console.log('slig is ',slugv);
        // axios.get(`http://127.0.0.1:8000/api/create/edit/${slugv}`)
        axios.get(`https://cloudloungebackend.herokuapp.com/api/create/edit/${slugv}`)
        .then(res => {
            setPage(res.data);
            console.log('page',page);
        })
        .catch(err => {
            console.log(err);
        });
    },[props.match.params.id]);
    
    const pageStyle = {
        backgroundImage: `url(${page.picture})`,
        backgroundSize: 'cover',
        
        width: '100vw',
        height: '100vh'
    } 

    return (
        <div style={pageStyle}>
            <button className="btn btn-primary btn-success">
            <Link to={`/edit/${page.slug}`}>Editer</Link>
            </button>
            <h1 className="text-center" style={{color: 'red'}}>{page.name}</h1>
            <p>Lounge</p>
            
        </div>
    )
}

export default Lounge;
