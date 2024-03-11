import  { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import {  FreeMode } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import btc_price_analysis from '../assets/images/blogs-content/BTC_Price_Analysis-400x225.webp'
import dodge_huge_surge from '../assets/images/blogs-content/doge-huge-surge-possibility-analyst-predicts-400x225.webp'
import btc_bullMarket from '../assets/images/blogs-content/is-2024-bitcoin-bull-market-early-400x225.webp'
import btc_at_peak from '../assets/images/blogs-content/Key-Reasons-Bitcoin-Reached-New-ath-before-halving-2024-400x225.webp'

export default function Blogs_content(){
    let [sliderImage,setSliderImage] = useState(1);



    const handleBanners = () => {
        if(window.innerWidth <= 500){
            setSliderImage(1);
        }
        else if(window.innerWidth <=  700) {
          setSliderImage(2);
        }else if(window.innerWidth <=  900){
          setSliderImage(3.1);
        }
        else if(window.innerWidth >= 1100){
          setSliderImage(4);
        }
      };
    return(
        <section className="blgos-section">
            <div className="blogs-content container bg-bg_success_d_base">
            <h3 className="font-IRANSansXBold text-xl text-txt_de_primary_base">آخرین مطالب وبلاگ</h3>
            <div className="blogs-swiper-contents">
            <Swiper
        modules={[ FreeMode]}
        onResize={handleBanners}
        freeMode={true}

      spaceBetween={30}
      slidesPerView={sliderImage}

      className='rounded-lg'
    >
      <SwiperSlide>
        <img src={dodge_huge_surge} alt="" className='rounded-lg  ' />
        <p>دوج کوین در آستانه یک رشد نجومی؛ آیا دوج کوین سرانجام 1 دلار را خواهد دید؟</p>
        <div className="blog-content-info flex items-center gap-6 ">
            <p className="blog-category before:w-2 before:h-2 before:bg-info_base  before:rounded-full before:inline-block before:ml-2 overflow-auto ">
            اخبار ارز دیجیتال
            </p>
            <span className="blog-date">۲۵ دقیقه پیش </span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <img src={btc_price_analysis} alt="" className='rounded-lg  ' />
        <p>دوج کوین در آستانه یک رشد نجومی؛ آیا دوج کوین سرانجام 1 دلار را خواهد دید؟</p>
        <div className="blog-content-info flex items-center gap-6 ">
            <p className="blog-category before:w-2 before:h-2 before:bg-info_base  before:rounded-full before:inline-block before:ml-2 overflow-auto ">
            اخبار ارز دیجیتال
            </p>
            <span className="blog-date">۲۵ دقیقه پیش </span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <img src={btc_bullMarket} alt="" className='rounded-lg  ' />
        <p>دوج کوین در آستانه یک رشد نجومی؛ آیا دوج کوین سرانجام 1 دلار را خواهد دید؟</p>
        <div className="blog-content-info flex items-center gap-6 ">
            <p className="blog-category before:w-2 before:h-2 before:bg-info_base  before:rounded-full before:inline-block before:ml-2 overflow-auto ">
            اخبار ارز دیجیتال
            </p>
            <span className="blog-date">۲۵ دقیقه پیش </span>
        </div>      </SwiperSlide>
      <SwiperSlide>
      <img src={btc_at_peak} alt="" className='rounded-lg  ' />
        <p>دوج کوین در آستانه یک رشد نجومی؛ آیا دوج کوین سرانجام 1 دلار را خواهد دید؟</p>
        <div className="blog-content-info flex items-center gap-6 ">
            <p className="blog-category before:w-2 before:h-2 before:bg-info_base  before:rounded-full before:inline-block before:ml-2 overflow-auto ">
            اخبار ارز دیجیتال
            </p>
            <span className="blog-date">۲۵ دقیقه پیش </span>
        </div>      </SwiperSlide>
    </Swiper>

        </div>
        <div className="more-blogs-content flex justify-center items-center ">
                <span className='text-txt_de_primary_base font-semibold'>مطالعه بیشتر</span>
                {/* more < arrow */}
                <svg data-v-2a565d0e="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 8L10 12L14 16" stroke="#1c1d1f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
        </div>
        </div>
    </section>
    )
}