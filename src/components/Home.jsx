import React from 'react'
import config from '../index.json'
import { Link } from 'react-scroll'
import {FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa'

const Home = () => {
    const home = config.home;
    const social = config.social;
    return (
        <div name='home' className='w-full h-[110vh] bg-primary-color text-text-color dark:bg-dark-primary-color dark:text-dark-text-color'>
            <div className='max-w-[1000px] mx-auto px-4 sm:px-8 flex flex-col justify-center h-full'>
                <h1 className='text-4xl w-max mb-4 sm:text-7xl font-bold border-b-4 border-highlight-color dark:border-dark-highlight-color'>{home.title}</h1>
                <h2 className='text-2xl sm:text-3xl font-bold'>{home.tagline}</h2>
                <ul className='mb-4 mt-12 flex flex-row'>
                    <li className='px-0'><a className='flex justify-between items-center text-text-color dark:text-dark-text-color hover:text-highlight-color dark:hover:text-dark-highlight-color' target='_blank' rel="noreferrer" aria-label="Linkedin" href={social.linkedin}><FaLinkedin size={30}/></a></li>
                    <li className='px-4'><a className='flex justify-between items-center text-text-color dark:text-dark-text-color hover:text-highlight-color dark:hover:text-dark-highlight-color' target='_blank' rel="noreferrer" aria-label="Github" href={social.github}><FaGithub size={30}/></a></li>
                    <li className='px-0'><a className='flex justify-between items-center text-text-color dark:text-dark-text-color hover:text-highlight-color dark:hover:text-dark-highlight-color' target='_blank' rel="noreferrer" aria-label="Instagram" href={social.instagram}><FaInstagram size={30}/></a></li>
                </ul>
                <div className='w-max'>
                    <Link to="contact" smooth={true} offset={-120} duration={500}><button className='border-2 rounded-md px-6 py-3 flex items-center border-text-color text-text-color hover:border-highlight-color hover:text-highlight-color dark:border-dark-text-color dark:text-dark-text-color dark:hover:border-dark-highlight-color dark:hover:text-dark-highlight-color'>{home.button}</button></Link>
                </div>
            </div>
        </div>
    )
}
export default Home