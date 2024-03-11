import BTC from '../assets/images/coins/BTC.png';
import LTC from '../assets/images/coins/LTC.png';
import ICP from '../assets/images/coins/ICP.png';
import SHB from '../assets/images/coins/SHB.png';
export default function All_coin_Section(){
    return(
        <section className="all-coin_section mt-5 bg-slate-400">
            <div className="all-coin-container ">
                <h3 className="font-IRANSansXBold text-xl">قیمت لحظه‌ای ارزهای دیجیتال</h3>
                <div className="all-coin-cards border-2 rounded-lg ">
                    <div className="all-coins-status flex gap-2">
                        <div className="most-growth-coin border-b-4 border-spacing-4 border-anchor_base">
                            بیشترین رشد
                        </div>
                        <div className="most-visited-coin">
                            بیشترین بازدید
                        </div>
                        <div className="most-new-coins">
                            جدیدترین ارزها
                        </div>

                    </div>
                    <div className="all-coins-list flex flex-col gap-4 container ">
                        <div className="coin-listed-info border-b-2 border-error_base">
                        <div className="coin-listed flex items-center justify-between">
                            <div className="coin-listed-name flex items-center gap-4">
                                <img src={BTC} alt="" className='max-w-8' />
                                <div className="coin-name flex flex-col gap-2">
                                    <div className="coin-persian-name">
                                        کوین حسن
                                    </div>
                                    <div className="coin-abbr-name text-gray-700">
                                        CHS
                                    </div>
                                </div>
                            </div>
                            <div className="coin-listed-price">
                                <div className="coin-listed-price">
                                $ 0.0041397
                                </div>
                                <div className="coin-growth text-bg_success_d_base font-bold">

                                + 128.59

                                </div>
                            </div>

                        </div>
                        <div className="coin-listed-sell-buy-price flex justify-between items-center">
                            <div className="coin-listed-sell-price">
                                <div className="sell-title">
                                قیمت فروش (تومان)
                                </div>
                                <div className="sell-price">
                                    234
                                </div>

                            </div>
                            <div className="coin-listed-buy-price">
                                <div className="buy-title">
                                قیمت خرید (تومان)
                                </div>
                                <div className="buy-price">
                                    244
                                </div>

                            </div>
                        </div>
                        </div>


                        <div className="coin-listed-info border-b-2 border-error_base">
                        <div className="coin-listed flex items-center justify-between">
                            <div className="coin-listed-name flex items-center gap-4">
                                <img src={LTC} alt="" className='max-w-8' />
                                <div className="coin-name flex flex-col gap-2">
                                    <div className="coin-persian-name">
                                        کوین علی
                                    </div>
                                    <div className="coin-abbr-name text-gray-700">
                                        CAL
                                    </div>
                                </div>
                            </div>
                            <div className="coin-listed-price">
                                <div className="coin-listed-price">
                                $ 0.0041397
                                </div>
                                <div className="coin-growth text-bg_success_d_base font-bold">

                                + 128.59

                                </div>
                            </div>

                        </div>
                        <div className="coin-listed-sell-buy-price flex justify-between items-center">
                            <div className="coin-listed-sell-price">
                                <div className="sell-title">
                                قیمت فروش (تومان)
                                </div>
                                <div className="sell-price">
                                    234
                                </div>

                            </div>
                            <div className="coin-listed-buy-price">
                                <div className="buy-title">
                                قیمت خرید (تومان)
                                </div>
                                <div className="buy-price">
                                    244
                                </div>

                            </div>
                        </div>
                        </div>

                        <div className="coin-listed-info border-b-2 border-error_base">
                        <div className="coin-listed flex items-center justify-between">
                            <div className="coin-listed-name flex items-center gap-4">
                                <img src={ICP} alt="" className='max-w-8' />
                                <div className="coin-name flex flex-col gap-2">
                                    <div className="coin-persian-name">
                                        کوین حاجی
                                    </div>
                                    <div className="coin-abbr-name text-gray-700">
                                        CHJ
                                    </div>
                                </div>
                            </div>
                            <div className="coin-listed-price">
                                <div className="coin-listed-price">
                                $ 0.0041397
                                </div>
                                <div className="coin-growth text-bg_success_d_base font-bold">

                                + 128.59

                                </div>
                            </div>

                        </div>
                        <div className="coin-listed-sell-buy-price flex justify-between items-center">
                            <div className="coin-listed-sell-price">
                                <div className="sell-title">
                                قیمت فروش (تومان)
                                </div>
                                <div className="sell-price">
                                    234
                                </div>

                            </div>
                            <div className="coin-listed-buy-price">
                                <div className="buy-title">
                                قیمت خرید (تومان)
                                </div>
                                <div className="buy-price">
                                    244
                                </div>

                            </div>
                        </div>
                        </div>

                        <div className="coin-listed-info border-b-2 border-error_base">
                        <div className="coin-listed flex items-center justify-between">
                            <div className="coin-listed-name flex items-center gap-4">
                                <img src={SHB} alt="" className='max-w-8' />
                                <div className="coin-name flex flex-col gap-2">
                                    <div className="coin-persian-name">
                                        کوین محسن
                                    </div>
                                    <div className="coin-abbr-name text-gray-700">
                                        CHS
                                    </div>
                                </div>
                            </div>
                            <div className="coin-listed-price">
                                <div className="coin-listed-price">
                                $ 0.0041397
                                </div>
                                <div className="coin-growth text-bg_success_d_base font-bold">

                                + 128.59

                                </div>
                            </div>

                        </div>
                        <div className="coin-listed-sell-buy-price flex justify-between items-center">
                            <div className="coin-listed-sell-price">
                                <div className="sell-title">
                                قیمت فروش (تومان)
                                </div>
                                <div className="sell-price">
                                    234
                                </div>

                            </div>
                            <div className="coin-listed-buy-price">
                                <div className="buy-title">
                                قیمت خرید (تومان)
                                </div>
                                <div className="buy-price">
                                    244
                                </div>

                            </div>
                        </div>
                        </div>
                    </div>

                </div>
                <div className="more-coins-list flex justify-center mt-4">
                        <a href="#" className='flex gap-2'>
                            <span className='text-black font-IRANSansXDemiBold'>
								مشاهده همه 613 ارز
							</span>

                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                <path d="M14 8L10 12L14 16" stroke="#1c1d1f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                        </a>
                    </div>
            </div>
        </section>
    )
}