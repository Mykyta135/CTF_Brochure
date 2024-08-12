"use client"

import React from "react";

import { introSection } from "../../app/(_content)/_content";
import useSmoothScrollTo from "@/hooks/useSmoothScrollTo";
import heroBg from "@/public/heroBg.jpg"
import arrow from "@/public/arrow-intro.svg"
import Image from "next/image";
import { motion } from "framer-motion";
import rect from "@/public/rect.svg"
import { useTranslations } from "next-intl";
export default function IntroSection() {
    const handleScrollClick = useSmoothScrollTo();
    const t = useTranslations("intro");
    return (
        <section id="top" className="relative flex w-screen h-screen bg-gradient-to-t from-[#101012] to-[#101012b4]">
            <div className="absolute top-0 left-0 w-full h-full -z-50  pt-20">
                <Image alt={"introBg"} src={heroBg} className="absolute top-0 left-0 w-full h-full aspect-video object-cover" />
            </div>
            <motion.div initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }} className="container flex flex-col items-center justify-center text-center ">

                <motion.h3 className="uppercase text-xl md:text-2xl font-semibold tracking-wider mb-2">
                    {t('date')}
                </motion.h3>
                <h2 className="text-5xl md:text-7xl lg:text-8xl      mb-4">

                    {introSection().title}
                </h2>
                <p className="text-base md:text-xl mt-4 md:mt-8 mb-6 px-4 md:px-0">
                    {t('subtitle')}
                </p>
                <a onClick={() => { handleScrollClick("#offers"); }} className="text-black relative cursor-pointer mt-16 md:mt-16 hover:translate-y-1 transition">
                    <Image src={rect} alt="button"></Image>
                    <span className="w-full absolute h-full top-4  left-1/2 -translate-x-1/2 font-semibold text-lg">{t("button")} </span>
                    <Image src={arrow} alt="arrow" className="absolute top-1/2 -translate-y-1/2 right-9"></Image>
                </a>

            </motion.div>


        </section>

    );
}
