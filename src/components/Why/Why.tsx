"use client"
import React from 'react'
import { whySection } from "@/app/(_content)/_content"
import { motion } from 'framer-motion'
import Image from 'next/image'
import img1 from "@/public/why1.svg"
import img2 from "@/public/why2.svg"
import img3 from "@/public/why3.svg"
import img4 from "@/public/why4.svg"
import img5 from "@/public/why5.svg"
import img6 from "@/public/why6.svg"

const imgArr = [img1, img2, img3, img4, img5, img6]
function Why() {
    return (
        <motion.section initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }} className='container'>
            <motion.h2 className='text-center text-3xl  md:text-5xl  mb-16'>
                {whySection().title}
            </motion.h2>
            <motion.div className="flex gap-10 flex-wrap justify-center ">
                {whySection().items.map((item, index) => ((
                    item.title != "whySection.title6" &&
                    <div key={index} className="transition basis-[455px] bg-[#222227] p-5 rounded-2xl border border-[#2f0d0d]  " >
                        <Image src={imgArr[index]} alt='a' className='mb-7'></Image>
                        <div className="">
                            <h3 className='text-2xl'>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    </div>

                )))}
            </motion.div>
        </motion.section>
    )
}

export default Why