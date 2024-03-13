import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import "swiper/css"
import "./Residencias.css"
import data from "../../utils/slider.json"
import { sliderSettings } from '../../utils/common'
import PropertyCard from '../PropertyCard/PropertyCard'

const Residencias = () => {
  return (
    <section className='r-wrapper'>
        <div className="paddings innerWidth r-container">
            <div className="r-head flexColStart">
                <span className='orangeText'>Best Choices</span>
                <span className='primaryText'>Popular Residenciaes</span>
            </div>

            <Swiper {...sliderSettings}>
                    <SlideNextButton></SlideNextButton>
                {
                    data.map((card, i) => (
                        <SwiperSlide key={i}>
                           <PropertyCard card={card}></PropertyCard>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </section>
  )
}

export default Residencias

const SlideNextButton = () => {
    const swiper = useSwiper();
    return (
      <div className="flexCenter r-buttons">
        <button onClick={() => swiper.slidePrev()} className="r-prevButton">
          &lt;
        </button>
        <button onClick={() => swiper.slideNext()} className="r-nextButton">
          &gt;
        </button>
      </div>
    );
    }