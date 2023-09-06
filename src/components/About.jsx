import React from 'react'
import config from '../index.json'

const About = () => {
    const about = config.about;
    return (
        <div name='about' className='w-full px-4 sm:px-8 h-screen bg-primary-color text-text-color dark:bg-dark-primary-color dark:text-dark-text-color'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid gap-8'>
                    <div className='sm:text-center pb-8'>
                        <h1 className='text-4xl font-bold inline border-b-4 border-highlight-color dark:border-dark-highlight-color'>{about.title}</h1>
                    </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8'>
                    <div>
                    <h2 className='sm:text-right text-4xl font-bold'>{about.tagline}</h2>
                    </div>
                    <div>
                        <p>{about.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About