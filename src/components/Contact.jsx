import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-primary-color text-text-color dark:bg-dark-primary-color dark:text-dark-text-color'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full'>
                <div className='sm:text-center pb-8 px-4'>
                    <h1 className='text-4xl font-bold inline border-b-4 border-highlight-color dark:border-dark-highlight-color'>Contact</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact