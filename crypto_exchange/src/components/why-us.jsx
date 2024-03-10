import fastExchange from '../assets/images/why-us/Fast-Exchange-Light.webp'
import lightWallet from '../assets/images/why-us/Wallet-Light.webp'
import currencyDiversity from '../assets/images/why-us/Currency-diversity-Light.webp'
import Authentication from '../assets/images/why-us/Authentication-Light.webp'


export default function Why_us(){
    return(
        <section className="why-us">
            <div className="why-us_container container">
                <h2>چرا بیت ۲۴؟</h2>
                <span className="font-IRANSansXDemiBold"> بیت ۲۴ مورد اعتماد بیش از <span className="text-anchor_base">۸۰۰ هزار</span> کاربر </span>

                <div className="reasons flex flex-col">

                    <div className="card card-1 flex flex-col items-center justify-center">
                        <div className="card-image">
                            <img src={fastExchange} alt=""  className='max-w-52'/>
                        </div>
                        <div className="card-description text-center">
                            <h3 className='text-lg font-IRANSansXDemiBold'>
			سرعت بالای انتقال و معاملات
		</h3>
                            <span >
			انتقال ارزی و نقدی در کمترین زمان ممکن و خرید و فروش ارز با جدیدترین تکنولوژی حوزه بلاکچین.
                            </span>
                        </div>
                    </div>

                    <div className="card card-1 flex flex-col items-center justify-center">
                        <div className="card-image">
                            <img src={lightWallet} alt=""  className='max-w-52'/>
                        </div>
                        <div className="card-description text-center">

                        <h3 className='text-lg font-IRANSansXDemiBold'>
			سرعت بالای انتقال و معاملات
		</h3>
                            <span >


                            خرید و فروش سریع و بدون کارمزد انتقال با استفاده از کیف پول کاملا امن و اختصاصی صرافی ارز دیجیتال بیت ۲۴.


                            </span>
                        </div>
                    </div>

                    <div className="card card-1 flex flex-col items-center justify-center">
                        <div className="card-image">
                            <img src={currencyDiversity} alt=""  className='max-w-52'/>
                        </div>
                        <div className="card-description text-center">
                        <h3 className='text-lg font-IRANSansXDemiBold'>
			سرعت بالای انتقال و معاملات
		</h3>
                            <span >
			انتقال ارزی و نقدی در کمترین زمان ممکن و خرید و فروش ارز با جدیدترین تکنولوژی حوزه بلاکچین.
                            </span>
                        </div>
                    </div>

                    <div className="card card-1 flex flex-col items-center justify-center">
                        <div className="card-image">
                            <img src={Authentication} alt=""  className='max-w-52'/>
                        </div>
                        <div className="card-description text-center">
                        <h3 className='text-lg font-IRANSansXDemiBold'>
			سرعت بالای انتقال و معاملات
		</h3>
                            <span >
			انتقال ارزی و نقدی در کمترین زمان ممکن و خرید و فروش ارز با جدیدترین تکنولوژی حوزه بلاکچین.
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}