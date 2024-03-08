

export default function Header() {
    return(
        <header className="bg-bg_background_base border-b-4 border-orange-500 ">
            <nav className="bg-red-600 flex items-center justify-between p-4 container ">

            {/* Login and Download App part */}
            <div className="accessesiblity flex items-center gap-4">
                {/* userLogin */}
                <a href="#">
                    <svg data-v-cc864b2e="" width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.8172 4.16689C16.3731 5.72274 16.3731 8.24527 14.8172 9.80112C13.2614 11.357 10.7389 11.357 9.183 9.80112C7.62715 8.24527 7.62715 5.72274 9.183 4.16689C10.7389 2.61104 13.2614 2.61104 14.8172 4.16689" stroke="#1c1d1f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M12 14.0081C16.554 14.0081 21 15.9751 21 19.0001V20.0001C21 20.5521 20.552 21.0001 20 21.0001H4C3.448 21.0001 3 20.5521 3 20.0001V19.0001C3 15.9741 7.446 14.0081 12 14.0081" stroke="#1c1d1f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </a>

                {/* Download App */}
                <a href="#">
                <svg data-v-aaae6b00="" data-v-35333a8c="" width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path data-v-aaae6b00="" d="M12 17V3" stroke="#1c1d1f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path data-v-aaae6b00="" d="M20 21H4" stroke="#1c1d1f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path data-v-aaae6b00="" d="M17 12L11.999 17.001L6.99902 12" stroke="#1c1d1f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </a>

            </div>


            {/* Website Logo */}
            <div className="logo basis-7">
                <a href="#">
                <svg width="66" height="24" viewBox="0 0 66 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.2508 4.12763C21.1488 5.11013 20.2713 5.90663 19.2888 5.90663H18.4668C17.4843 5.90663 16.7703 5.11013 16.8708 4.12763C16.9728 3.14513 17.8503 2.34863 18.8328 2.34863H19.6548C20.6373 2.34863 21.3513 3.14513 21.2508 4.12763Z" fill="#070707"/>
                    <path d="M24.5243 15.6957C24.3863 16.4067 24.9323 17.0652 25.6553 17.0637L28.5713 17.0547L27.6158 20.1537H25.5863C24.4748 20.0997 23.2958 19.8282 22.4273 19.0947C20.4413 17.4177 21.0848 15.2112 21.0848 15.2112L23.2103 4.26416L26.8118 3.91016L26.2118 6.99266H30.5273L29.5178 10.0917H25.6118L24.5243 15.6957Z" fill="#070707"/>
                    <path d="M9.09373 7.00163C9.09373 7.00163 7.28323 6.87263 6.07123 7.73513L7.12423 2.34863H3.58723L1.08973 15.2111C1.08973 15.2111 0.446232 17.4176 2.43223 19.0946C4.41823 20.7716 8.02123 20.0291 8.75473 19.8416C9.48823 19.6541 11.7022 18.7886 12.5557 16.0256C13.3837 13.3481 13.5517 11.3861 13.4947 10.5731C13.4302 9.64163 12.6502 6.94313 9.09373 7.00163ZM9.86023 12.0266C9.72823 13.3511 9.43873 15.2711 8.73223 16.1786C8.02573 17.0876 6.83173 17.1041 6.50773 17.0756C6.50773 17.0756 4.34173 17.1206 4.72273 14.8346C5.10373 12.5471 5.23873 11.9801 5.53573 11.3441C5.83273 10.7081 6.80623 10.0226 7.97473 10.0736C9.14473 10.1246 9.99223 10.7006 9.86023 12.0266Z" fill="#070707"/>
                    <path d="M16.7964 6.99316H20.3334L17.7639 20.1557H14.2344L16.7964 6.99316Z" fill="#070707"/>
                    <path d="M34.9466 23.9985H58.9496C60.7916 23.9985 62.3756 22.6935 62.7281 20.8845L65.9111 4.5975C66.3746 2.214 64.5491 0 62.1206 0H38.1701C36.3386 0 34.7651 1.2975 34.4156 3.0945L31.2146 19.4715C30.7586 21.819 32.5556 24 34.9466 24V23.9985Z" fill="#0066FF"/>
                    <path d="M60.5797 13.9336H58.5592L59.6332 8.51562L55.9462 9.28962L55.0252 13.9336H51.3532L58.1047 3.87012H54.3322L47.5897 13.9351L46.9912 17.0296H54.4222L53.8192 20.1271H57.3502L57.9547 17.0296H59.9737L60.5797 13.9336Z" fill="white"/>
                    <path d="M47.8418 10.3601C47.4443 11.3966 46.4723 12.8876 44.1068 13.7261C43.9208 13.7921 43.0823 13.9931 42.8738 14.0426C41.3813 14.3891 40.2623 14.9651 39.7943 15.5396C39.2303 16.2311 39.1493 17.0306 39.1493 17.0306H46.9868L46.3988 20.1281H35.0078C35.0078 20.1281 35.6828 16.6751 35.7323 16.4291C35.7323 16.4291 35.7323 16.4291 35.7323 16.4276C35.9063 15.6761 36.2093 15.0236 36.5453 14.4806C38.2388 12.1466 41.9513 11.2601 43.1273 10.8326C43.1888 10.8101 43.5578 10.7051 43.9868 10.3481C44.4113 9.98359 44.5298 9.58909 44.5643 9.40159C44.5763 9.33259 44.6123 9.17059 44.6123 8.92459C44.6123 7.84459 43.7198 6.96859 42.6188 6.96859H37.5788L38.1713 3.87109L43.4888 3.88459C46.0448 3.88459 48.1508 5.93509 48.1688 8.48959C48.1688 8.48959 48.2123 9.20359 47.8418 10.3616V10.3601Z" fill="white"/>
                </svg>
                </a>
            </div>




            {/* Mobile Menu icon */}
            <div className="mobile-menu">
                <button>
                <svg data-v-54cee41f="" xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 32 32" fill="none" aria-label="Menu icon">
                <rect x="4" y="10.6667" width="34" height="3.66667" rx="1.33333" fill="#000"></rect>
                <rect x="12" y="18.6667" width="20" height="3.66667" rx="1.33333" fill="#000"></rect></svg>
                </button>
            </div>
            </nav>
        </header>
    )
}