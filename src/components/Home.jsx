import React from 'react'
import config from '../index.json'
import { Link } from 'react-scroll'

const Home = () => {
    const home = config.home;
    return (
        <div name='home' className='w-full h-screen bg-primary-color text-text-color dark:bg-dark-primary-color dark:text-dark-text-color'>
            <div className='max-w-[1000px] mx-auto px-4 sm:px-8 flex flex-col justify-center h-full'>
                <h1 className='text-4xl mb-4 sm:text-7xl font-bold'>{home.title}</h1>
                <h2 className='text-2xl sm:text-3xl font-bold'>{home.tagline}</h2>
                <div className='w-max'>
                    <Link to="contact" smooth={true} offset={-120} duration={500}><button className='border-2 rounded-md px-6 py-3 my-5 flex items-center border-text-color text-text-color hover:border-highlight-color hover:text-highlight-color dark:border-dark-text-color dark:text-dark-text-color dark:hover:border-dark-highlight-color dark:hover:text-dark-highlight-color'>{home.button}</button></Link>
                </div>
            </div>
        </div>
    )
}
export default Home