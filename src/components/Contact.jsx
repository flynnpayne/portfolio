import React, { useRef } from 'react'
import config from '../index.json'
import emailjs from '@emailjs/browser';
import {FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa'

const Contact = () => {
    const contact = config.contact;
    const social = config.social;

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_x88zcsa', 'template_f9r9n4k', form.current, 'fDwVJAOBsSv8NObPM')
        .then((result) => {
            alert('message sent successfully...');
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });


    };

    return (
        
        <div name='contact' className='w-full mb-32 bg-primary-color text-text-color dark:bg-dark-primary-color dark:text-dark-text-color'>
            <div className='max-w-[1000px] mx-auto px-4 sm:px-8 flex flex-col justify-center h-full'>
                <div className='mb-4'>
                    <h1 className='text-4xl inline font-bold border-b-4 border-highlight-color dark:border-dark-highlight-color'>{contact.title}</h1>
                    <ul className='my-8 flex flex-row'>
                        <li className='px-0'><a className='flex justify-between items-center text-text-color dark:text-dark-text-color hover:text-highlight-color dark:hover:text-dark-highlight-color' target='_blank' rel="noreferrer" href={social.linkedin}><FaLinkedin size={30}/></a></li>
                        <li className='px-4'><a className='flex justify-between items-center text-text-color dark:text-dark-text-color hover:text-highlight-color dark:hover:text-dark-highlight-color' target='_blank' rel="noreferrer" href={social.github}><FaGithub size={30}/></a></li>
                        <li className='px-0'><a className='flex justify-between items-center text-text-color dark:text-dark-text-color hover:text-highlight-color dark:hover:text-dark-highlight-color' target='_blank' rel="noreferrer" href={social.instagram}><FaInstagram size={30}/></a></li>
                    </ul>
                    <div className='max-w-lg'>
                        <form className='flex flex-col' ref={form} onSubmit={sendEmail}>
                            <div className='sm:flex flex-row justify-between'>
                                <div className='flex flex-col sm:w-[35%]'>
                                    <label htmlFor="user_name">First Name:</label>
                                    <input type="text" name="user_name" id="user_name" className='p-2 bg-secondary-color dark:bg-dark-secondary-color rounded-md' />
                                </div>
                                <div className='mt-2 flex flex-col sm:w-[60%] sm:mt-0'>
                                    <label htmlFor="user_email">Email:</label>
                                    <input type="email" name="user_email" id="user_email" className='p-2 bg-secondary-color dark:bg-dark-secondary-color rounded-md' />
                                </div>
                            </div>
                            <label htmlFor="message" className='mt-2'>Message:</label>
                            <textarea name="message" id="message" cols="10" rows="5" className='mb-5 w-full p-2 bg-secondary-color dark:bg-dark-secondary-color rounded-md'></textarea>
                            <div className='w-full flex flex-col items-center'>
                                <label htmlFor="submit"></label>
                                <button type="submit" className='w-max border-2 rounded-md px-6 py-3 my-5 flex items-center border-text-color text-text-color hover:border-highlight-color hover:text-highlight-color dark:border-dark-text-color dark:text-dark-text-color dark:hover:border-dark-highlight-color dark:hover:text-dark-highlight-color'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact