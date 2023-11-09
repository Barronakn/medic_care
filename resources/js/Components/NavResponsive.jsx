import { Link, usePage } from '@inertiajs/react';
import React, { useState } from 'react';
import menu_toggler from "../../../public/assets/images/menu_icon1.png"

const NavResponsive = () => {
    const { url } = usePage();
    const [visible, setVisible] = useState(false);

    const navLink = [
        "/",
        "/#about",
        "/#timeline",
        "/#testimonials",
        "/#booking",
        "/#contact",
    ]

    return (
        <nav className='fixed w-full navbar-toggle bg-gray-100 py-3'>
            <div className='flex justify-between items-center px-5'>
                <div>
                    <Link className='flex flex-col justify-center items-center text-center' href='/'>
                        <span className='text-blue-500 text-xl font-bold'>Medic Care</span>
                        <span className='text-xs text-gray-500 font-bold'>Health Specialist</span>
                    </Link>
                </div>
                <div>
                    <img onClick={() => setVisible(!visible)} className='w-8 h-6' loading='lazy' src={menu_toggler} alt="menu_toggler-img" />
                </div>
            </div>

            {
                visible && (<ul className='flex flex-col gap-5 py-6 shadow-xl justify-center items-center'>
                    <li>
                        <Link className={url === navLink[0] ? "text-black font-bold" : " text-gray-500 font-bold scroll-link"} href='/'>Home</Link>
                    </li>
                    <li>
                        <Link className={url === navLink[1] ? "text-black font-bold" : "text-gray-500 font-bold scroll-link"} href='#about'>About</Link>
                    </li>
                    <li>
                        <Link className={url === navLink[2] ? "text-black font-bold" : "text-gray-500 font-bold scroll-link"} href='#timeline'>Timeline</Link>
                    </li>
                    <li>
                        <Link className={url === navLink[3] ? "text-black font-bold" : "text-gray-500 font-bold scroll-link"} href='#testimonials'>Testimonials</Link>
                    </li>
                    <li>
                        <Link className={url === navLink[4] ? "text-black font-bold" : "text-gray-500 font-bold scroll-link"} href='#booking'>Booking</Link>
                    </li>
                    <li>
                        <Link className={url === navLink[5] ? "text-black font-bold" : "text-gray-500 font-bold scroll-link"} href='#contact'>Contact</Link>
                    </li>
                </ul>
                )
            }

        </nav>
    );
};

export default NavResponsive;
