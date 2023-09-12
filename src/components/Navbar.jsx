import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa'
import Logo from '../assets/logo.png'
import config from '../index.json'

const Navbar = () => {

    const social = config.social;

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    if(nav) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-primary-color text-text-color dark:bg-dark-primary-color dark:text-dark-text-color shadow-lg'>
        <div>
            <svg className='h-[50px] w-[50px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
                <rect className="stroke-0 fill-highlight-color dark:fill-dark-highlight-color" x="235" width="30" height="500"/>
                <path className="stroke-0 fill-highlight-color dark:fill-dark-highlight-color" d="m211.66,149.11h-100v88.57h92.5v26.96h-92.5v113.39h-30V121.96h130v27.14Z"/>
                <path className="stroke-0 fill-highlight-color dark:fill-dark-highlight-color" d="m324.35,281.66v98.04h-29.69V120.3h69.63c27.1,0,48.1,6.76,63.01,20.26,14.9,13.51,22.36,32.56,22.36,57.16s-8.28,44.74-24.83,60.42c-16.55,15.68-38.91,23.52-67.07,23.52h-33.4Zm0-133.86v106.36h31.11c20.5,0,36.14-4.79,46.92-14.38,10.78-9.59,16.17-23.12,16.17-40.61,0-34.25-19.79-51.37-59.39-51.37h-34.82Z"/>
            </svg>
        </div>

        {/* Menu */}
        <ul className='hidden md:flex'>
            <li className='hover:text-highlight-color dark:hover:text-dark-highlight-color'>Home</li>
            <li className='hover:text-highlight-color dark:hover:text-dark-highlight-color'>About</li>
            <li className='hover:text-highlight-color dark:hover:text-dark-highlight-color'>Skills</li>
            <li className='hover:text-highlight-color dark:hover:text-dark-highlight-color'>Projects</li>
            <li className='hover:text-highlight-color dark:hover:text-dark-highlight-color'>Contact</li>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-primary-color dark:bg-dark-primary-color flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>About</li>
            <li className='py-6 text-4xl'>Skills</li>
            <li className='py-6 text-4xl'>Projects</li>
            <li className='py-6 text-4xl'>Contact</li>
        </ul>

        {/* Social Icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0077B5] rounded-tr-md'><a className='flex justify-between items-center w-full text-white' target='_blank' rel="noreferrer" href={social.linkedin}>LinkedIn <FaLinkedin size={30}/></a></li>
                <li className='w-[160px] h-[60px] flex justify-between ml-[-100px] hover:ml-[-10px] duration-300 bg-[#171515]'><a className='flex justify-between items-center w-full text-white' target='_blank' rel="noreferrer" href={social.github}>GitHub <FaGithub size={30}/></a></li>
                <li className='w-[160px] h-[60px] flex justify-between ml-[-100px] hover:ml-[-10px] duration-300 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-br-md'><a className='flex justify-between items-center w-full text-white' target='_blank' rel="noreferrer" href={social.instagram}>Instagram <FaInstagram size={30}/></a></li>
            </ul>
        </div>
    </div>
    )
}

export default Navbar