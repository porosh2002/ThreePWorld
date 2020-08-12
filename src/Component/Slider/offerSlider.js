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
          <div className='offer-slider'></div>
          </Link>
      </SwiperSlide>
      <SwiperSlide>
          <Link to=''>
          <div className='offer-slider-2'></div>
          </Link>
      </SwiperSlide>
      <SwiperSlide>
          <Link to=''>
          <div className='offer-slider-3'></div>
          </Link>
      </SwiperSlide>
    </Swiper>
            </div>
        )
    }
}
