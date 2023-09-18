import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa'
import config from '../index.json'
import { Link } from 'react-scroll'

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
        <div className='max-w-[75px]'>
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 600 600" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" width="75" height="75"><text id="logo2-s-text1" dx="0" dy="0" font-family="&quot;Roboto&quot;" font-size="200" font-weight="400" letter-spacing="10" transform="matrix(1.784228 0 0 1.784228 165.096682 424.895973)" stroke-width="0"><tspan id="logo2-s-tspan1" y="0" font-weight="400" className='fill-highlight-color dark:fill-dark-highlight-color' stroke-width="0">FP</tspan></text><path id="logo2-u-ellipse" d="M125.605103,121.854019C93.800544,154.631435,49.278938,175,0,175c-96.649831,0-175-78.350169-175-175s78.350169-175,175-175c45.326165,0,86.627581,17.232,117.710403,45.502156" transform="matrix(1.356195 0 0 1.356195 251.043219 300)" className='stroke-highlight-color dark:stroke-dark-highlight-color' fill-opacity="0" stroke-width="15" stroke-linecap="round"/></svg>
        </div>

        {/* Menu */}
        <ul className='hidden md:flex'>
            <li className='py-2 hover:text-highlight-color dark:hover:text-dark-highlight-color'><Link to="home" smooth={true} duration={500}>Home</Link></li>
            <li className='py-2 hover:text-highlight-color dark:hover:text-dark-highlight-color'><Link to="about" smooth={true} duration={500}>About</Link></li>
            <li className='py-2 hover:text-highlight-color dark:hover:text-dark-highlight-color'><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
            <li className='py-2 hover:text-highlight-color dark:hover:text-dark-highlight-color'><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
            <li className='py-2 hover:text-highlight-color dark:hover:text-dark-highlight-color'><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-primary-color dark:bg-dark-primary-color flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="skills" smooth={true} duration={500}>Skills</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="projects" smooth={true} duration={500}>Projects</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact</Link></li>
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