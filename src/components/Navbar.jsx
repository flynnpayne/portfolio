import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa'
import Logo from '../assets/logo1.png'
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
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-primary-color text-text-color dark:bg-dark-primary-color dark:text-dark-text-color'>
        <div>
            <img src={Logo} alt="Logo" style={{width: '50px'}}/>
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