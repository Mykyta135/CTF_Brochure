"use client"
import Modal from '@/components/Cart/Modal'
import { Button } from '@/components/ui/button'
import { Dialog } from '@/components/ui/dialog'
import { toggleModal } from '@/redux/modalSlice'
import { dataItem, ModalParams } from '@/types'
import { DialogTrigger } from '@radix-ui/react-dialog'
import { Check, Ghost, Info } from 'lucide-react'
import React from 'react'
import { useDispatch } from 'react-redux'
const details = [
    {
        heading: "Лого на бренд-волл",
        details: "Ми розмістимо Ваш логотип на бренд-воллі, великому банері з логотипами всіх партнерів заходу, що буде демонструватися під час події, що забезпечить додаткову видимість Вашого бренду."
    }, {
        heading: "Інтерактивні Instagram stories",
        details: "Спільно з нашою командою буде створено контент для постівентної промоції Instagram Stories в Instagram-профілі @best_lviv. Приклади інтерактиву: рубрика “Питання-відповідь”, рубрика “Як проходить день нашого працівника” та інше."
    }, {
        heading: "Згадка про компанію в постівентному відео",
        details: "Логотип Вашої компанії буде внесений у постівентне відео, яке буде опубліковане в Instagram-профілі @best_lviv після завершення заходу. Це відео підсумує всі ключові моменти змагань і надасть додаткову рекламу бренду."
    }, {
        heading: "Транслювання відеоролика на місці події",
        details: "На місці проведення змагань будуть транслюватися відеоролики компаній. Необхідні відеоматеріали тривалістю до 1 хв надає компанія-учасник."
    }, {
        heading: "Розміщення банеру на місці події",
        details: "Під час проведення CTF-змагань ми розмістимо Ваш банер, який Ви нам надасте до початку змагань. Це забезпечить максимальну видимість для учасників та гостей заходу та стане ефективним способом підвищити впізнаваність Вашого бренду серед цільової аудиторії."
    }, {
        heading: "Пост-дайджест у Telegram-каналі",
        details: "Інформація про Вашу компанію буде розміщена в пості про всіх бартерних партнерів у Telegram-каналі BEST Lviv Students. Це дозволить Вам охопити широку аудиторію, яка слідкує за нашими подіями."
    }, {
        heading: "Участь у World Cafe",
        details: "World Cafe – це інтерактивна сесія, спрямована на спільне створення та обмін ідеями у невимушеній атмосфері. Ваша компанія матиме 90 хвилин для взаємодії з учасниками, що дозволить вам поділитися своїм досвідом, презентувати інноваційні ідеї та створити міцні зв’язки з майбутніми професіоналами у сфері кібербезпеки. World Cafe проводитиметься водночас з нетворкінгом."
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

                <h3 className='text-2xl md:text-4xl mt-3 font-extralight text-center'>За Вашу продукцію ми надамо</h3>

                <div className="text-md space-y-3 mt-5">

                    <div className="flex gap-2">
                        <Check className="flex-shrink-0 " strokeWidth={3} width={19} />
                        <p className="text-md font-medium ">
                            Лого на бренд-волл

                        </p>
                    </div>  <div className="flex gap-2">
                        <Check className="flex-shrink-0 " strokeWidth={3} width={19} />
                        <p className="text-md font-medium ">
                            Інтерактивні Instagram stories
                        </p>
                    </div>  <div className="flex gap-2">
                        <Check className="flex-shrink-0 " strokeWidth={3} width={19} />
                        <p className="text-md font-medium ">
                            Згадка в постівентному відео
                        </p>
                    </div><div className="flex gap-2">
                        <Check className="flex-shrink-0 " strokeWidth={3} width={19} />
                        <p className="text-md font-medium ">
                            Транслювання відеоролика на місці події
                        </p>
                    </div><div className="flex gap-2">
                        <Check className="flex-shrink-0 " strokeWidth={3} width={19} />
                        <p className="text-md font-medium ">
                            Розміщення банеру на місці події
                        </p>
                    </div><div className="flex gap-2">
                        <Check className="flex-shrink-0 " strokeWidth={3} width={19} />
                        <p className="text-md font-medium ">
                            Пост-дайджест у Telegram-каналі
                        </p>
                    </div><div className="flex gap-2">
                        <Check className="flex-shrink-0 " strokeWidth={3} width={19} />
                        <p className="text-md font-medium ">
                            Участь у World Cafe
                        </p>
                    </div>

                </div>
            </div >
        </div>
    )
}

export default Page