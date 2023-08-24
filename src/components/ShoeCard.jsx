import React from 'react'

const ShoeCard = ({ imageUrl, changeBigShoeImage, bigShoeImg}) => {
    const handleClick = () => {
        if(bigShoeImg !== imageUrl.bigShoe) {
            changeBigShoeImage(imageUrl.bigShoe)
        }
    }
  return (
    <div className={`border-2 rounded-xl ${bigShoeImg === imageUrl ? `border-coral-red` : `border-transperant`} cursor-pointer max-sm:flex-1`}
        onClick={handleClick}
    >
        <div className='flex justify-center items-center bg-card bg-center sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
            <img src={imageUrl.thumbnail} alt="shoe collection" width={127} height={103} className='object-contain' />
        </div>
    </div>
  )
}

export default ShoeCard