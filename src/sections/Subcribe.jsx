import React from 'react'
import Button from '../components/Button'

const Subcribe = () => {
  return (
    <section id="contact-us" className="max-container flex justify-between items-center max-lg:flex-col gap-10">
      <h3 className='text-4xl leading-[68px] lg:max-w-md font-bold text-center font-palanquin'>
        Sign up for <span className='text-coral-red'>Updates</span> & Newspapers
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder='Enter something..' className='input bg-transparent' />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign up" fullWidth />
        </div>
      </div>
    </section>
  )
}

export default Subcribe