import React from 'react';
import './ServiceCard.css'
import { Rating } from '@smastrom/react-rating';

const ServiceCard = (props) => {

    console.log(props.hotel)
    const {
        place,
        service_name,
        image_url,
        bedrooms,
        beds,
        hotel_name,
        price_per_night_tk,
        reviews,
        star_ratings,
        features,
        baths
    } = props.hotel;

    return (
        <div>
            <div className='service-container'>
                <div className='service-img'>
                    <img src={image_url} alt="" />
                </div>
                <div className='service-content'>
                    <h3>{hotel_name}</h3>
                    <h5>{service_name}</h5>
                    <p>{bedrooms} bedrooms   {beds} beds   {baths} baths</p>
                    <p>
                        {
                            features.map((f, index) =>
                                <span key={index}>{f}</span>
                            )
                        }
                    </p>
                    <p>Cancellation fexibility availiable</p>
                    <div className='reviews'>
                        <div className='ratings'>
                            <Rating
                                style={{ maxWidth: 90 }}
                                value={star_ratings}
                                readOnly
                            />
                            <small>{star_ratings} ({reviews})</small>
                        </div>
                        <div className='price'>
                            <h3>TK{price_per_night_tk}/-</h3>
                            <p>night</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;