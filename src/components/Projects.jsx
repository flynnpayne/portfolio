import React, {useState} from 'react'
import config from '../index.json'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Projects = () => {

    const projects = config.projects;
    const modal = config.modal

    const [modal1, setModal1] = useState(false);
    const [modal2, setModal2] = useState(false);
    const [modal3, setModal3] = useState(false);

    const toggleModal1 = () => {
        setModal1(!modal1);
    };

    const toggleModal2 = () => {
        setModal2(!modal2);
    };

    const toggleModal3 = () => {
        setModal3(!modal3);
    };

    if(modal1 || modal2 || modal3) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <div name='projects' className='w-full px-4 h-screen sm:px-8 bg-primary-color text-text-color dark:bg-dark-primary-color dark:text-dark-text-color'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full'>
                    <div className='sm:text-center pb-8 px-4'>
                        <h1 className='text-4xl font-bold inline border-b-4 border-highlight-color dark:border-dark-highlight-color'>{projects.title}</h1>
                        <h2 className='text-2xl mt-4'>{projects.tagline}</h2>
                    </div>

                    <div className='md:flex'>
                        <div className='w-full grid sm:grid-cols-3 gap-4 text-center'>

                            <div className='py-4 rounded-lg bg-secondary-color dark:bg-dark-secondary-color flex flex-col items-center shadow-lg shadow-black sm:hover:scale-110 duration-300'>
                                <h1 className='my-4'>{modal.modalTitleOne}</h1>
                                <button onClick={toggleModal1} className='group border-2 rounded-md px-3 py-2 mb-4 flex items-center hover:bg-highlight-color hover:border-highlight-color dark:hover:bg-dark-highlight-color dark:hover:border-dark-highlight-color'>Learn More <HiArrowNarrowRight className='ml-3'/></button>
                            </div>

                            <div className='pt-4 rounded-lg bg-secondary-color dark:bg-dark-secondary-color flex flex-col items-center shadow-lg shadow-black sm:hover:scale-110 duration-300'>
                                <h1 className='my-4'>{modal.modalTitleTwo}</h1>
                                <button onClick={toggleModal2} className='group border-2 rounded-md px-3 py-2 mb-4 flex items-center hover:bg-highlight-color hover:border-highlight-color dark:hover:bg-dark-highlight-color dark:hover:border-dark-highlight-color'>Learn More <HiArrowNarrowRight className='ml-3'/></button>
                            </div>
                            <div className='pt-4 rounded-lg bg-secondary-color dark:bg-dark-secondary-color flex flex-col items-center shadow-lg shadow-black sm:hover:scale-110 duration-300'>
                                <h1 className='my-4'>{modal.modalTitleThree}</h1>
                                <button onClick={toggleModal3} className='group border-2 rounded-md px-3 py-2 mb-4 flex items-center hover:bg-highlight-color hover:border-highlight-color dark:hover:bg-dark-highlight-color dark:hover:border-dark-highlight-color'>Learn More <HiArrowNarrowRight className='ml-3'/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {modal1 && (
                <div className='w-full h-screen top-0 left-0 right-0 bottom-0 fixed flex justify-center items-center'>
                    <div onClick={toggleModal1} className='w-full h-screen top-0 left-0 right-0 bottom-0 bg-gray-700/80 fixed'></div>
                    <div className='absolute max-w-[600px] min-w-[300px] bg-primary-color dark:bg-dark-primary-color p-5 sm:rounded-3xl'>
                        <h1 className='text-4xl'>{modal.modalTitleOne}</h1>
                        <p className='py-4'>{modal.modalDescriptionOne}</p>
                        <p className='font-bold'>Skills Used:</p>
                        <div className='w-full flex justify-between'>
                            <a href='https://nzsi.flynnp4yne.com/' target='_blank' rel='noreferrer' className='text-text-color dark:text-dark-text-color group border-2 rounded-md px-3 py-2 mt-4 flex items-center hover:bg-highlight-color hover:border-highlight-color dark:hover:bg-dark-highlight-color dark:hover:border-dark-highlight-color'>View live site</a>
                            <button onClick={toggleModal1} className='text-text-color dark:text-dark-text-color group border-2 rounded-md px-3 py-2 mt-4 flex items-center hover:bg-highlight-color hover:border-highlight-color dark:hover:bg-dark-highlight-color dark:hover:border-dark-highlight-color'>Close</button>
                        </div>
                    </div>
                </div>
            )}

            {modal2 && (
                <div className='w-full h-screen top-0 left-0 right-0 bottom-0 fixed flex justify-center items-center'>
                    <div onClick={toggleModal2} className='w-full h-screen top-0 left-0 right-0 bottom-0 bg-gray-700/80 fixed'></div>
                    <div className='absolute max-w-[600px] min-w-[300px] bg-primary-color dark:bg-dark-primary-color p-5 sm:rounded-3xl'>
                        <h1 className='text-4xl'>{modal.modalTitleTwo}</h1>
                        <p className='py-4'>{modal.modalDescriptionTwo}</p>
                        <p className='font-bold'>Skills Used:</p>
                        <div className='w-full flex justify-between'>
                            <a href='https://exmouthview.flynnp4yne.com/' target='_blank' rel='noreferrer' className='text-text-color dark:text-dark-text-color group border-2 rounded-md px-3 py-2 mt-4 flex items-center hover:bg-highlight-color hover:border-highlight-color dark:hover:bg-dark-highlight-color dark:hover:border-dark-highlight-color'>View live site</a>
                            <button onClick={toggleModal2} className='text-text-color dark:text-dark-text-color group border-2 rounded-md px-3 py-2 mt-4 flex items-center hover:bg-highlight-color hover:border-highlight-color dark:hover:bg-dark-highlight-color dark:hover:border-dark-highlight-color'>Close</button>
                        </div>
                    </div>
                </div>
            )}

            {modal3 && (
                <div className='w-full h-screen top-0 left-0 right-0 bottom-0 fixed flex justify-center items-center'>
                    <div onClick={toggleModal3} className='w-full h-screen top-0 left-0 right-0 bottom-0 bg-gray-700/80 fixed'></div>
                    <div className='absolute max-w-[600px] min-w-[300px] bg-primary-color dark:bg-dark-primary-color p-5 sm:rounded-3xl'>
                        <h1 className='text-4xl'>{modal.modalTitleThree}</h1>
                        <p className='py-4'>{modal.modalDescriptionThree}</p>
                        <p className='font-bold'>Skills Used:</p>
                        <div className='w-full flex justify-between'>
                            <a href='https://yeoldebookshoppe.flynnp4yne.com/' target='_blank' rel='noreferrer' className='text-text-color dark:text-dark-text-color group border-2 rounded-md px-3 py-2 mt-4 flex items-center hover:bg-highlight-color hover:border-highlight-color dark:hover:bg-dark-highlight-color dark:hover:border-dark-highlight-color'>View live site</a>
                            <button onClick={toggleModal3} className='text-text-color dark:text-dark-text-color group border-2 rounded-md px-3 py-2 mt-4 flex items-center hover:bg-highlight-color hover:border-highlight-color dark:hover:bg-dark-highlight-color dark:hover:border-dark-highlight-color'>Close</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
};

export default Projects