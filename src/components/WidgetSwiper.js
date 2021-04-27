import React, {useEffect} from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import {Link} from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

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

const WidgetSwipper = ({icon}) => {
    
    
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
    //   scrollbar={{ draggable: false }}
    >
      <i className={icon}></i>
    </Swiper>
  );
}
export default WidgetSwipper;