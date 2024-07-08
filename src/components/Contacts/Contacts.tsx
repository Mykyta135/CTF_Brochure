"use client"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';
import { contactsSection } from "../_content/_content";
import Image from "next/image";
import { motion } from "framer-motion";

import vika from "@/public/vika.png"
import anya from "@/public/anya.png"
import viktor from "@/public/viktor.png"
import { cn } from "@/lib/utils";
const team = [viktor, vika, anya]

const Contacts = () => {
    return (
        <section  className='container' id="contacts">
            <motion.span initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }} >
                <h2 className=" text-5xl md:text-7xl text-center mb-10">{contactsSection.title}</h2>
                <div  className="flex flex-wrap justify-center lg:grid grid-cols-2 grid-rows-[370px_370px] gap-4">
                    {contactsSection.team.map((item, index) => (
                        <Card key={index} className={cn("max-w-sm flex flex-col justify-center bg-[#222227]", index === 0 && "row-start-1 row-end-3 justify-self-end align-middle")} >
                            <CardHeader className={cn("h-2/3")}>
    
                                <Image className={cn("w-full h-full aspect-[497/348] object-cover object-top", index === 0 && "")} src={team[index]} alt={item.name_surname} />
    
                            </CardHeader>
                            <CardContent className="text-center">
                                <CardTitle>{item.name_surname}</CardTitle>
                                <CardDescription>{item.description}</CardDescription>
    
                            </CardContent>
                            <CardFooter className="flex-col">
                                <CardDescription><a className="hover:underline inline-flex gap-2 items-center" href={"tel:+38"+item.phone}><Phone size={12} />{item.phone}</a></CardDescription>
                                <CardDescription><a className="hover:underline inline-flex gap-2 items-center" href={"mailto:"+item.mail}> <Mail size={12} />{item.mail}</a> </CardDescription>
                            </CardFooter>
                        </Card>
                    ))}
    
    
    
    
                </div>
            </motion.span>
        </section>
    )
}

export default Contacts