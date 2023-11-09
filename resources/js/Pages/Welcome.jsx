import About from '@/Components/About';
import Booking from '@/Components/Booking';
import Contact from '@/Components/Contact';
import Home from '@/Components/Home';
import Nav from '@/Components/Nav';
import NavResponsive from '@/Components/NavResponsive';
import Testimonials from '@/Components/Testimonials';
import Timeline from '@/Components/Timeline';
import React from 'react';

const Welcome = () => {

    return (
        <div className='container'>
            <Nav />
            <NavResponsive />
            <Home />
            <About />
            <Timeline />
            <Testimonials />
            <Booking />
            <Contact />
        </div>
    );
};

export default Welcome;
