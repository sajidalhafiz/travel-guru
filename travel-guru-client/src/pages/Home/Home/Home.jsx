import React, { useState } from 'react';
import { FaAngleLeft, FaAngleRight, FaArrowRight } from 'react-icons/fa6';
import { Link, useLoaderData } from 'react-router-dom';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import './Home.css'

// Import Swiper styles
import 'swiper/css/bundle';
import 'swiper/css/manipulation';
import 'swiper/css/navigation';

const Home = () => {
    const [placeId, setPlaceId] = useState(0);
    
    const places = useLoaderData();
    // console.log(places)

    const swiper = useSwiper();

    const handleBgToggle = (place) => {
        console.log('clicked')
        setPlaceId(place.id)
        const mainLayout = document.getElementById('main-layout');
        mainLayout.style.backgroundImage = `url('${place.image_url}')`;

        const heroTitle = document.getElementById('hero-title');
        heroTitle.innerText = place.place;

        const heroDescription = document.getElementById('hero-description')
        heroDescription.innerText = place.description;

        
    }

    
    return (
        <div className='hero-section'>
            <div className='hero-content'>
                <h1 id='hero-title'>best travel guide for your next trip. 👉</h1>
                <p id='hero-description'></p>
                {placeId ? <Link className='primary-btn' to={`/places/${placeId}`}>Booking <FaArrowRight /></Link> : ''}
            </div>
            <div className='slide'>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={30}
                    slidesPerView={3}
                    navigation
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                >
                    {
                        places.map(place => <SwiperSlide
                            onClick={() => handleBgToggle(place)}
                            key={place.id}
                        >
                            <div className='slide-img'>
                                <img src={place.image_url} alt="" />
                            </div>
                            <div className='slide-title'>
                                <h1>{place.place}</h1>
                            </div>
                        </SwiperSlide>)
                    }
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