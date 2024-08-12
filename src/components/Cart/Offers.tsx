"use client";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { toggleSponsorship } from "@/redux/sponsorshipSlice";
import { addSelected, removeSelected } from '@/redux/flexibleSlice';
import { toggleModal } from "@/redux/modalSlice";
import { ModalParams, dataItem, iSellingPoint } from "@/types";
import { cn } from "@/lib/utils";
import { sellingPointsText, flexibleOfferContent, sellingPointsExplanationText } from "@/app/(_content)/_content"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";
import { Button } from "../ui/button";
import { Check, Info } from "lucide-react";
import { Dialog, DialogTrigger } from "../ui/dialog";

import Modal from "./Modal";
import { sellingPointsExplanation } from "@/app/(_content)/_content";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { motion } from "framer-motion";

import { offerContent } from "@/app/(_content)/_content";


const Offer = ({
  name,
  price,
  services,
  annotation,
  active,
  compulsory,
  explanation
}: iSellingPoint) => {
  const dispatch = useDispatch();

  const handleTogglePacket = () => {
    if (!compulsory) {
      dispatch(toggleSponsorship({ name }));
    }
  };

  const handleModal = ({ name, modalData }: ModalParams) => {
    dispatch(toggleModal({ name, modalData }))
    // document.body.style.paddingRight = `${window.innerWidth - document.documentElement.clientWidth}px`
  };
  const selectedCheckboxes = useSelector((state: RootState) => state.selectedCheckboxes.selectedCheckboxes);

  const isFlexibleCondition = (index: string) => selectedCheckboxes.length === 4 && !selectedCheckboxes.includes(index);

  const handleCheckboxChange = (name: string) => {
    if (selectedCheckboxes.includes(name)) {
      dispatch(removeSelected(name));
    } else {
      dispatch(addSelected(name));
    }
    console.log(selectedCheckboxes);
  };


  return (
    name != "Flexible" ?
      <Card
        onClick={handleTogglePacket}
        className={cn(
          "flex flex-col relative max-w-2xl basis-[300px] border-2 border-neutral-700 transition-all bg-[#222227] cursor-pointer hover:bg-[#26262d] ",
          active && "border-red-700 dark:border-red-700"
        )}
      >
        <CardHeader className="min-h-[180px]">
          <CardTitle className="text-3xl font-light mb-3">{name}</CardTitle>
          <div className="text-[#bb002e] text-4xl font-bold "> {price}$</div>
          <CardDescription className="mt-3">
            {annotation}
          </CardDescription>

          <div className="absolute top-2 right-2 flex gap-2 items-center">


            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size={"icon"}
                  variant={"ghost"}
                  className="p-1 "
                  onClick={() => {
                    handleModal({ name, modalData: explanation as dataItem[] });
                  }}
                >
                  <Info strokeWidth={1.5} className="hover:bg-gray-600 rounded-full transition" />
                </Button>
              </DialogTrigger>
              <Modal />
            </Dialog>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col gap-3 flex-1">
          {services.map((s, index) => (
            s != "Elite.service5" ?
              <div key={index} className="flex gap-2">
                <Check className="flex-shrink-0 " strokeWidth={3} width={19} />
                <p key={index} className="text-md font-medium ">
                  {s}
                </p>
              </div> : null
          ))}
        </CardContent>

      </Card>
      :
      <Card

        className={cn(
          "flex flex-col border-2 border-neutral-700 relative max-w-2xl basis-[300px] transition-all bg-[#222227]",
          active && "border-red-700 dark:border-red-700"
        )}
      >
        <CardHeader className="min-h-[180px]">
          <CardTitle className="text-3xl font-light mb-3">{name}</CardTitle>
          <div className="text-[#bb002e] text-4xl font-bold "> {price}$</div>
          <CardDescription className="mt-3">
            {annotation}
          </CardDescription>

          <div className="absolute top-2 right-2 flex gap-2 items-center">


            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size={"icon"}
                  variant={"ghost"}
                  className="p-1 "
                  onClick={() => {
                    handleModal({ name, modalData: explanation as dataItem[] });
                  }}
                >
                  <Info strokeWidth={1.5} className="hover:bg-gray-600 rounded-full transition" />
                </Button>
              </DialogTrigger>
              <Modal />
            </Dialog>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col gap-2 flex-1">
          {services.map((s, index) => (!(s === "Flexible.service8" || s === "Flexible.service9") &&
            <Label key={index} htmlFor={`${index}`} className={cn("font-light text-lg cursor-pointer hover:text-gray-400 transition py-1", {
              "text-gray-500 pointer-events-none select-none ": isFlexibleCondition(s)
            })}>
              <Checkbox id={`${index}`}
                className={cn("mr-2 border border-neutral-50", {
                  "pointer-events-none": isFlexibleCondition(s)
                })}
                onClick={() => handleCheckboxChange(s)}

              />

              {s}
            </Label>

          ))}
        </CardContent>
        <CardFooter>
          <Button onClick={handleTogglePacket} className="w-full">{flexibleOfferContent().buttonHeading}</Button>
        </CardFooter>
      </Card>
  );

};

export default function Offers() {
  const sellingPoints = useSelector((state: RootState) => state.sponsorship);

  return (
    <motion.section initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="min-h-screen flex flex-col items-center justify-center px-6 mx-auto  gap-8 my-10"
      id="offers"
    >
      <h2 className={`text-3xl  md:text-5xl text-center`}>
        {offerContent().heading}
      </h2>
      <div className="flex flex-wrap justify-center gap-10">
        {sellingPoints.map((sp, i) => {
          const annotation = sellingPointsText()[i].annotation;
          const services = sellingPointsText()[i].services;
          const explanation = sellingPointsExplanationText()[i];
          return <Offer key={sp.name} {...sp} annotation={annotation} services={services} explanation={explanation}></Offer>;
        })}
      </div>
      <p className={` text-lg md:text-2xl`}>
        {offerContent().desc}
      </p>
    </motion.section>
  );
}
