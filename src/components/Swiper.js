// import Swiper core and required modules
import React, {useEffect} from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import {Link} from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import './Swiper.css';
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const LoungeStyle = {
    borderRadius: '10px',
    height: '200px',
    width: '200px'                
}
const ColorStyle = {
    backgroundColor: 'red'
}

const Slider = ({lounges}) => {
    useEffect(() =>{
        displayLounges()
    }, []);
    const displayLounges = () => {
        let display = [];
        lounges.map(lounge => {
          
            return display.push(
                <div  className=''>
                
                <SwiperSlide><Link to={`/${lounge.slug}`}> 
                    <div class="showcase-box">
                   <img src={lounge.picture}/>

               </div>
               <h3>{lounge.name}</h3>
               <p></p>
                    </Link>
                    </SwiperSlide>
                    
                </div>
            );
        });
        return display;
    };
  return (
    <Swiper
      spaceBetween={70}
      slidesPerView={3}
      navigation={false}
      breakpoints={{
        // when window width is >= 640px
        300: {
          width: 300,
          slidesPerView: 2,
        },
        400: {
            width: 400,
            slidesPerView: 3,
          },
        640: {
          width: 640,
          slidesPerView: 2,
        },
        // when window width is >= 768px
        765: {
          width: 765,
          slidesPerView: 2,
        }}}
      pagination={{ clickable: true }}
    //   scrollbar={{ draggable: false }}
    >
      {displayLounges()}
    </Swiper>
  );
}
export default Slider;