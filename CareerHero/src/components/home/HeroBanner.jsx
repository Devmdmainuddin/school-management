import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Autoplay } from 'swiper/modules';

const HeroBanner = () => {
    return (
        <div className='flex justify-center items-center relative'>
            <Swiper
                navigation={false}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[Navigation, Autoplay]} className="mySwiper">

                <SwiperSlide className=''>
                    <div id="slide1" className=" h-[500px] carousel-item relative w-full bg-[url('https://i.ibb.co.com/Cmk08yt/ban02.jpg')] bg-cover bg-center">
                        
g
                    </div>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <div id="slide2" className="flex  items-center justify-center carousel-item relative w-full h-[500px]  bg-[url('https://i.ibb.co.com/K2T5xwX/ban01.jpg')] bg-cover bg-center">
                
                        {/* <img src="https://i.ibb.co.com/K2T5xwX/ban01.jpg" className="w-full h-[500px] object-cover" /> */}
                    </div>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <div id="slide3" className="flex  items-center justify-center carousel-item relative w-full h-[500px]  bg-[url('https://i.ibb.co.com/Cmk08yt/ban02.jpg')] bg-cover bg-center">
                    
                        {/* <img src="https://i.ibb.co.com/Cmk08yt/ban02.jpg" className=" w-full h-[500px]  object-cover" /> */}
                    </div>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <div id="slide4" className="flex  items-center justify-center carousel-item relative w-full h-[500px]  bg-[url('https://i.ibb.co.com/3BsQcC8/ben03.jpg')] bg-cover bg-center">
                   
                        {/* <img src="https://i.ibb.co.com/3BsQcC8/ben03.jpg" className="w-full h-[500px] bg-center  object-cover" /> */}
                    </div>
                </SwiperSlide>




            </Swiper>
            <form action=" " className='absolute top-1/2 translate-y-1/2 z-20 flex items-center justify-center  w-1/2'>
                            <input type="text" name="search" id="" placeholder='search here' className='py-3 px-5 bg-white outline-0 rounded-tl-full rounded-bl-full w-full capitalize'/>
                            <button className='py-3 px-5 text-white bg-[#04d2c8] rounded-tr-full rounded-br-full capitalize'>search</button>
                        </form>
        </div>
    );
};

export default HeroBanner;