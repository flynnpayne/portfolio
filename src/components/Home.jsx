import React from 'react'
import config from '../index.json'

const Home = () => {
    const home = config.home;
    return (
        <div name='home' className='w-full h-screen bg-primary-color text-text-color dark:bg-dark-primary-color dark:text-dark-text-color'>
            <div className='max-w-[1000px] mx-auto px-4 sm:px-8 flex flex-col justify-center h-full'>
                <h1 className='text-4xl mb-4 sm:text-7xl font-bold'>{home.title}</h1>
                <h2 className='text-4xl sm:text-3xl font-bold'>{home.tagline}</h2>
                <div>
                    <button className='border-2 rounded-md px-6 py-3 my-5 flex items-center border-text-color text-text-color dark:border-dark-text-color dark:text-dark-text-color hover:bg-highlight-color hover:text-color hover:border-highlight-color dark:hover:bg-dark-highlight-color dark:hover:dark-text-color dark:hover:border-dark-highlight-color'>{home.button}</button>
                </div>
            </div>
        </div>
    )
}
export default Home