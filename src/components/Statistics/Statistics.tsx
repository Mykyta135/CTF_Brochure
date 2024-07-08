"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import bec from "@/public/bec.svg"
import hack2 from "@/public/hack2.jpg"
import { statisticsSection } from "../_content/_content"
const Statistics = () => {
    return (
        <section className='container' id="statistics">
           <motion.span initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}>
                <h2 className=' text-3xl  md:text-5xl  mb-16 text-center'>{statisticsSection.title}</h2>
                <div  className="flex items-center flex-wrap md:justify-between justify-center gap-10 text-xl mb-36">
                    {statisticsSection.items.map((item, index) => (
                        <div key={index} className="flex items-center gap-2 rounded ">
                            <Image className="bg-white rounded-full " src={item.img} width={70} height={70} alt={item.title} />
                            <span>{item.value + "+"}</span>
                        </div>))}
                </div>
           </motion.span>

            <motion.div initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }} className="flex flex-wrap xl:justify-between justify-center gap-5 mb-20">
                <div className="basis-80">
                    <h3 className=" text-2xl md:text-3xl mb-1 ">{statisticsSection.additionalInfo[0].title}</h3>
                    <p>{statisticsSection.additionalInfo[0].desc}</p>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                <Image src={statisticsSection.ourProjects[0]} alt="item" width={200} className="mr-8 sm:mb-0 mb-6"></Image>
                <Image src={statisticsSection.ourProjects[1]} alt="item" width={140}></Image>
                <Image src={statisticsSection.ourProjects[2]} alt="item" width={210}></Image>
                <Image src={statisticsSection.ourProjects[3]} alt="item" width={300} className="md:-ml-8"></Image>
                <Image src={statisticsSection.ourProjects[4]} alt="item" width={350} className="md:-ml-16 "></Image>
                
                </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }} className="flex flex-wrap xl:justify-between justify-center xl:gap-5 gap-20">
                <div className="basis-80">
                    <h3 className=" text-2xl md:text-3xl mb-1 ">{statisticsSection.additionalInfo[1].title}</h3>
                    <p>{statisticsSection.additionalInfo[1].desc}</p>
                </div>
                <div className="flex gap-5 ">
                    <Image src={hack2} alt="bec" ></Image>

                </div>
            </motion.div>
        </section>
    )
}

export default Statistics