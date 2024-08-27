
import IntroSection from "@/components/Intro/Intro"
import DescriptionSection from "@/components/Description/Description"
import Contacts from "@/components/Contacts/Contacts"
import Customers from "@/components/Customers/Customers"
import Statistics from "@/components/Statistics/Statistics"

import Organizators from "@/components/Organizators/Organizators"
import Partners from "@/components/Partners/Partners"
import ForPartners from "@/components/ForPartners/ForPartners"
import Why from "@/components/Why/Why"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PartnershipSection from "@/components/Cart/PartnershipSection"
import { Provider } from "react-redux"
import Providers from "@/redux/Providers"

export default function Home({
  children,
}: {
  children: React.ReactNode
}
) {
  return (
    <div className="overflow-x-hidden text-neutral-50 ">
      <Header />
      <IntroSection />
      <main className="flex min-h-screen flex-col space-y-20 items-center justify-between overflow-x-hidden bg-gradient-to-b from-[#101010] to-[#141414]">
        <DescriptionSection />
        <ForPartners />
        <Why />
        <Statistics />
        <Customers />
        <Providers>
          <h2 className="text-5xl ">Пропозиція</h2>
          {children}
        </Providers>
        <Partners />
        <Organizators />
        <Contacts />
      </main>
      <Footer />
    </div>

  );

}
