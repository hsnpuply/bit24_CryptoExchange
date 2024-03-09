import {  useState } from 'react'
import btc from '../assets/images/coins/BTC.png'
import ltc from '../assets/images/coins/LTC.png'



export default function Marketing() {
    const [buyNsell,setBuyNsell] = useState('buy');
   const handleMyButton = ()=>{
        buyNsell =='buy' ? setBuyNsell('sell') : setBuyNsell('buy');
    }

    return(
        <section className="marketing bg-gray-800">
            <div className="marketing-container   ">
                <div className="tabel border-2 border-black mt-5 bg-gray-500 rounded-2xl px-2">
                     <div className="operation-section    flex gap-3 ">
                    <div  className={`${buyNsell=='buy' ? 'text-white bg-info_base' : ''} buy py-3`}>
                        <p>خرید از بیت 24</p>
                    </div>
                    <div className={`${buyNsell=='sell' ? 'text-white bg-info_base' : ''} sell py-3`}>
                        <p>فروش به بیت 24</p>
                    </div>
                </div>

                    <div className="price-change p-8 relative  flex flex-col gap-8 w-full h-full">


                        <div className="from-currency bg-success_base flex items-center flex-col gap-2">
                            <div className="from-info flex w-full ">
                            <div className="image-from flex items-center ml-2">
                            <img src={btc} alt=""  className='max-w-6 mx-1'/>
                            <p>بیت کوین</p>
                            </div>
                            <span>(پرداخت میکنید)</span>
                            </div>
                            {/* <svg data-v-7d59fc4e="" data-v-323ffda3="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: "rotate(-90deg)" }}><path data-v-7d59fc4e="" d="M14 8L10 12L14 16" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg> */}
                            <div className="input-from w-full">
                                <input type="number" className='outline-none  px-5 text-black py-2 bg-transparent border-b-2 border-blue-700'/>
                            </div>
                        </div>

                        <div className="change-from-to absolute top-1/3 left-4">
                                <button className='bg-black flex items-center p-2 rounded-full hover:bg-violet-600 duration-500' onClick={handleMyButton} >
                                    <span className=''>
                                        <svg data-v-323ffda3="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.9916 12.0312C19.9836 14.0683 19.2106 16.1023 17.6566 17.6563C14.5326 20.7803 9.46656 20.7803 6.34256 17.6563C5.78656 17.1003 5.33456 16.4813 4.97656 15.8253" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M4.00391 11.87C4.03591 9.866 4.81391 7.872 6.34291 6.343C9.46691 3.219 14.5329 3.219 17.6569 6.343C18.2129 6.899 18.6649 7.518 19.0229 8.174" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M15.9531 8.17467H19.4881V4.63867" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M8.04672 15.8242H4.51172V19.3602" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        <div className="to-currency bg-slate-600 flex w-full flex-col">
                            <div className="to-info flex w-full">
                            <div className="image-to flex items-center ml-2">
                            <img src={ltc} alt=""  className='max-w-6 mx-1'/>
                            <p>لایت کوین</p>
                            </div>
                            <span>(دریافت میکنید)</span>
                            </div>
                            <div className="input-to w-full">
                                <input type="number" className='outline-none  px-5 text-black py-2 bg-transparent border-b-2 border-blue-700'/>
                            </div>
                        </div>

                        {/* Sell or Buy button */}
                        <div className="purchase_sell-button">
                            <button className={`${buyNsell =='buy' ? 'bg-bg_success_a_base' : 'bg-info_base'}  py-3 text-xl rounded-lg w-full`}>
                            <span className='text-white' >{buyNsell =='buy' ? 'شروع خرید' : 'شروع فروش'} </span>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}