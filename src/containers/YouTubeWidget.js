import React, {useState} from 'react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import {Link} from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import './YouTubeWidget.css';

import SearchBar from './YouTubeSearch/Searchbar';
import VideoDetail from './YouTubeSearch/VideoDetail';
import youtube from './YouTubeSearch/api';
import VideoList from './YouTubeSearch/VideoList';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import YoutubeSlide from '../components/youtubeVideo';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };
const YouTubeWidget = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState([]);
    const [modalIsOpen,setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
      }
      const closeModal = () => {
        setIsOpen(false);
      }
      const handleSubmit = async (termFromSearchBar) => {
        const response = await youtube.get('/search', {
            params: {
                q: termFromSearchBar
            }
        })

        
            setVideos(response.data.items);
       
        console.log("this is resp",response);
    };
    const handleVideoSelect = (video) => {
        setSelectedVideo(selectedVideo.concat(video));
        closeModal();
    }

    const displayVideos = () => {
        let display = [];
        selectedVideo.map(s =>{
            return display.push(
                <div  className='lounge-card'>
                <SwiperSlide style={{
                    borderRadius: '10px',
                    cursor: 'pointer',
                    color: 'white',
                    height: '200px',
                    width: '200px',
                    backgroundSize: 'cover',
                }} > 
                    <VideoDetail video={s} />
                    
                    </SwiperSlide>
                    
                </div>
            );
        });
        return display;
    }
    return (
        <div className='youtube-widget'>
            <div className='close'>X</div>
            <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
        
          <button onClick={closeModal}>close</button>
          <div className='ui container' style={{marginTop: '1em'}}>
                <SearchBar handleFormSubmit={handleSubmit}/>
                <div className='ui grid'>
                    <div className="ui row">
                        
                        <div className="five wide column">
                            <VideoList handleVideoSelect={handleVideoSelect} videos={videos}/>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
            <Swiper
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
    //   scrollbar={{ draggable: false }}
    >
        {displayVideos()}
      <SwiperSlide>
          <div className='blank'>
              <div onClick={openModal} className='add-video'><i class="fas fa-plus fa-10x"></i></div>
          </div>
      </SwiperSlide>
    </Swiper>
        </div>
    )
}

export default YouTubeWidget;

