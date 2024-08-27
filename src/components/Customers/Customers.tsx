"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { customersSection } from "@/app/(_content)/_content"
function Customers() {
    return (
        <motion.section initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }} className='container'>
            <h2 className=' text-3xl  md:text-5xl mb-16 text-center'>{customersSection().title} </h2>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
                {customersSection().personType.map(item => (
                    <div key={item.title} className="basis-[400px] pt-4 px-4 pb-20 bg-[#222227] flex flex-col rounded-lg">
                        <h3 className="font-bold text-xl flex-grow">{item.title}</h3>

{/*                         <p className=''>{item.desc}</p> */}

                    </div>

                ))}
            </div>
            <div className="flex flex-wrap gap-4">
                {customersSection().specialisation.map((item, index) => (
                    <div key={index} className="transition border border-gray-800 px-4 py-3 rounded-full">
                        {item}
                    </div>
                ))}
            </div>

        </motion.section >
    )
}

export default Customers
