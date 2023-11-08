import DatePicker from "react-datepicker";
import React, { useState } from 'react';
import { Link } from "react-router-dom";

const BookingForm = ({bookingPlace}) => {

    const { id, place } = bookingPlace;

    const [startDate, setStartDate] = useState(new Date());
    
    return (
        <form className='booking-form'>
            <div className='booking-input'>
                <label htmlFor="">Origin</label>
                <input type="text" name="origin" id="" placeholder='Dhaka' />
            </div>
            <div className='booking-input'>
                <label htmlFor="">Destination</label>
                <input type="text" name="origin" id="" placeholder={`${place}`} />
            </div>
            <div className='date-inputs'>
                <div className='booking-input'>
                    <label htmlFor="">From</label>
                    <DatePicker
                        className='date-picker'
                        showIcon
                        isClearable
                        placeholderText="I have been cleared!"
                        selected={startDate}
                        icon="fa fa-calendar"
                        onChange={(date) => setStartDate(date)} />
                </div>
                <div className='booking-input'>
                    <label htmlFor="">To</label>
                    <DatePicker
                        className='date-picker'
                        showIcon
                        isClearable
                        placeholderText="I have been cleared!"
                        selected={startDate}
                        icon="fa fa-calendar"
                        onChange={(date) => setStartDate(date)} />
                </div>
            </div>
            <Link className='primary-btn' to={`/user/hotels/${id}`}>Start Booking</Link>
        </form>
    );
};

export default BookingForm;