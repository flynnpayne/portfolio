import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-scroll'

const Navbar = () => {

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
            <Link to="home" smooth={true} duration={500}><li className='py-2 hover:text-highlight-color dark:hover:text-dark-highlight-color'>Home</li></Link>
            <Link to="about" smooth={true} duration={500}><li className='py-2 hover:text-highlight-color dark:hover:text-dark-highlight-color'>About</li></Link>
            <Link to="skills" smooth={true} duration={500}><li className='py-2 hover:text-highlight-color dark:hover:text-dark-highlight-color'>Skills</li></Link>
            <Link to="projects" smooth={true} duration={500}><li className='py-2 hover:text-highlight-color dark:hover:text-dark-highlight-color'>Projects</li></Link>
            <Link to="contact" smooth={true} duration={500}><li className='py-2 hover:text-highlight-color dark:hover:text-dark-highlight-color'>Contact</li></Link>
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
    </div>
    )
}

export default Navbar