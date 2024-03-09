import btc from '../assets/images/coins/BTC.png'

export default function Marketing() {
    return(
        <section className="marketing bg-gray-800">
            <div className="marketing-container container  ">
                <div className="tabel border-2 border-black mt-5 bg-gray-500 rounded-2xl px-2">
                     <div className="operation-section    flex gap-3 ">
                    <div className="buy text-info_base bg-black  py-3 ">
                        <p>خرید از بیت 24</p>
                    </div>
                    <div className="buy text-success_base bg-white py-3">
                        <p>فروش به بیت 24</p>
                    </div>
                </div>

                    <div className="price-change bg-black text-white p-8">
                        <div className="from-currency">
                            <img src={btc} alt=""  className='max-w-6'/>
                            <p>بیت کوین</p>
                            <span>(پرداخت میکنید)</span>
                            
                        </div>
                        <div className="to-currency"></div>
                    </div>
                </div>


            </div>
        </section>
    )
}