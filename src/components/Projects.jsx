import React from 'react'
import config from '../index.json'
import NZSI from '../assets/nzsi.png'
import exmouth from '../assets/exmouth.png'
import books from '../assets/books.png'

const Projects = () => {
    const projects = config.projects;
    return (
        <div name='projects' className='w-full mb-32 bg-primary-color text-text-color dark:bg-dark-primary-color dark:text-dark-text-color'>
            <div className='max-w-[1000px] mx-auto px-4 sm:px-8 flex flex-col justify-center h-full'>
                <div className='mb-8'>
                    <h1 className='text-4xl inline font-bold border-b-4 border-highlight-color dark:border-dark-highlight-color'>{projects.title}</h1>
                    <p className='mt-4'>{projects.tagline}</p>
                </div>
                <div className='flex flex-col items-center sm:flex-row flex-wrap sm:justify-between'>
                    <div className='w-full mb-4 sm:w-[19rem] sm:mb-0 sm:hover:scale-105 duration-500'>
                        <figure>
                            <img className='rounded-t-lg' src={NZSI} alt=""/>
                        </figure>
                        <div className='bg-secondary-color dark:bg-dark-secondary-color rounded-b-lg'>
                            <h2 className='text-2xl py-4 text-center'>NZ Stringed Instruments</h2>
                            <div className='flex flex-row justify-between py-4 px-6'>
                                <a href="https://nzsi.flynnp4yne.com/" target='_blank' rel="noreferrer"><button tabIndex={-1} className='border-2 rounded-md px-2 py-1 flex items-center border-text-color text-text-color hover:border-highlight-color hover:text-highlight-color dark:border-dark-text-color dark:text-dark-text-color dark:hover:border-dark-highlight-color dark:hover:text-dark-highlight-color'>Demo</button></a>
                                <a href="https://github.com/flynnpayne/nzsi" target='_blank' rel="noreferrer"><button tabIndex={-1} className='border-2 rounded-md px-2 py-1 flex items-center border-text-color text-text-color hover:border-highlight-color hover:text-highlight-color dark:border-dark-text-color dark:text-dark-text-color dark:hover:border-dark-highlight-color dark:hover:text-dark-highlight-color'>GitHub</button></a>
                            </div>
                        </div>
                    </div>
                    <div className='w-full mb-4 sm:w-[19rem] sm:mb-0 sm:hover:scale-105 duration-500'>
                        <figure>
                            <img className='rounded-t-lg' src={exmouth} alt=""/>
                        </figure>
                        <div className='bg-secondary-color dark:bg-dark-secondary-color rounded-b-lg'>
                            <h2 className='text-2xl py-4 text-center'>Exmouth View Hotel</h2>
                            <div className='flex flex-row justify-between py-4 px-6'>
                                <a href="https://exmouthview.flynnp4yne.com/" target='_blank' rel="noreferrer"><button tabIndex={-1} className='border-2 rounded-md px-2 py-1 flex items-center border-text-color text-text-color hover:border-highlight-color hover:text-highlight-color dark:border-dark-text-color dark:text-dark-text-color dark:hover:border-dark-highlight-color dark:hover:text-dark-highlight-color'>Demo</button></a>
                                <a href="https://github.com/flynnpayne/exmouthview" target='_blank' rel="noreferrer"><button tabIndex={-1} className='border-2 rounded-md px-2 py-1 flex items-center border-text-color text-text-color hover:border-highlight-color hover:text-highlight-color dark:border-dark-text-color dark:text-dark-text-color dark:hover:border-dark-highlight-color dark:hover:text-dark-highlight-color'>GitHub</button></a>
                            </div>
                        </div>
                    </div>
                    <div className='w-full mb-4 sm:w-[19rem] sm:mb-0 sm:hover:scale-105 duration-500'>
                        <figure>
                            <img className='rounded-t-lg' src={books} alt=""/>
                        </figure>
                        <div className='bg-secondary-color dark:bg-dark-secondary-color rounded-b-lg'>
                            <h2 className='text-2xl py-4 text-center'>Ye Olde Bookshoppe</h2>
                            <div className='flex flex-row justify-between py-4 px-6'>
                                <a href="https://yeoldebookshoppe.flynnp4yne.com/" target='_blank' rel="noreferrer"><button tabIndex={-1} className='border-2 rounded-md px-2 py-1 flex items-center border-text-color text-text-color hover:border-highlight-color hover:text-highlight-color dark:border-dark-text-color dark:text-dark-text-color dark:hover:border-dark-highlight-color dark:hover:text-dark-highlight-color'>Demo</button></a>
                                <a href="https://github.com/flynnpayne/yeoldebookshoppe" target='_blank' rel="noreferrer"><button tabIndex={-1} className='border-2 rounded-md px-2 py-1 flex items-center border-text-color text-text-color hover:border-highlight-color hover:text-highlight-color dark:border-dark-text-color dark:text-dark-text-color dark:hover:border-dark-highlight-color dark:hover:text-dark-highlight-color'>GitHub</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Projects