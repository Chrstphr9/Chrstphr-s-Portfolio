import React from 'react'
import { assets } from '../../../assets/assets'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <div>
            <h1 className='font-bold text-3xl cursor-pointer'>Chrstphr.</h1>
            </div>
            <div className='w-max flex items-center gap-2 mx-auto'>
            <Image src={assets.mail_icon} alt='logo' className='w-6' />
            <p>somto565@gmail.com</p>
            </div>
        </div>

        <div className='text-center sm:flex items-center justify-between border-t
        border-gray-400 mx-[10%] mt-12 py-6'>
            <p>
                &copy; {new Date().getFullYear()} Somto Anigbo. All rights reserved.
            </p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a target='_blank' href='https://github.com/Chrstphr9'>Github</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer