"use client"
import Modal from '@/components/Cart/Modal'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog } from '@/components/ui/dialog'
import { toggleModal } from '@/redux/modalSlice'
import { dataItem, ModalParams } from '@/types'
import { DialogTrigger } from '@radix-ui/react-dialog'
import { Check, Ghost, Info } from 'lucide-react'
import React from 'react'
import { useDispatch } from 'react-redux'
const details = [
  {
    heading: "Промоція в 1 Instagram story",
    details: "Розміщення інформації про Вашу компанію в 1 Instagram story в Instagram-профілі @best_lviv після завершення події."
  }, {
    heading: "Згадка про компанію в постівентному відео",
    details: "Логотип Вашої компанії буде внесений у постівентне відео, яке буде опубліковане в Instagram-профілі @best_lviv після завершення заходу. Це відео підсумує всі ключові моменти змагань і надасть додаткову рекламу бренду."
  }, {
    heading: "Розміщення банеру на місці події",
    details: "Під час проведення CTF-змагань ми розмістимо Ваш банер, який Ви нам надасте до початку змагань. Це забезпечить максимальну видимість для учасників та гостей заходу та стане ефективним способом підвищити впізнаваність Вашого бренду серед цільової аудиторії."
  }
]
const Page = () => {
  const dispatch = useDispatch();

  const handleModal = ({ name, modalData }: ModalParams) =>
    dispatch(toggleModal({ name, modalData }));


  return (
    <div className='flex w-full justify-center container'>
      <div className='text-neutral-50 bg-[#222227] relative border border-red-500 rounded-lg px-5 py-4 basis-[700px]'>

        <Dialog>
          <DialogTrigger asChild>
            <Button
              className="absolute top-1 right-1"
              size={"icon"}
              variant={"ghost"}
              onClick={() =>
                handleModal({ name: "Деталі пропозиції", modalData: details as dataItem[] })
              }
            >
              <Info strokeWidth={1.5} className="hover:bg-gray-600 rounded-full transition" />
            </Button>
          </DialogTrigger>
          <Modal />
        </Dialog>

        <h3 className='text-2xl md:text-4xl font-extralight'>За Вашу продукцію ми надамо</h3>

        <div className="text-md space-y-3 mt-5">

          <div className="flex gap-2">
            <Check className="flex-shrink-0 " strokeWidth={3} width={19} />
            <p className="text-md font-medium ">
              Промоція в 1 Instagram story

            </p>
          </div>  <div className="flex gap-2">
            <Check className="flex-shrink-0 " strokeWidth={3} width={19} />
            <p className="text-md font-medium ">
              Згадка про компанію в постівентному відео
            </p>
          </div>  <div className="flex gap-2">
            <Check className="flex-shrink-0 " strokeWidth={3} width={19} />
            <p className="text-md font-medium ">
              Розміщення банеру на місці події
            </p>
          </div>

        </div>
      </div >
    </div>
  )
}

export default Page