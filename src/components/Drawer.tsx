
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

import useSmoothScrollTo from "@/hooks/useSmoothScrollTo";
import { Button } from "./ui/button";
import { XIcon } from "lucide-react";

import Logo from "@/public/logo.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";
interface drawerProps {
  setMobileMenuOpen: (open: boolean) => void;
  mobileMenuOpen: boolean;
  navigation: MenuItem[];

}

type MenuItem = {
  name: string;
  href: string;
};

export default function Drawer({
  setMobileMenuOpen,
  navigation,
  mobileMenuOpen,
}: drawerProps) {
  const handleScrollClick = useSmoothScrollTo();

  useEffect(() => {
    console.log(mobileMenuOpen);
    // Toggle body overflow when the drawer opens or closes
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup the effect
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);
  const t = useTranslations("intro");
  return (


    <AnimatePresence>
      {mobileMenuOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3}}
            className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}

            className="fixed inset-y-0 ease-in-out right-0 z-50 w-full overflow-y-auto bg-[#4b1515] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-200/10"
          >
            <div className="flex justify-between w-full mb-7">
              <div
                onClick={() => {
                handleScrollClick("#top");setMobileMenuOpen(false) ;
                }}
                className="cursor-pointer z-50 text-2xl sm:w-20 w-16"
              >
                <Image src={Logo} alt="logo"></Image>
              </div>

              <Button
                size={"icon"}
                variant="ghost"
                onClick={() => setMobileMenuOpen(false)}
              >
                <XIcon strokeWidth={1.5} size={32} />
              </Button>
            </div>

            <div className="flex flex-col gap-2 mt-2">
              {navigation.map((item) => (
                <Button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleScrollClick(item.href);
                  }}
                  key={item.name}
                  variant={"outline"}
                >
                  {item.name}
                </Button>
              ))}

              <Button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleScrollClick("#offers");
                }}
                className="flex-1"
              >
                {t("button")}
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>


  );
}
