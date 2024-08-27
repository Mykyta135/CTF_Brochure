"use client";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { iSellingPoint, iOptional } from "@/types";
import emailjs from "@emailjs/browser";

import { useState } from "react";

import { generateMessage } from "@/hooks/generateEmail";
import { cn } from "@/lib/utils";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { toggleOptionActive } from "@/redux/optionalSlice";
import { toggleSponsorship } from "@/redux/sponsorshipSlice";

import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { cartSection } from "@/app/(_content)/_content";
import { useTranslations } from "next-intl";


const formSchema = z.object({
  company_name: z
    .string()
    .min(3, "Minimum 3 characters"),
  company_email: z.string().email("Invalid email address"),
});

type FormValues = z.infer<typeof formSchema>;

const SP = ({ name, price, compulsory }: iSellingPoint) => {
  const dispatch = useDispatch();

  const handleTogglePacket = () => {
    if (!compulsory) {
      dispatch(toggleSponsorship({ name }));
    }
  };


  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ y: -5, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}

          className="border-b-2 w-full py-2 flex justify-between items-center">
          <span className="uppercase text-xl">{name}</span>
          <div className="flex gap-2 items-center">
            <span>{price}$</span>
            <Button
              disabled={compulsory}
              onClick={handleTogglePacket}
              size={"icon"}
              className={cn("w-5 h-5", compulsory && "cursor-not-allowed")}
            >
              <X size={18} />
            </Button>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

const OPT = ({ index, name, price }: iOptional) => {
  const dispatch = useDispatch();

  const handleToggleOption = () => {
    dispatch(toggleOptionActive(index as string));
  };

  return (

    <motion.li
      initial={{ y: -5, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}

      key={index}
      className="border-b-2 w-full py-2 flex justify-between items-center">
      <span className="text-md p-3 pl-0">{name}</span>
      <div className="flex gap-2 items-center">
        <span>{price}$</span>
        <Button onClick={handleToggleOption} size={"icon"} className="w-5 h-5">
          <X size={18} />
        </Button>
      </div>
    </motion.li>

  );
};

export default function   Cart() {
  const cartSectionTest = cartSection();
  const flexiblePoints = useSelector((state: RootState) => state.selectedCheckboxes);

  const activeSellingPoints = useSelector(
    (state: RootState) => state.sponsorship
  ).filter((item) => item.active);

  const activeOptionalPoints = useSelector(
    (state: RootState) => state.optionalPackets
  ).filter((item) => item.active);

  const selligPointsPriceSum = activeSellingPoints.reduce(
    (acc, item) => acc + item.price,
    0
  );

  const activeOptionsPriceSum = activeOptionalPoints.reduce(
    (acc, item) => acc + item.price,
    0
  );

  let isDiscount: number = 0;
  let sale: boolean = false;

  const isDiscount3Options = activeOptionalPoints.length >= 3;
  const isDiscount2Offer = activeSellingPoints.length === 2;
  const isDiscount3Offer = activeSellingPoints.length >= 3;
  const smallSale = isDiscount2Offer || isDiscount3Options;

  if (smallSale) {
    sale = true;
    isDiscount = 50;
  }
  if (isDiscount3Offer) {
    sale = true;
    isDiscount = 150;
  }

  const totalSum = (selligPointsPriceSum + activeOptionsPriceSum) - isDiscount;
  const handleForm = (result: any, transalte: any, activeOptionsTranslated: any) => {
    const serviceId: string = process?.env?.NEXT_PUBLIC_SERVICE_ID || "";
    const templateId: string = process?.env?.NEXT_PUBLIC_TEMPLATE_ID || "";
    const publicKey: string = process?.env?.NEXT_PUBLIC_PUBLIC_KEY || "";



    const stringEmail = generateMessage(
      result.company_name,
      activeSellingPoints,
      activeOptionalPoints,
      activeOptionsPriceSum,
      selligPointsPriceSum,
      flexiblePoints.selectedCheckboxes,
      totalSum,
      sale,
      transalte,
      activeOptionsTranslated
    );

    const templateParams = {
      company_email: result.company_email,
      subject_heading: transalte("subjectHeading"),
      message: stringEmail,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  const t = useTranslations("additionalOptions");
  return (
    <section className="flex flex-col items-center justify-center px-6 mx-auto w-full max-w-[1400px] gap-8 ">
      <h2 className={` text-3xl md:text-5xl  text-center`}>
        {cartSectionTest.heading}
      </h2>

      <div className="grid grid-cols-1 w-full gap-20">
        <div className="col-span-1 flex flex-col gap-5">
          <h3 className="text-2xl">{cartSectionTest.headingOffers}</h3>
          <AnimatePresence>

            {activeSellingPoints.map((sp) => (
              sp.name === "Flexible" ?
                <div key={sp.name}>
                  {SP(sp)}
                  <AnimatePresence>
                    {flexiblePoints.selectedCheckboxes.map((item) => (<motion.div key={sp.name} className="p-1 ml-4 list-item" initial={{ y: -5, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}>{item}</motion.div>))}
                  </AnimatePresence>
                </div>
                :
                SP(sp)))}
          </AnimatePresence>
          <AnimatePresence>
            {activeOptionalPoints.length ? (
              <>
                <h3 className="text-2xl">{cartSectionTest.additionalOffersHeading}</h3>
                <ul>

                  {
                    activeOptionalPoints.map((opt) => (OPT({ ...opt, name: t(`${opt.index}.heading`) })))
                  }

                </ul>
              </>
            ) : null}
          </AnimatePresence>
          <div className="flex w-full justify-between">
            <p>{cartSectionTest.sum}:</p>

            <p className={cn("text-xl", sale && "text-green-500")}>
              {totalSum}$
            </p>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-5">
          <CartForm handleForm={handleForm} cartSectionTest={cartSection()} />
          <div className="leading-relaxed text-sm">
            <p>
              {cartSectionTest.desc0}
            </p>
            <div>
              {cartSectionTest.salesHeading}
              <ul>
                <li className="list-disc"> {cartSectionTest.desc1}</li>
                <li className="list-disc"> {cartSectionTest.desc2}</li>
                <li className="list-disc"> {cartSectionTest.desc3}</li>
              </ul>
            </div>

            <p> {cartSectionTest.desc4}</p>
          </div>
        </div>

      </div>
    </section >
  );
}

const CartForm = ({ handleForm, cartSectionTest }: { handleForm: (result: any, transalte: any, activeOptionsTranslated: any) => void, cartSectionTest: any }) => {
  const t = useTranslations("emailMessage");
  const activeOptionsTranslated = useTranslations("additionalOptions");

  const [isModalOpen, setIsModalOpen] = useState(false);


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      company_email: "",
      company_name: "",
    },
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  function onSubmit(values: FormValues) {
    handleForm(values, t, activeOptionsTranslated);
    setIsModalOpen(true);
    form.reset();
  }

  return (
    <>
      <Form {...form}>
        <form
          className="flex flex-col space-y-4"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            name="company_name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{cartSectionTest.formHeadings0}</FormLabel>
                <FormControl>
                  <Input placeholder="Acme.inc" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="company_email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{cartSectionTest.formHeadings1}</FormLabel>
                <FormControl>
                  <Input placeholder="company@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">{cartSectionTest.formHeadings2}</Button>
        </form>
      </Form>
      {isModalOpen && <div className="text-green-400 text-lg">{cartSectionTest.formHeadings3}</div>}
    </>
  );
};
