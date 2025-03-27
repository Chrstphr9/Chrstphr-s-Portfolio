import Image from 'next/image'
import React from 'react'
import { assets, infoList, toolsData } from '../../../assets/assets'


const About = () => {
    return (
        <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg'>Introduction</h4>
            <h2 className='text-center text-5xl'>About Me</h2>

            <div className='flex w-full flex-col lg:flex-row items-center
        gap-20 my-20'>
                <div className='w-64 sm:-w-80 rounded-3xl max-w-none'>
                    <Image src={assets.profile_img} alt='user'
                        className='w-full rounded-3xl' />
                </div>
                <div className='flex-1'>
                    <p className='mb-10 max-w-2xl'>
                        I am Uchenna Emmanuel, a seasoned AI Engineer, Technology Leader, and Cloud Architect
                        with over 20 years of experience in software development, AI transformation, and enterprise
                        technology solutions. As a CTO and Chief AI Officer, I specialize in leveraging cutting-edge
                        Artificial Intelligence, Cloud Computing, and Software Engineering to drive business
                        innovation.<br></br>
                        My expertise spans across AI Engineering & Consulting, Web & API Engineering, Mobile
                        Engineering, and Cloud Architecture, with a strong focus on helping organizations scale their
                        digital transformation efforts. I have led and delivered amazing technology products and
                        complex AI-powered solutions, including Advanced AI RAG applications, AI Ethics, and
                        enterprise-wide AI adoption strategies.
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
                    <h4>
                        Tools I Use
                    </h4>
                    <ul>
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
        </div>
    )
}

export default About