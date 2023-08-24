import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = ({ customerName, imgURL, rating, feedback}) => {
  return (
    <section className="flex justify-center flex-col items-center">
        <img src={imgURL} alt="customer" className='object-contain rounded-full w-[120px] h-[120px]' />
        <p className='mt-6 max-w-sm text-center info-text'>{ feedback }</p>
        <div className="flex my-3 justify-center items-center gap-2">
            <img src={star} alt="" width={24} height={24} className='object-contain m-0' />
            <p className='text-xl font-montserrat text-slate-gray'>({ rating })</p>
        </div>
        <h3 className='text-3xl font-palanquin font-bold mt-1 text-center'>{ customerName }</h3>
    </section>
  )
}

export default ReviewCard