"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { partnersSection } from "../_content/_content"
const Partners = () => {
  return (
    <motion.section initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }  }  className='container'>
        <h2 className='uppercase text-3xl md:text-5xl my-16 text-center'>{partnersSection.heading}</h2>
        <ul className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-20 flex-wrap justify-items-center items-center p-5 rounded-md'>
            {partnersSection.logos.map((partner, index) => (
                <li className='content-center' key={index}>
                    <Image className='min-w-max' src={partner.image} alt={partner.image} width={partner.width} height={partner.height}></Image>
                </li>))}
           
        </ul>
    </motion.section>
  )
}

export default Partners