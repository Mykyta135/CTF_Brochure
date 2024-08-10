"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { MenuIcon } from "lucide-react";


import useSmoothScrollTo from "@/hooks/useSmoothScrollTo";
import Drawer from "./Drawer";
import { Button } from "./ui/button";
import { headerNavigation } from "../app/(_content)/_content";

import Logo from "@/public/logo.svg";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScrollClick = useSmoothScrollTo();

  return (
    <motion.header
      initial={{ opacity: 0, y: -80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full min-h-[70px] z-50"
    >
      <div className="container flex sm:px-20 px-12 justify-between items-center bg-[#0f0f11bc] header-clip-path">
        <div
          onClick={() => {
            handleScrollClick("#top");
          }}
          className="cursor-pointer z-50 text-2xl sm:w-20 w-16"
        >
          <Image src={Logo} alt="logo"></Image>
        </div>

        <div className="hidden xl:flex gap-4 items-center">
          {headerNavigation().map((nav_item) => (
            <Button
              variant={"ghost"}
              onClick={() => {
                handleScrollClick(nav_item.href);
              }}
              key={nav_item.name}
            >
              {nav_item.name}
            </Button>
          ))}
        </div>
        <button className="xl:hidden" onClick={() => setMobileMenuOpen(true)}>
          <MenuIcon strokeWidth={1.5} size={40} />
        </button>

      </div>
      <Drawer
        setMobileMenuOpen={setMobileMenuOpen}
        navigation={headerNavigation()}
        mobileMenuOpen={mobileMenuOpen}
      />
    </motion.header>
  );
}
