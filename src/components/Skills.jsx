import React from 'react'
import config from '../index.json'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import SilverStripe from '../assets/silverstripe.png';
import Tailwind from '../assets/tailwind.png';

const Skills = () => {
    const skills = config.skills;
    return (
        <div name='skills' className='w-full px-4 sm:px-8 h-screen bg-primary-color text-text-color dark:bg-dark-primary-color dark:text-dark-text-color'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid gap-8'>
                    <div className='sm:text-center pb-8'>
                        <h1 className='text-4xl font-bold inline border-b-4 border-highlight-color dark:border-dark-highlight-color'>{skills.title}</h1>
                        <h2 className='text-2xl mt-4'>{skills.tagline}</h2>
                    </div>
                </div>
                <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full'>
                    <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center'>

                        <div className='pt-4 rounded-lg bg-secondary-color dark:bg-dark-secondary-color shadow-lg sm:hover:scale-110 duration-300'>
                            <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                            <p className='my-4'>HTML</p>
                        </div>

                        <div className='pt-4 rounded-lg bg-secondary-color dark:bg-dark-secondary-color shadow-lg sm:hover:scale-110 duration-300'>
                            <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                            <p className='my-4'>CSS</p>

                        </div>
                        <div className='pt-4 rounded-lg bg-secondary-color dark:bg-dark-secondary-color shadow-lg sm:hover:scale-110 duration-300'>
                            <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon" />
                            <p className='my-4'>JavaScript</p>
                        </div>

                        <div className='pt-4 rounded-lg bg-secondary-color dark:bg-dark-secondary-color shadow-lg sm:hover:scale-110 duration-300'>
                            <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
                            <p className='my-4'>React</p>
                        </div>

                        <div className='pt-4 rounded-lg bg-secondary-color dark:bg-dark-secondary-color shadow-lg sm:hover:scale-110 duration-300'>
                            <img className='w-20 mx-auto' src={SilverStripe} alt="SilverStripe CMS icon" />
                            <p className='my-4'>SilverStripe CMS</p>
                        </div>
                        
                        <div className='pt-4 rounded-lg bg-secondary-color dark:bg-dark-secondary-color shadow-lg sm:hover:scale-110 duration-300'>
                            <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind icon" />
                            <p className='my-4'>Tailwind</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills