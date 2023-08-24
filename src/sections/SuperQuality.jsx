import React from 'react'
import { arrowRight } from '../assets/icons'
import Button from '../components/Button'
import { shoe8 } from '../assets/images'

const SuperQuality = () => {
  return (
    <div className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container" id="about-us">
      <div className='flex flex-1 flex-col '>
        <h2 className='font-palanquin text-4xl font-bold'>We provide you <span className='text-coral-red'>Super Quanlity</span> Shoes</h2>
        <p className='text-slate-gray'>Ensuring premium comfort and style, our meticulously crafted footwear is desgined to elevate your experient..</p>
        <div className="mt-11">
          <Button label="View Detail" />
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img src={shoe8} alt="" width={570} height={523}/>
      </div>
    </div>
  )
}

export default SuperQuality