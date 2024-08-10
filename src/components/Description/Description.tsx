"use client"
import { motion } from "framer-motion";
import { descriptionSectionText } from "../../app/(_content)/_content";
import Image from "next/image";


export default function descriptionSection() {
    return (
        <motion.section initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }} className="container" id="about">
            <div className="grid gap-y-12 md:gap-y-16 md:grid-cols-2">
                <div className="flex flex-col justify-center">
                    <div className="md:mr-16">
                        <h1 className="uppercase font-black mb-8 text-2xl md:text-3xl">
                            {descriptionSectionText().title}
                        </h1>
                        <p className="font-normal text-base md:text-base">
                            {descriptionSectionText().titleDescription1}<br /><br />
                            {descriptionSectionText().titleDescription2}
                        </p>
                    </div>
                </div>
                <div className="hidden md:block">
                    <Image width={700} height={300} alt="imgimg1" src={descriptionSectionText().img1.src}></Image>
                </div>


            </div>
        </motion.section>
    );
}


