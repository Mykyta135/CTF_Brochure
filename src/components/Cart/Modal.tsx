"use client";
import React from "react";

import { useSelector } from "react-redux";

import { RootState } from "@/redux/store";

import { DialogContent, DialogHeader } from "../ui/dialog";


const Modal = () => {
  const { name, modalData } = useSelector((state: RootState) => state.modal);

  return (

    <DialogContent className="fixed top-1/2 left-1/2 box-border overflow-y-scroll max-h-[90vh] w-[95vw] z-50 translate-x-[-50%] translate-y-[-50%] ">
      <DialogHeader>
        <h3 className="text-3xl">{name}</h3>
      </DialogHeader>
      {modalData.map((data) => (
        <>
          <h4 className="text-xl font-bold ">{data.heading}</h4>
          <p className="text-gray-500 font-light">{data.details}</p>
        </>
      ))}
    </DialogContent>

  );
};

export default Modal;
