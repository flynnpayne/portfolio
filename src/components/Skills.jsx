import React from 'react'
import config from '../index.json'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import Tailwind from '../assets/tailwind.png'
import Python from '../assets/python.png'

const Skills = () => {
    const skills = config.skills;
    return (
        <div name='skills' className='w-full mb-32 bg-primary-color text-text-color dark:bg-dark-primary-color dark:text-dark-text-color'>
            <div className='max-w-[1000px] mx-auto px-4 sm:px-8 flex flex-col justify-center h-full'>
                <div className='mb-4'>
                    <h1 className='text-4xl inline font-bold border-b-4 border-highlight-color dark:border-dark-highlight-color'>{skills.title}</h1>
                </div>

                <div className='w-full flex flex-wrap text-center pb-8'>
                    <div className='bg-secondary-color dark:bg-dark-secondary-color rounded-md shadow-lg mt-4 w-full sm:hover:scale-105 duration-500 sm:my-4 mr-4 sm:w-[15rem]'>
                        <img className='w-20 mx-auto mt-4' src={HTML} alt="HTML icon" />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='bg-secondary-color dark:bg-dark-secondary-color rounded-md shadow-lg mt-4 w-full sm:hover:scale-105 duration-500 sm:my-4 mr-4 sm:w-[15rem]'>
                        <img className='w-20 mx-auto mt-4' src={CSS} alt="CSS icon" />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='bg-secondary-color dark:bg-dark-secondary-color rounded-md shadow-lg mt-4 w-full sm:hover:scale-105 duration-500 sm:my-4 mr-4 sm:w-[15rem]'>
                        <img className='w-20 mx-auto mt-4' src={JavaScript} alt="Javascript icon" />
                        <p className='my-4'>JAVASCRIPT</p>
                    </div>
                    <div className='bg-secondary-color dark:bg-dark-secondary-color rounded-md shadow-lg mt-4 w-full sm:hover:scale-105 duration-500 sm:my-4 mr-4 sm:w-[15rem]'>
                        <img className='w-20 mx-auto mt-4' src={Python} alt="Python icon" />
                        <p className='my-4'>Python</p>
                    </div>
                    <div className='bg-secondary-color dark:bg-dark-secondary-color rounded-md shadow-lg mt-4 w-full sm:hover:scale-105 duration-500 sm:my-4 mr-4 sm:w-[15rem]'>
                        <img className='w-20 mx-auto mt-4' src={ReactImg} alt="React icon" />
                        <p className='my-4'>REACT</p>
                    </div>
                    <div className='bg-secondary-color dark:bg-dark-secondary-color rounded-md shadow-lg mt-4 w-full sm:hover:scale-105 duration-500 sm:my-4 mr-4 sm:w-[15rem]'>
                        <img className='w-20 mx-auto mt-4' src={Tailwind} alt="Tailwind icon" />
                        <p className='my-4'>TAILWIND</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Skills