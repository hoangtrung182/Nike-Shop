import React from 'react'

const Button = ({ label, iconUrl, backgroundColor, textColor, fullWidth}) => {
  return (
    <button className={`flex  justify-center items-center gap-2 font-montserrat px-7 py-4 border text-lg leading-none bg-coral-red rounded-full ${fullWidth && 'w-full'} text-white border-coral-red ${backgroundColor ? `${backgroundColor} ${textColor}` : '' }`}>
        { label }
        { iconUrl && <img src={iconUrl} alt='' className='ml-2 rounded-full w-5 h-5' />}
    </button>
  )
}

export default Button