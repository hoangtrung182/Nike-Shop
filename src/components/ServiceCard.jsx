import React from 'react'

const ServiceCard = ({ imgURL, label, subtext}) => {
  return (
    <div className="flex-1 w-full rounded-[20px] shadow-3xl px-10 py-16 sm:w-[350px] sm:m-w-[350px]">
        <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
          <img src={imgURL} alt="ICon" width={24} height={24} />
        </div>
        <h2 className='mt-5 text-3xl font-palanquin leading-normal font-bold'>{ label}</h2>
        <p className='mt-3 break-words text-lg font-montserrat text-slate-gray'>{ subtext }</p>
    </div>
  )
}

export default ServiceCard