import React from 'react'
import { products } from '../constants'
import PopularProductCard from '../components/PopularProductCard'


const PopularProducts = () => {
  return (
    <section className="max-container max-sm:mt-12" id="products">
      <div className='flex flex-col justify-start gap-5'>
          <h2 className='text-4xl font-palanquin font-bold'>Our <span className='text-coral-red'>Popular</span> Products</h2>
          <p className='text-slate-gray mb-3'>Experient top-notch quality and style with our sough-after selections. Discover a world of the comfort, design and value.</p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        { products.map(product => {
          return (
            <PopularProductCard key={product.name} {...product}/>
          )
        })}
      </div>
    </section>
  )
}

export default PopularProducts