"use client"
import Image from "next/image"

import { organizatorsSection } from "../../app/(_content)/_content"
import bestMap from "@/public/best-map.svg"
import bestLogo from "@/public/best.svg"

import { motion } from "framer-motion"

const Organizators = () => {
    return (
        <section className='container'>
            <motion.h2 initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }} className='uppercase text-3xl md:text-5xl my-16 text-center'>{organizatorsSection().heading}</motion.h2>
            <motion.div initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }} className="flex justify-center flex-wrap gap-10">
                <div className="basis-[600px]">
                    <h3 className='uppercase text-xl md:text-2xl font-semibold '>{organizatorsSection().title}</h3>
                    <p className="mb-7">{organizatorsSection().description}</p>

                </div>
                <div className="basis-96 hidden xl:block">
                    <Image className="p-2 rounded-md" src={bestLogo} width={384} height={100} alt="a"></Image>
                </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }} className="flex flex-wrap justify-evenly gap-12 py-10 xl:px-0 px-4 bg-[#222227] mt-20 rounded-lg">
                <div className="relative flex flex-wrap xl:flex-col xl:basis-64 xl:justify-center justify-evenly gap-4 border py-6 rounded-2xl xl:border-l-red-300/0 xl:ml-32">
                    {organizatorsSection().statistics.map((item, index) => (
                        <div key={index} className="relative lg:-ml-12 p-4 basis-52">
                            <div className="block text-2xl mb-2">{item.value} {item.title}</div>
                            <div className="text-md">{item.desc}</div>
                        </div>
                    ))}
                </div>
                <Image src={bestMap} width={300} alt="best map" className="basis-[800px] hidden md:block"></Image>
            </motion.div>
        </section>
    )
}

export default Organizators