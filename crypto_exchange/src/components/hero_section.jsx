

export default function HeroSection(){
    return(
        <section className="hero_section flex flex-col bg-bg_primary_base pt-16">
            <div className="hero-container container flex flex-col gap-8">
                {/* Hero Section Information */}
                <div className="hero-info flex flex-col gap-5 ">
                    {/* All H1's and H2's and Spans get default css in index.css */}
                    <h1 >تجربه آینده‌ی بدون مرز؛</h1>
                    <h3>خرید و فروش بیش از
                        <span className="text-bg_brand_a_base font-semibold"> ۶١٣ </span>
                        ارز دیجیتال در صرافی بیت ۲۴
                    </h3>
                    <span>تنها چند دقیقه تا خرید اولین ارز دیجیتال خود فاصله دارید.</span>

                    <div className="trade-now">
                        <a href="#" className="font-IRANSansXBold text-sm bg-bg_brand_a_base px-6 py-3 rounded-xl text-bg_white_base">
                            شروع خرید و فروش
                        </a>
                    </div>
                </div>

                {/* Hero Section Image */}
                <div className="hero-image">
                    <img src="src/assets/images/banners/hero_section/Header-Light.webp" alt="" />
                </div>

            </div>
        </section>
    )
}