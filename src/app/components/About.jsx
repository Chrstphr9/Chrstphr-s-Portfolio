import Image from 'next/image'
import React from 'react'
import { assets, infoList, toolsData } from '../../../assets/assets'
import * as motion from "motion/react-client"

const About = () => {
    return (
        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
            <motion.h4 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='text-center mb-2 text-lg'>Introduction</motion.h4>
            <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className='text-center text-5xl'>About Me</motion.h2>

            <div className='flex w-full flex-col lg:flex-row items-center
        gap-20 my-20'>
                <div className='w-64 sm:-w-80 rounded-3xl max-w-none'>
                    <Image src={assets.profile_img} alt='user'
                        className='w-full rounded-3xl' />
                </div>
                <div className='flex-1'>
                    <p className='mb-10 max-w-2xl'>
                    <p>I am an experienced Frontend Developer with yearrs for professional expertise in the field. Throughout my career, I have had the privilege of collaborating with individuals.</p>
                    <p>My passion for frontend development is not only reflects in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
                    </p>

                    <ul className='grid grid-col-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                        {infoList.map(({icon, iconDark, title, description}, index)=> (
                            <li className='border-[0.5px] border-gray-400 rounded-xl p-6
                            cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 
                            duration-500 hover:shadow-[4px_4px_0_#000]' 
                            key={index}>
                                <Image className='w-7 mt-3' 
                                src={icon} alt={title} />
                                <h3 className='my-4 font-semiboldtext-gray-700'
                                >{title}</h3>
                                <p className='text-gray-600 text-sm'
                                >{description}</p>
                            </li>
                        ))}
                    </ul>
                    <h4 className='my-6 text-gray-700 font-Ovo'>
                        Tools I Use
                    </h4>
                    <ul className='flex items-center gap-3 sm:gap-5'>
                        {toolsData.map((tool, index)=>(
                            <li key={index}>
                                <Image className='w-5 sm:w-7' 
                                src={tool} alt='Tool' />
                                <h3>{tool.title}</h3>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    )
}

export default About