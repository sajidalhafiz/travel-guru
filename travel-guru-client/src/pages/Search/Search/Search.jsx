import React from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Search.css'
import { useLoaderData } from 'react-router-dom';
import MapComponent from '../Map/MapComponent';

const Search = () => {

    const hotels = useLoaderData();
    console.log(hotels)
    for (let hotel of hotels) {
        console.log(hotel)
    }

    return (
        <div className='search-container'>
            <small>252 stays Apr 13-17 3 guests</small>
            <h2>Stay in {`Cox’s Bazar`}</h2>
            <div className='hotel-map-container'>
                <div className='hotels'>
                    {
                        hotels.map((hotel, index) => <ServiceCard
                            key={index}
                            hotel={hotel}
                        ></ServiceCard>)
                    }
                    {/* <ServiceCard></ServiceCard> */}
                </div>
                <MapComponent />
            </div>
        </div>
    );
};

export default Search;