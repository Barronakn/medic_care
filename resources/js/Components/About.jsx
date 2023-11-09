import React from 'react';
import gallery1 from '../../../public/assets/images/gallery/medium-shot-man-getting-vaccine.jpg';
import gallery2 from '../../../public/assets/images/gallery/female-doctor-with-presenting-hand-gesture.jpg';

const About = () => {

    return (
        <section id='about' className='py-24 clear-both mx-32'>
            <div className='flex gap-28'>
                <div className='w-1/2 width '>
                    <h1 className='text-4xl font-bold'>Meet Dr. Carson</h1>
                    <p className='text-lg text-gray-500 py-5'>Protect yourself and others by wearing masks and washing hands frequently. Outdoor is safer than indoor for gatherings or holding events. People who get sick with Coronavirus disease (COVID-19) will experience mild to moderate symptoms and recover without special treatments.</p>
                    <p className='text-lg text-gray-500'>You can feel free to use this CSS template for your medical profession or health care related websites. You can support us a little via PayPal if this template is good and useful for your work.</p>
                </div>
                <div className='w-1/2 width experience'>
                    <p className='text-blue-500 p-8 font-bold flex justify-center items-center text-8xl rounded-50 bg-white shadow-2xl'>12 <span className='text-2xl text-gray-500 font-bold'>Years of Experiences</span></p>
                </div>
            </div>
            <div className='flex gap-10 my-20 justify-center items-center'>
                <img loading='lazy' className='w-550 h-80 object-contain' src={gallery1} alt="medium-shot-man-getting-vaccine-img" />
                <img loading='lazy' className='w-550 h-80 object-contain' src={gallery2} alt="female-doctor-with-presenting-hand-gesture-img" />
            </div>
        </section>
    );
};

export default About;
