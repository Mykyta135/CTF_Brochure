"use client"
import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronDown } from "lucide-react";
import { introSection } from "../_content/_content";
import useSmoothScrollTo from "@/hooks/useSmoothScrollTo";
import heroBg from "@/public/heroBg.jpg"
import Image from "next/image";
import { motion } from "framer-motion";
import rect from "@/public/rect.svg"

export default function IntroSection() {
    const handleScrollClick = useSmoothScrollTo();
    return (
        <section id="top" className="relative flex w-screen h-screen bg-gradient-to-t from-[#101012] to-[#0c0c0ca9]">
            <div className="absolute top-0 left-0 w-full h-full -z-50  pt-20">
                <Image alt={"introBg"} src={heroBg} className="absolute top-0 left-0 w-full h-full aspect-video object-cover" />
            </div>
            <motion.div initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }} className="container flex flex-col items-center justify-center text-center ">

                <motion.h3 className="uppercase text-xl md:text-2xl font-semibold tracking-wider mb-2">
                    {introSection.term}
                </motion.h3>
                <h2 className="text-5xl md:text-7xl lg:text-8xl      mb-4">

                    {introSection.title}
                </h2>
                <p className="text-base md:text-xl mt-4 md:mt-8 mb-6 px-4 md:px-0">
                    {introSection.description}
                </p>
                <a onClick={() => { handleScrollClick("#offers"); }} className="text-black cursor-pointer mt-16 md:mt-16 hover:translate-y-1 transition">
                    <Image src={rect} alt="button"></Image>
                </a>

            </motion.div>


        </section>

    );
}
