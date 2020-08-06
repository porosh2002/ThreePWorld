import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import SwiperCore, { Autoplay ,EffectFade} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
SwiperCore.use([Autoplay , EffectFade]);
export default class Slider extends Component {
    render() {
        return (
            <div className='slider-main'>
               <Swiper  effect="fade"
      spaceBetween={30}  
      loop={true}
      slidesPerView={1}
      autoplay={{
        delay:3000,
        disableOnInteraction:false
    }}
    >
      <SwiperSlide>
          <Link to=''>
          <img className='slider-img' src='https://images.pexels.com/photos/3680746/pexels-photo-3680746.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='company-logo'></img>
          </Link>
      </SwiperSlide>
      <SwiperSlide>
          <Link to=''>
          <img className='slider-img' src='https://images.pexels.com/photos/4755027/pexels-photo-4755027.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='company-logo'></img>
          </Link>
      </SwiperSlide>
    </Swiper>
            </div>
        )
    }
}
