import React from 'react'
import { footerLogo } from '../assets/images'
import { footerLinks, socialMedia } from '../constants'
import { copyrightSign } from '../assets/icons'

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col ">
        {/* Logo and info contacts */}
        <div className="flex flex-col items-start">
          <a href="">
            <img src={footerLogo} alt="" width={150} height={46}/>
          </a>
          <p className='font-montserrat text-white-400 mt-4 text-base leading-7 sm:max-w-sm'>Get shoes ready for the new term at your nearest Nike store. Find the perfect size in the store to purchase a pairs of it. Get reward</p>
          <div className="flex gap-5 mt-4">
            { socialMedia.map(icon => {
              return (
                <div className="flex justify-center items-center bg-white w-12 h-12 rounded-full cursor-pointer hover:bg-slate-gray">
                  <img src={icon.src} alt={icon.alt} width={24} height={24} />
                </div>
              )
            })}
          </div>
        </div>
        {/* Sections */}
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          { footerLinks.map(section => {
            return (
              <div key={section} className='text-white-400'>
                <h3 className='font-palanquin text-2xl font-medium leading-normal mb-6'>{section.title}</h3>
                <ul>
                  { section.links.map(link => {
                    return (
                      <li key={link.name} className='mt-3 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer'>
                        <a href={link.link}>{link.name}</a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
      <div className="flex justify-between mt-24 text-white-400 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat">
          <img src={copyrightSign} alt="" width={20} height={20} className='rounded-full m-0' />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className='font-montserrat cursor-po'>Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer