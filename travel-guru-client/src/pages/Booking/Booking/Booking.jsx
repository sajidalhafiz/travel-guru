import { useLoaderData } from 'react-router-dom';
import BookingForm from '../BookingForm/BookingForm';
import './Booking.css';
import "react-datepicker/dist/react-datepicker.css";

const Booking = () => {
    const place = useLoaderData();
    console.log(place)

    return (
        <div className='hero-section'>
            <div className='hero-content'>
                <h1>{place[0].place}</h1>
                <p>{place[0].description}</p>
            </div>
            <BookingForm
                bookingPlace={place[0]}
            ></BookingForm>

        </div>
    );
};

export default Booking;