import React from 'react'
import { star } from '../assets/icons'


const PopularProductCard = ({ imgURL, name, price}) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
        <img src={imgURL} alt="popular product" width={280} height={280} className='object-contain'/>
        <div className="flex justify-start mt-8 gap-2.5">
          <img src={star} alt="" width={24} height={24} />
          <p className='font-montserrat text-slate-gray text-xl leading-normal'>(4.5)</p>
        </div>
        <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>{ name }</h3>
        <p className='font-montserrat text-2lx mt-2 font-semibold text-coral-red leading-normal'>{ price }</p>
    </div>
  )
}

export default PopularProductCard