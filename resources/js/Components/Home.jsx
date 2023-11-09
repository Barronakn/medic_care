import { Link } from '@inertiajs/react';
import React from 'react';

const Home = () => {
    return (
        <header className='pt-20'>
            <canvas className='diaspro'></canvas>
            <div className='card bg-white float-right mr-38 w-2/5 p-8 -mt-70'>
                <h1 className='text-black font-bold text-6xl'>
                    Better <span className='text-blue-500'>health</span>
                </h1>
                <p className='text-gray-600 text-xl py-3'>Medic Care is a Bootstrap 5 Template provided by TemplateMo website. Credits go to FreePik and RawPixel for images used in this template.</p>
                <div className='info flex justify-center items-center gap-20'>
                    <Link className='uppercase font-bold text-blue-500 border p-2 border-gray-200' href='#'>Learn More</Link>
                    <p> 010-020-0340</p>
                </div>
            </div>
        </header>
    );
};

export default Home;
