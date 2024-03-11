export default function Faq(){
    return(
        <section className="faq">
            <div className="faq-container container">

                {/* title faq (FAQ Header) */}
                <div className="title-faq flex justify-between items-center">
                    <h3 className="font-IRANSansXBold text-xl text-txt_de_primary_base">سوالات متداول</h3>

                    {/* more FAQs */}
                    <div className="more-faq flex">
                        <span className='text-txt_de_primary_base '>مطالعه بیشتر</span>
                        {/* more < arrow */}
                        <svg data-v-2a565d0e="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path   path d="M14 8L10 12L14 16" stroke="#1c1d1f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                </div>

                </div>

                {/*  questions and answers (FaqItems) */}
                <div className="faq-items">
                    <div className="faq-item">
                    <div className="faq-header flex  gap-3 items-center">
                        <h3 className="text-txt_de_primary_base">
				برای شروع یادگیری مفاهیم کریپتوکارنسی از چه منابعی می توانم استفاده کنم؟
                        </h3>

                        <button className="accordion-faq flex">
                            <div className="line line-1 w-1 h-5 bg-txt_de_primary_base"></div>
                            <div className="line line-2 w-1 h-5 bg-txt_de_primary_base rotate-90 translate-x-1 "></div>
                        </button>
                    </div>
                    </div>


                </div>
            </div>
        </section>
    )
}