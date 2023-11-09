import React from 'react';

const Booking = () => {
    return (
        <section id='booking' className='mx-32'>
            <h1 className='text-4xl text-center font-bold'>Book an appointment</h1>
            <form className='flex flex-col py-20 justify-center items-center gap-10'>
                <div className='flex wrap text-gray-500 gap-10 items-center'>
                    <div>
                        <input className='border-b-gray w-96 width text-gray-500' type="text" placeholder='Full name' name="name" id="name" />
                    </div>
                    <div>
                        <input className='border-b-gray w-96 width text-gray-500' type="email" placeholder='Email address' name="email" id="eamil" />
                    </div>
                </div>

                <div className='flex wrap gap-10 items-center'>
                    <div>
                        <input className='border-b-gray w-96 width text-gray-500' type="tel" placeholder='Phone: 123-456-7890' name="phone" id="phone" />
                    </div>
                    <div>
                        <input className='border-b-gray w-96 width text-gray-500' type="date" placeholder='Your Website' name="date" id="date" />
                    </div>
                </div>

                <div>
                    <textarea className='border-b-gray w-full text-gray-500' name="details" id="details" placeholder='Additional Message' cols="30" rows="4"></textarea>
                </div>

                <input className='font-bold uppercase hover:cursor-pointer py-4 px-14 hover:bg-blue-500 text-white bg-black' type="submit" value="Book Now" />
            </form>
        </section>
    );
};

export default Booking;
