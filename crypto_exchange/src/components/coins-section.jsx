import BTC from '../assets/images/coins/BTC.png'
import ICP from '../assets/images/coins/ICP.png'
import SHB from '../assets/images/coins/SHB.png'
import LTC from '../assets/images/coins/LTC.png'

export default function Coin_Section(){
    return(
        <section className="coin-section ">
            <div className="coin-container container flex   flex-wrap ">

                {/* 1 */}
                <div className="coin-1  flex flex-col gap-2 flex-1 bg-bg_success_a_base">
                    <div className="top-coin flex items-center gap-4 ">
                    <div className="coin-pic flex items-center gap-1">
                        <img src={BTC} alt=""  className='coin-img max-w-8'/>
                        <p>BTC</p>
                        </div>
                        <span className="text-bg_error_a_base">۶.۳۳ - % </span>
                    </div>
                    <div className="coin-price">
                        <p className='text-left'>۶۳۳۳.۳ $</p>
                    </div>
                </div>
                {/* 2 */}
                <div className="coin-1  flex-col gap-2 flex-1 bg-warning_base">
                    <div className="top-coin flex items-center gap-4 ">
                    <div className="coin-pic flex items-center gap-1">
                        <img src={LTC} alt=""  className='coin-img max-w-8'/>
                        <p>BTC</p>
                        </div>
                        <span className="text-bg_error_a_base">۶.۳۳ - % </span>
                    </div>
                    <div className="coin-price">
                        <p className='text-left'>۶۳۳۳.۳ $</p>
                    </div>
                </div>

   {/* 3 */}
   <div className="coin-3  flex flex-col gap-2 flex-1 bg-error_base">
                    <div className="top-coin flex items-center gap-4 ">
                    <div className="coin-pic flex items-center gap-1">
                        <img src={SHB} alt=""  className='coin-img max-w-8'/>
                        <p>BTC</p>
                        </div>
                        <span className="text-bg_error_a_base">۶.۳۳ - % </span>
                    </div>
                    <div className="coin-price">
                        <p className='text-left'>۶۳۳۳.۳ $</p>
                    </div>
                </div>
                {/* 4 */}
                <div className="coin-4  flex flex-col gap-2 flex-1 bg-bg_success_a_base ">
                    <div className="top-coin flex items-center gap-4 ">
                    <div className="coin-pic flex items-center gap-1 ">
                        <img src={ICP} alt=""  className='coin-img max-w-8'/>
                        <p>BTC</p>
                        </div>
                        <span className="text-bg_error_a_base">۶.۳۳ - % </span>
                    </div>
                    <div className="coin-price">
                        <p className='text-left'>۶۳۳۳.۳ $</p>
                    </div>
                </div>

            </div>
        </section>

// Bayad ina automation beshe
    )
}