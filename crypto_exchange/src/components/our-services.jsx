import affilate from '../assets/images/services/Affiliate.webp'
import club from '../assets/images/services/Club.webp'
import inviteFriends from '../assets/images/services/InviteFriends.webp'
import OTCMarket from '../assets/images/services/OTCMarket.webp'
import pro_trade from '../assets/images/services/pro-trade.webp'
export default function Our_services(){
    return(
        <section className="our-services">
            <div className="our-services_container ">
                    {/* services - item */}
                <div className="services pt-20 container bg-blue-400">
                    <h3 className="text-xl font-bold text-center mb-10">خدمات و سرویس‌های بیت ۲۴</h3>
                    <div className="services-cards space-y-4 flex flex-col text-right">

                        <div className="service-card bg-white border-2 border-black shadow-lg shadow-black rounded-2xl py-6 container">
                            <div className="top-service-card flex items-center justify-between">
                                <h3 className="service-name font-semibold">خرید و فروش آنی</h3>
                                <svg data-v-2367bedc="" width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{transform : 'sacle(-1)',rotate:'180deg'}}><path d="M25.3337 15.9999H6.66699" stroke="#5f6163" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M18.668 22.6667L25.3346 16" stroke="#5f6163" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M18.668 9.33325L25.3346 15.9999" stroke="#5f6163" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            </div>
                            <div className="bottom-servicec-card w-full  flex items-center mt-3 ">
                                <span>خرید و فروش بیش از 613 ارز دیجیتال به صورت آنی از طریق درگاه آنلاین پرداخت یا کیف‌پول امن بیت ۲۴</span>
                                <img src={OTCMarket} alt=""  className='max-w-20 mx-4'/>
                            </div>
                        </div>

                        <div className="service-card bg-white border-2 border-black shadow-lg shadow-black rounded-2xl py-6 container">
                            <div className="top-service-card flex items-center justify-between">
                                <h3 className="service-name font-semibold">دعوت از دوستان</h3>
                                <svg data-v-2367bedc="" width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{transform : 'sacle(-1)',rotate:'180deg'}}><path d="M25.3337 15.9999H6.66699" stroke="#5f6163" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M18.668 22.6667L25.3346 16" stroke="#5f6163" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M18.668 9.33325L25.3346 15.9999" stroke="#5f6163" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            </div>
                            <div className="bottom-servicec-card w-full  flex items-center mt-3 ">
                                <span> با معرفی و دعوت از دوستان خود جهت معامله در بیت ۲۴ تا 30٪ از کمیسیون معاملات خرید آنها را دریافت کنید.</span>
                                <img src={inviteFriends} alt=""  className='max-w-20 mx-4'/>
                            </div>
                        </div>


                        <div className="service-card bg-white border-2 border-black shadow-lg shadow-black rounded-2xl py-6 container">
                            <div className="top-service-card flex items-center justify-between">
                                <h3 className="service-name font-semibold">بیت کلاب</h3>
                                <svg data-v-2367bedc="" width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{transform : 'sacle(-1)',rotate:'180deg'}}><path d="M25.3337 15.9999H6.66699" stroke="#5f6163" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M18.668 22.6667L25.3346 16" stroke="#5f6163" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M18.668 9.33325L25.3346 15.9999" stroke="#5f6163" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            </div>
                            <div className="bottom-servicec-card w-full  flex items-center mt-3 ">
                                <span>در بیت کلاب، هر فعالیتی امتیاز دارد! سرگرم شوید، جایزه‌های شگفت انگیز بگیرید و کسب درآمد کنید.</span>
                                <img src={club} alt=""  className='max-w-20 mx-4'/>
                            </div>
                        </div>

                        <div className="service-card bg-white border-2 border-black shadow-lg shadow-black rounded-2xl py-6 container">
                            <div className="top-service-card flex items-center justify-between">
                                <h3 className="service-name font-semibold max-w-44">سیستم همکاری در فروش (افیلیت)</h3>
                                <svg data-v-2367bedc="" width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{transform : 'sacle(-1)',rotate:'180deg'}}><path d="M25.3337 15.9999H6.66699" stroke="#5f6163" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M18.668 22.6667L25.3346 16" stroke="#5f6163" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M18.668 9.33325L25.3346 15.9999" stroke="#5f6163" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            </div>
                            <div className="bottom-servicec-card w-full  flex items-center mt-3 ">
                                <span>با معرفی و دعوت از دوستان خود جهت معامله در بیت ۲۴ تا 60٪ از کمیسیون خرید معاملات آنها را دریافت کنید.</span>
                                <img src={affilate} alt=""  className='max-w-20 mx-4'/>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Professional Trade */}

                <div className="professional-trade mt-40 flex items-center bg-sky-200 flex-col ">

                    {/* pro trade INFO */}
                    <div className="profesional-trade-info text-center flex items-center flex-col gap-3">
                        <h3>بازار معاملات حرفه‌ای بیت ۲۴</h3>
                        <span>در بیت ۲۴ با کمترین کارمزد بازار امن و حرفه‌ای ترید کنید و دارایی‌های خود در کیف‌پول اختصاصی خود نگهداری کنید. </span>
                        <a href="#" className='flex items-center gap-2 font-IRANSansXDemiBold '>
                            <span className='text-anchor_base '>
								مشاهده بازارهای معاملاتی
							</span>
                            <svg data-v-5e4c862d="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 8L10 12L14 16" stroke="#0072ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </a>
                    </div>

                    {/* pro Trade Services  */}
                    <div className="professional-trade-services flex flex-col">
                        {/* pro Trade image */}
                        <div className="pro-trade-img">
                            <img src={pro_trade} alt="" />
                        </div>

                        {/* pro Trade Benefits */}
                        <div className="pro-trade-benefits">
                                {/* 1 */}
                            <div className="benefit-card flex flex-col">
                                <div className="icon-benefit-card">
                                <svg data-v-68a0e693="" data-v-2a565d0e="" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path data-v-68a0e693="" fillRule="evenodd" clipRule="evenodd" d="M19 17H18C17.448 17 17 16.552 17 16V11C17 10.448 17.448 10 18 10H19C20.105 10 21 10.895 21 12V15C21 16.105 20.105 17 19 17Z" stroke="#1c1d1f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path data-v-68a0e693="" fillRule="evenodd" clipRule="evenodd" d="M6 17H5C3.895 17 3 16.105 3 15V12C3 10.895 3.895 10 5 10H6C6.552 10 7 10.448 7 11V16C7 16.552 6.552 17 6 17Z" strokeWidth="1.5" stroke="#1c1d1f" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path data-v-68a0e693="" d="M18.5 10V9.5C18.5 5.91 15.59 3 12 3V3C8.41 3 5.5 5.91 5.5 9.5V10" stroke="#1c1d1f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path data-v-68a0e693="" fillRule="evenodd" clipRule="evenodd" d="M12.625 21.25H11.375C10.685 21.25 10.125 20.69 10.125 20V20C10.125 19.31 10.685 18.75 11.375 18.75H12.625C13.315 18.75 13.875 19.31 13.875 20V20C13.875 20.69 13.315 21.25 12.625 21.25Z" stroke="#1c1d1f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path data-v-68a0e693="" d="M13.875 20H16C17.105 20 18 19.105 18 18V17" stroke="#1c1d1f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                                </div>
                                <div className="title-benefit-card">
                                    <h4>
                                    پشتیبانی ۲۴ ساعته
                                    </h4>
                                </div>
                                <div className="description-benefit-card">
                                    <span>
                                    تیم پشتیبانی بیت ۲۴ ۷ روز هفته و ۲۴ ساعت شبانه روز پاسخگوی سوالات شماست.
                                    </span>
                                </div>

                            </div>

                            {/* 2 */}

                            <div className="benefit-card flex flex-col">
                                <div className="icon-benefit-card">
                                    <svg data-v-2a565d0e="" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M10.2197 13.3322H21.7805C22.3701 13.3321 22.9354 13.0978 23.3522 12.6808C23.769 12.2637 24.003 11.6982 24.0028 11.1087V4.88473C24.0028 4.29494 23.7687 3.72927 23.3517 3.31224C22.9346 2.8952 22.369 2.66098 21.7792 2.66113H10.2184C9.62878 2.66126 9.06341 2.89561 8.64664 3.31263C8.22988 3.72964 7.99586 4.29515 7.99609 4.88473V11.11C7.99609 11.6996 8.23057 12.2649 8.64759 12.6817C9.0646 13.0985 9.63011 13.3325 10.2197 13.3322Z" stroke="#1c1d1f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M22.609 26.552H21.3407C20.9958 26.5517 20.6549 26.6257 20.3413 26.769L15.2695 29.0788" stroke="#1c1d1f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M28.0045 18.7859H24.6698C23.5647 18.7859 22.6689 19.6817 22.6689 20.7867V26.1223C22.6689 27.2273 23.5647 28.1231 24.6698 28.1231H28.0045" stroke="#1c1d1f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M3.99512 28.1231H7.32984C8.43487 28.1231 9.33067 27.2273 9.33067 26.1223V20.7867C9.33067 19.6817 8.43487 18.7859 7.32984 18.7859H3.99512" stroke="#1c1d1f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M23.2102 19.3568L19.079 17.5382C18.336 17.2112 17.4783 17.2801 16.7969 17.7215L13.6505 19.7601C13.1776 20.0665 12.8739 20.5752 12.8283 21.1368C12.7827 21.6984 13.0005 22.2494 13.4178 22.6281V22.6281C13.9594 23.1185 14.7422 23.2368 15.4045 22.9282L17.2803 22.0518L18.5989 23.2486C18.9843 23.5983 19.2149 24.0868 19.2401 24.6066C19.2653 25.1264 19.0829 25.6349 18.7332 26.0203C18.6924 26.0651 18.6497 26.1081 18.6049 26.149L15.8107 28.7064C14.8924 29.547 13.4851 29.5501 12.563 28.7138L10.8833 27.1903C10.4698 26.8232 9.94995 26.5977 9.39941 26.5465" stroke="#1c1d1f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M9.35742 20.1915L12.2701 19.1417C12.9399 18.9068 13.6795 18.981 14.2894 19.3442" stroke="#1c1d1f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M17.4148 6.58136C18.1964 7.36299 18.1964 8.63025 17.4148 9.41187C16.6332 10.1935 15.3659 10.1935 14.5843 9.41187C13.8026 8.63025 13.8026 7.36299 14.5843 6.58136C14.9596 6.206 15.4687 5.99512 15.9995 5.99512C16.5303 5.99512 17.0394 6.206 17.4148 6.58136" stroke="#1c1d1f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </div>
                                <div className="title-benefit-card">
                                    <h4>
                                    سیستم کسب درآمد</h4>
                                </div>
                                <div className="description-benefit-card">
                                    <span>
                                    با کد مخصوص خود دوستانتان را به بیت ۲۴ دعوت کنید و هر دو از کمیسیون معاملات سود دریافت کنید.                                    </span>
                                </div>

                            </div>


                            <div className="benefit-swiper-controls flex items-center gap-4 ">
                                {/* NEXT > arrow */}
                                <svg data-v-2a565d0e="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{transform: 'rotate(180deg)'}}>
                                    <path d="M14 8L10 12L14 16" stroke="#1c1d1f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>

                                  {/* Previous < arrow */}
                                  <svg data-v-2a565d0e="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 8L10 12L14 16" stroke="#1c1d1f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>

                                {/* Progress bar */}
                                <div className="benfeit-progress-main w-24 h-1 bg-bg_teal_c_base rounded-2xl relative">
                                    {/* percentage of progress */}
                                    <div className="benefit-progressed-bar absolute inset-0 bg-blue-800 rounded-2xl w-2/3">
                                    </div>
                                </div>

                                {/*  3/? swiper counter */}
                                <div className="benefit-swiper-counter">
                                    <span>۳</span>
                                    <span>/</span>
                                    <span>۱</span>
                                </div>






                            </div>

                        </div>

                    </div>

                </div>


            </div>
        </section>
    )
}