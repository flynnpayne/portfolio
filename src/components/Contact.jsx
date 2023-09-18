import React from 'react'
import config from '../index.json'

const Contact = () => {
    const contact = config.contact;
    return (
        <div name='contact' className='w-full h-screen bg-primary-color text-text-color dark:bg-dark-primary-color dark:text-dark-text-color'>
            <div className='max-w-[1000px] mx-auto px-4 sm:px-8 flex flex-col justify-center h-full'>
                <div className='mb-4'>
                    <h1 className='text-4xl inline font-bold border-b-4 border-highlight-color dark:border-dark-highlight-color'>{contact.title}</h1>
                </div>
                <h2 className='text-3xl sm:text-3xl font-bold'>{contact.tagline}</h2>
            </div>
        </div>
    )
}
export default Contact