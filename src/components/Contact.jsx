import React from 'react'
import config from '../index.json'
import {FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa'

const Contact = () => {
    const contact = config.contact;
    const social = config.social;
    return (
        <div name='contact' className='w-full h-screen bg-primary-color text-text-color dark:bg-dark-primary-color dark:text-dark-text-color'>
            <div className='max-w-[1000px] mx-auto px-4 sm:px-8 flex flex-col justify-center h-full'>
                <div className='mb-4'>
                    <h1 className='text-4xl inline font-bold border-b-4 border-highlight-color dark:border-dark-highlight-color'>{contact.title}</h1>
                    <ul className='mt-8 flex flex-row'>
                        <li className='px-0'><a className='flex justify-between items-center text-text-color dark:text-dark-text-color' target='_blank' rel="noreferrer" href={social.linkedin}><FaLinkedin size={30}/></a></li>
                        <li className='px-4'><a className='flex justify-between items-center text-text-color dark:text-dark-text-color' target='_blank' rel="noreferrer" href={social.github}><FaGithub size={30}/></a></li>
                        <li className='px-0'><a className='flex justify-between items-center text-text-color dark:text-dark-text-color' target='_blank' rel="noreferrer" href={social.instagram}><FaInstagram size={30}/></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Contact