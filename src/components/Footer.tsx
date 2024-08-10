import React from 'react'
import Image from 'next/image'
import { footerSection } from '../app/(_content)/_content'
const Footer = () => {
  return (
    <footer className='container flex sm:px-20 px-12  justify-between  items-center gap-10  p-2 min-h-[100px] bg-[#0F0F11]  mt-20 footer-clip-path' >
      <div className="flex items-center flex-wrap gap-3">
        {footerSection().socialMedia.map((item, index) => (
          <a key={index} href={item.link} target='_blank'>  <Image className="bg-white rounded-full hover:bg-white/50 transition cursor-pointer" src={item.img} width={40} height={33} alt={item.link} /></a>
        ))}
      </div>

      <div className="text-3xl p-4">{footerSection().year}</div>
    </footer>


  )
}

export default Footer