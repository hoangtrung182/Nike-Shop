import React from 'react'
import { services } from '../constants'
import ServiceCard from '../components/ServiceCard'

const Service = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
        { services.map(ser => {
          return (
           <ServiceCard key={ser.label} {...ser} />
          )
        })}
    </section>
  )
}

export default Service