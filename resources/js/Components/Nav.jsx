import { Link, usePage } from '@inertiajs/react';
import React from 'react';

const Nav = () => {
    const { url } = usePage();

    const navLink = [
        "/",
        "/#about",
        "/#timeline",
        "/#testimonials",
        "/#booking",
        "/#contact",
    ]

    // Sélectionnez tous les liens de navigation avec la classe "scroll-link"
    const scrollLinks = document.querySelectorAll('.scroll-link');

    // Parcourez chaque lien et ajoutez un écouteur d'événement
    scrollLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault(); // Empêche le comportement de défilement par défaut

            const targetId = link.getAttribute('href').substring(1); // Récupère l'ID de la section cible
            const targetSection = document.getElementById(targetId); // Sélectionne la section cible

            // Faites défiler la page jusqu'à la section cible
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Fonction pour mettre en gras le lien actif lorsque vous faites défiler
    // window.addEventListener('scroll', () => {
    //     const scrollPosition = window.scrollY;

    //     // Ajoutez des conditions pour chaque section que vous souhaitez mettre en gras
    //     if (scrollPosition >= section1.offsetTop && scrollPosition < section2.offsetTop) {
    //         scrollLinks.forEach(link => link.classList.remove('bold'));
    //         scrollLinks[0].classList.add('bold');
    //     } else if (scrollPosition >= section2.offsetTop) {
    //         scrollLinks.forEach(link => link.classList.remove('bold'));
    //         scrollLinks[1].classList.add('bold');
    //     } else {
    //         scrollLinks.forEach(link => link.classList.remove('bold'));
    //     }
    // });

    return (
        <nav className='fixed w-full navbar'>
            <ul className='flex gap-10 px-72 bg-gray-100 py-6 shadow-xl justify-around items-center'>
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
                    <Link className='flex flex-col justify-center items-center text-center' href='/'>
                        <span className='text-blue-500 text-xl font-bold'>Medic Care</span>
                        <span className='text-xs text-gray-500 font-bold'>Health Specialist</span>
                    </Link>
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
        </nav>
    );
};

export default Nav;
