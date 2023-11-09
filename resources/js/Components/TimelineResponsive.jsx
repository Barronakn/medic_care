import React from 'react';

const TimelineResponsive = () => {
    return (
        <div className='flex gap-6'>
            <div className='circles'>
                <div className='flex flex-col items-center justify-center'>
                    <div className='rounded-full bg-white shadow-2xl circle w-20 h-20'></div>
                    <div className='w h-48 bg-gray-200'></div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='rounded-full bg-white shadow-2xl circle w-20 h-20'></div>
                    <div className='w h-48 bg-gray-200'></div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='rounded-full bg-white shadow-2xl circle w-20 h-20'></div>
                    <div className='w h-48 bg-gray-200'></div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='rounded-full bg-white shadow-2xl circle w-20 h-20'></div>
                    <div className='w h-48 bg-gray-200'></div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='rounded-full bg-white shadow-2xl circle w-20 h-20'></div>
                </div>
            </div>

            <div className='flex flex-col gap-18'>
                <div className="flex flex-col">
                    <div className='shadow-2xl text-right'>
                        <h2 className='bg-black text-3xl font-bold rounded-tl-lg rounded-tr-lg text-white p-4'>Get the vaccine</h2>
                        <p className='text-gray-500 text-lg bg-white p-4'>Donec facilisis urna dui, a dignissim mauris pretium a. Quisque quis libero fermentum, tempus felis eu, consequat nibh.</p>
                    </div>

                    <div className='mt-4 text-right'>
                        <p className=''>2021-07-15 Thursday</p>
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className='shadow-2xl text-right'>
                        <h2 className='bg-black text-3xl font-bold rounded-tl-lg rounded-tr-lg text-white p-4'>Certified Nurses</h2>
                        <p className='text-gray-500 text-lg bg-white p-4'>Phasellus eleifend, urna interdum congue viverra, arcu neque ultrices ligula, id pulvinar nisi nibh et lacus. Vivamus gravida, ipsum non euismod tincidunt, sapien elit fermentum mi, quis iaculis enim ligula at arcu.</p>
                    </div>

                    <div className='mt-4 text-right'>
                        <p>2021-05-30 Sunday</p>
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className='shadow-2xl text-right'>
                        <h2 className='bg-black text-3xl font-bold rounded-tl-lg rounded-tr-lg text-white p-4'>Freelance Nursing</h2>
                        <p className='text-gray-500 text-lg bg-white p-4'>If you need a working contact form that submits email to your inbox, please visit our contact page for more information.</p>
                    </div>

                    <div className='w-1/2'>
                        <p>2021-07-31 Saturday</p>
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className='shadow-2xl'>
                        <h2 className='bg-black text-3xl font-bold rounded-tl-lg rounded-tr-lg text-white p-4'>Consulting your health</h2>
                        <p className='text-gray-500 text-lg bg-white p-4'>You are fully permitted to use this template for your commercial or personal website. You are not permitted to redistribute the template ZIP file for a download purpose on any other Free CSS collection website.</p>
                    </div>
                    <div className='w-1/2'>
                        <p>2021-06-28 Monday</p>
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className='shadow-2xl'>
                        <h2 className='bg-black text-3xl font-bold rounded-tl-lg rounded-tr-lg text-white p-4'>Covid-19 Hospitals</h2>
                        <p className='text-gray-500 text-lg bg-white p-4'>Fusce vestibulum euismod nulla sed ultrices. Praesent rutrum nulla vel sapien euismod, quis tempus dui placerat.
                            Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla</p>
                    </div>
                    <div className='w-1/2'>
                        <p>2021-05-18 Tuesday</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TimelineResponsive;
