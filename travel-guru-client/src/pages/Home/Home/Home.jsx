import React from 'react';
import { FaAngleLeft, FaAngleRight, FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import img1 from '../../../assets/Rectangle 1.png';
import img2 from '../../../assets/Sajek.png';
import img3 from '../../../assets/sundorbon.png';
import img4 from '../../../assets/Sreemongol.png';
import './Home.css'

// Import Swiper styles
import 'swiper/css/bundle';
import 'swiper/css/manipulation';
import 'swiper/css/navigation';

const Home = () => {
    const swiper = useSwiper();
    const handleBgToggle = () => {
        console.log('clicked')
        // document.body.style.backgroundImage = URL('https://i.ibb.co/LJLTkDF/sundorbon.png')
        document.body.style.backgroundImage = "none";
        const mainLayout = document.getElementById('main-layout');
        mainLayout.style.backgroundImage = "url('https://i.ibb.co/FsNwRbH/Rectangle-1.png')";
        console.log(mainLayout)
    }

    return (
        <div className='hero-section'>
            <div className='hero-content'>
                <h1>Cox's Bazar</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe ex repudiandae animi ut, laudantium blanditiis neque accusantium, aspernatur sit quo vero. Hic deleniti reprehenderit enim tempore sed doloribus reiciendis itaque!</p>
                <Link className='primary-btn' to='/booking'>Booking <FaArrowRight /></Link>
            </div>
            <div className='slide'>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={30}
                    slidesPerView={3}
                    navigation
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide
                        onClick={handleBgToggle}
                    >
                        <div className='slide-img'>
                            <img src={img2} alt="" />
                        </div>
                        <div className='slide-title'>
                            <h1>Title</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slide-img'>
                            <img src={img2} alt="" />
                        </div>
                        <div className='slide-title'>
                            <h1>Title</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slide-img'>
                            <img src={img3} alt="" />
                        </div>
                        <div className='slide-title'>
                            <h1>Title</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slide-img'>
                            <img src={img4} alt="" />
                        </div>
                        <div className='slide-title'>
                            <h1>Title</h1>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className='slide-navigate'>
                    <button onClick={() => swiper.slideNext()}><FaAngleLeft /></button>
                    <button><FaAngleRight /></button>
                </div>
            </div>
        </div>
    );
};

export default Home;