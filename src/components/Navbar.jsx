import React, {useState} from 'react';
import { Link } from "react-router-dom";
import GT from '../assets/GT.png';


const Navbar = () => {
    return (
        <div className='fixed w-full h-20 shadow-xl z-[100] text-current'>
            <div className='flex justify-between items-center w-full px-2 2xl:px-16'> 
            <a href="/" className='cursor-pointer'>
                <img src={GT} alt='/' width='125' height='75'/>    
            </a>   
            <div>
                <a className='ml-10 text-lg uppercase hover:border-b cursor-pointer' href="/">Home</a>
                <a className='ml-10 text-lg uppercase hover:border-b' href="/about"> About</a>
                <a className='ml-10 text-lg uppercase hover:border-b' href="/events"> Events</a>
                <a className='ml-10 text-lg uppercase hover:border-b' href="/architectural"> Architectural</a>
                <a className='ml-10 text-lg uppercase hover:border-b' href="/amenities"> Amenities</a>
                <a className='ml-10 text-lg uppercase hover:border-b' href="/support"> Support</a>
                <a className='ml-10 text-lg uppercase hover:border-b' href="/contact"> Contact</a>
            </div>
            </div>
        </div>
    )
}

export default Navbar;
