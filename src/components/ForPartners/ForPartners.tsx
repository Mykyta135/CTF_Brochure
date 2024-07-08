"use client"
import React from 'react'
import Image from 'next/image'
import { forPartnersSection } from "@/components/_content/_content"

import jeopardyWeb from "../../public/web.svg"
import jeopardyCrypto from "../../public/crypto.svg"
import jeopardyMisc from "../../public/misc.svg"
import jeopardyForensic from "../../public/forensic.svg"
import jeopardyReverse from "../../public/reverse.svg"
import jeopardyPwn from "../../public/pwn.svg"
import { motion } from 'framer-motion'

const ForPartners = () => {
  return (
    <section className='container flex flex-col items-center pb-40'>
     <motion.span initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }} >
        <h2 className='text-3xl  md:text-5xl  mb-6 text-center'>{forPartnersSection.title} </h2>
        <p className='max-w-4xl mb-60 text-center'>{forPartnersSection.description}</p>
     </motion.span>
      <motion.div initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }} className="relative w-[200px] lg:w-[400px]">
      
        <Image src={forPartnersSection.img} alt={"jeopardy"}></Image>

        <Image className='absolute -top-[25px] lg:-right-[80px] -right-[45px] lg:w-[77px] w-12' src={jeopardyWeb} alt={"jeopardyWeb"} width={77}></Image>
        <Image className='absolute lg:-top-[150px] -top-[90px] right-1/2 translate-x-1/2 lg:w-[180px] w-28' src={jeopardyForensic} alt={"jeopardyForensic"} width={180}></Image>

        <Image className='absolute -top-[30px] lg:-left-[150px] -left-[75px] lg:w-[180px] w-28' src={jeopardyReverse} alt={"jeopardyReverse"} width={180}></Image>
        <Image className='absolute -bottom-[30px] lg:-left-[110px] -left-[40px] lg:w-[87px] w-12' src={jeopardyPwn} alt={"jeopardyPwn"} width={87}></Image>
        <Image className='absolute -bottom-[30px] lg:-right-[120px] -right-[50px] lg:w-[140px] w-20' src={jeopardyCrypto} alt={"jeopardyCrypto"} width={140}></Image>


        <Image className='absolute lg:-bottom-[160px] -bottom-[85px] right-1/2 translate-x-1/2 lg:w-[90px] w-12' src={jeopardyMisc} alt={"jeopardyMisc"} width={90}></Image>
    
      
      

      </motion.div>

    </section>
  )
}

export default ForPartners