import BookingForm from '../BookingForm/BookingForm';
import './Booking.css';
import "react-datepicker/dist/react-datepicker.css";

const Booking = () => {
    

    return (
        <div className='hero-section'>
            <div className='hero-content'>
                <h1>Cox's Bazar</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe ex repudiandae animi ut, laudantium blanditiis neque accusantium, aspernatur sit quo vero. Hic deleniti reprehenderit enim tempore sed doloribus reiciendis itaque!</p>
            </div>
            <div className=''>
                <BookingForm></BookingForm>
            </div>
        </div>
    );
};

export default Booking;