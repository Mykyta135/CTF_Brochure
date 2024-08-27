"use client";
import Providers from "@/redux/Providers";;
import Offers from "@/components/Cart/Offers";
import Additional from "@/components/Cart/Additional";
import Cart from "@/components/Cart/Cart";
import { motion } from "framer-motion";

const Section = () => {

  return (
    <section className="flex flex-col ">
      <Offers />
      <motion.div initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }} className="flex items-start lg:flex-row flex-col gap-6 container">
        <Additional />
        <Cart />
      </motion.div>


    </section>
  );
};

export default function PartnershipSection() {
  return (<Providers  >
    <Section />
  </Providers >
  );

}


