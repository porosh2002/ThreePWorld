import React from 'react'
import Slider from '../Component/Slider/Slider'
import SliderOffer from '../Component/Slider/offerSlider'
import Feature from '../Component/Feature/Feature'
export default function Home() {
    return (
        <div className='swiperSlider'>
             <div>
             <Slider /> 
             </div>
             <SliderOffer /> 
             <Feature />
        </div>
    )
}
