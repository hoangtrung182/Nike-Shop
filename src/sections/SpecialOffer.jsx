import React from 'react'
import { offer } from '../assets/images'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'

const SpecialOffer = () => {
  return (
    <section className="flex flex-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} alt="offer" width={772} height={687} className='object-contain w-full'/>
      </div>
      <div className='flex flex-1 flex-col '>
        <h2 className='font-palanquin text-4xl font-bold'><span className='text-coral-red'>Special</span> Offer</h2>
        <p className='text-slate-gray'>Ensuring premium comfort and style, our meticulously crafted footwear is desgined to elevate your experient..</p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconUrl={arrowRight} />
          <Button label="Learn more" backgroundColor="bg-slate-gray" textColor="text-coral-red" />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer