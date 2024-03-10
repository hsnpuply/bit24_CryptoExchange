import  { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import customers_club from '../assets/images/banners/customers-club.jpg'
import instant_pay from '../assets/images/banners/instant-pay.jpg'
import most_trades from '../assets/images/banners/most-trades.jpg'
import pro_bazar from '../assets/images/banners/pro-bazar.jpg'
import selling_corpratation from '../assets/images/banners/selling-corpratation.jpg'


export default function Banners_section(){
    let [sliderImage,setSliderImage] = useState(1);



    const handleBanners = () => {
        if(window.innerWidth >= 800) {
          setSliderImage(3);
        } else {
          setSliderImage(1.05);
        }
      };

    return(

        <section className="banners-section my-10 ">
            {/* Banners Section */}
            <div className="banners-container container bg-success_base py-5 rounded-lg ">
            <Swiper
            modules={[ Pagination]}
        onResize={handleBanners}

        pagination={{
            clickable: true,
          }}
        scrollbar={{ draggable: true }}
      spaceBetween={10}
      slidesPerView={sliderImage}

    loop
      className='cursor-grab rounded-lg'
    >
      <SwiperSlide>
        <img src={customers_club} alt="" className='rounded-lg  ' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={instant_pay} alt="" className='rounded-lg  ' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={most_trades} alt="" className='rounded-lg  ' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={pro_bazar} alt="" className='rounded-lg  ' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={customers_club} alt="" className='rounded-lg  ' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={selling_corpratation} alt="" className='rounded-lg  ' />
      </SwiperSlide>
    </Swiper>
            </div>
        </section>
    )
}