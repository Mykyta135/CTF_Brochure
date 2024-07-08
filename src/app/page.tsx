import PartnershipSection from "../components/Cart/PartnershipSection";
import IntroSection from "@/components/Intro/Intro"
import DescriptionSection from "@/components/Description/Description"
import Contacts from "@/components/Contacts/Contacts"
import Customers from "@/components/Customers/Customers"
import Statistics from "@/components/Statistics/Statistics"
import Organizators from "@/components/Organizators/Organizators"
import Partners from "@/components/Partners/Partners"
import ForPartners from "@/components/ForPartners/ForPartners"
import Why from "@/components/Why/Why"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col space-y-20 items-center justify-between overflow-x-hidden">
      <IntroSection />
      <DescriptionSection />
      <ForPartners />
      <Why />
      <Statistics />
      <Customers />
      <PartnershipSection />  
      <Partners />
      <Organizators />
      <Contacts />
    </main>
  );

}
