import React, {useState,useEffect} from 'react'
import Swiper from './Swiper';
import axios from 'axios';
function Lounges({url}) {
    const[popLounges,setPopLounges] = useState([]); 
    const loungess = ['first','second'];
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`https://cloudloungebackend.herokuapp.com/api/create/lounges`);
                setPopLounges(res.data);
                console.log(res.data);   
            }
            catch (err) {
                console.log('fuck',err.data);
            }
        }
        fetchData();
    }, []);
    
    return (
        <div>
            <Swiper lounges={popLounges}/>
        </div>
    )
}

export default Lounges;
