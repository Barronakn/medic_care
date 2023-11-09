import { Link } from '@inertiajs/react';
import React from 'react';

const Contact = () => {
    return (
        <footer id='contact' className='text-gray-500 bg-gray-50 px-32 py-10'>
            <div className='flex py-10 gap-32'>
                <div className='w-1/2 width flex flex-col gap-10'>
                    <h1 className='text-3xl text-black text-center font-bold'>Opening Hours</h1>
                    <p className='border-b-gray pb-2'>Sunday : Closed</p>
                    <p className='flex justify-between pb-2 items-center border-b-gray'>Monday, Tuesday - Firday<span className='font-bold'>8:00 AM - 3:30 PM</span></p>
                    <p className='flex justify-between pb-2 items-center border-b-gray'>Saturday<span className='font-bold'>10:30 AM - 5:30 PM</span></p>
                </div>
                <div className='w-1/ width flex flex-col gap-5'>
                    <h1 className='text-3xl text-black text-center font-bold'>Our Clinic</h1>
                    <Link className='text-end hover:text-blue-500' href="mailto:hello@company.co">hello@company.co</Link>
                    <p className='text-end'>123 Digital Art Street, San Diego, CA 92123</p>
                </div>
            </div>
            <div>
                <p className='text-center'>Copyright © Medic Care 2021</p>
            </div>
        </footer>
    );
};

export default Contact;
