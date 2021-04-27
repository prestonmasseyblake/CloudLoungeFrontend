import React, {useEffect} from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Thumbs, EffectFade } from 'swiper';
import {Link} from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import Streaming from './Streaming';
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Thumbs, EffectFade]);

const LoungeStyle = {
    borderRadius: '10px',
    height: '200px',
    width: '200px'                
}
const ColorStyle = {
    backgroundColor: 'red'
}

const Slider = () => {
    useEffect(() =>{
       
    }, []);
    // const displayLounges = () => {
    //     let display = [];
    //     lounges.map(lounge => {
          
    //         return display.push(
    //             <div  className='lounge-card'>
                
    //             <SwiperSlide style={{
    //                 borderRadius: '10px',
    //                 cursor: 'pointer',
    //                 color: 'white',
    //                 height: '200px',
    //                 width: '200px',
    //                 backgroundImage: `url(${lounge.picture})`,
    //                 backgroundSize: 'cover',
    //             }} > <Link style={{ height: '200px',width: '200px'}} to={`/${lounge.slug}`}>
    //                 <h3 className='text-center'>{lounge.name}</h3>
    //                 </Link>
    //                 </SwiperSlide>
                    
    //             </div>
    //         );
    //     });
    //     return display;
    // };
  return (
    <div>
    <section id="main">
      <div className='container-fluid'>
<div className='row d-flex justify-content-between'> 
<h1 class="showcase-heading">Featured</h1>
<h1 class="showcase-heading">See all</h1>
</div>
</div>

    <Swiper style={{width: '100vw'}}
      spaceBetween={4}
      breakpoints={{
        // when window width is >= 640px
        400: {
            width: 400,
            slidesPerView: 1,
          },
        640: {
          width: 640,
          slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
          width: 768,
          slidesPerView: 1.3,
        }}}
      navigation
      pagination={{ clickable: false }}
    //   scrollbar={{ draggable: false }}
    >
         <SwiperSlide><Link exact to='/detail' ><Streaming/></Link></SwiperSlide>
         <SwiperSlide><Link exact to='/detail' ><Streaming/></Link></SwiperSlide>
         <SwiperSlide><Link exact to='/detail' ><Streaming/></Link></SwiperSlide>
         <SwiperSlide><Link exact to='/detail' ><Streaming/></Link></SwiperSlide>
        
      
    </Swiper>
    
        
    </section>
    </div>
  );
}
export default Slider;