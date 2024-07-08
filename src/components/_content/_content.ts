import { dataItem, iOptional, ModalParams } from "@/types";
import { iSellingPoint } from "@/types";



import facebookLogo from "../../public/facebook.svg"
import instagramLogo from "../../public/instagram.svg"
import linkedinLogo from "../../public/linkedin.svg"
import telegramLogo from "../../public/telegram.svg"
import hackPhoto from "../../public/hack.jpg"


import jeopardy from "../../public/jeopardyDiagram.svg"
import jeopardyWeb from "../../public/web.svg"
import jeopardyCrypto from "../../public/crypto.svg"
import jeopardyMisc from "../../public/misc.svg"
import jeopardyForensic from "../../public/forensic.svg"
import jeopardyReverse from "../../public/reverse.svg"
import jeopardyPwn from "../../public/pwn.svg"

export const jeopardyTypes = [jeopardyWeb, jeopardyCrypto, jeopardyMisc, jeopardyForensic, jeopardyReverse, jeopardyPwn]

import leobit from "@/public/leobit.svg"
import softserve from "@/public/softserve.svg"
import globallogic from "@/public/globallogic.svg"
import teamvoy from "@/public/teamvoy.svg"
import sigma from "@/public/sigma.svg"
import dataart from "@/public/dataart.svg"


import bestLvivLogo from "@/public/logo.svg"

import bec from "@/public/bec.svg"
import ejf from "@/public/ejfLogo.png"
import hack from "@/public/hackLogo.png"
import bci from "@/public/bciLogo.png"
import btw from "@/public/btw.png"


const socialMediaLogos = [facebookLogo, instagramLogo, linkedinLogo, telegramLogo]
const ourProjects = [bec, ejf, hack, bci, btw]
export const headerNavigation = [
  {
    name: "Про нас",
    href: "#about",
  },
  {
    name: "Статистика",
    href: "#statistics",
  },
  {
    name: "Контакти",
    href: "#contacts",
  },
];

export const introSection =
{
  title: 'Capture The Flag',
  term: "16-17 листопада",
  description: "Щоб знати як захищати, треба знати, як атакувати",
}

export const descriptionSection = {
  title: "Про наш івент",
  titleDescription1: "BEST CTF – це командні змагання з інформаційної безпеки, де команди намагаються знайти більше вразливостей в системі і, використовуючи їх, отримати секретні дані (прапорці) ",
  titleDescription2: "Ми проводимо перші CTF-змагання у Львові, що є унікальною можливістю для Вас зробити внесок у розвиток етичного хакінгу серед студентів.",

  term: introSection.term,
  termDescription: "Опис теми проєкту",
  img1: {
    src: hackPhoto,
    alt: "img1"
  }
}

export const forPartnersSection = {
  title: "Формат змагань - Jeopardy",
  description: "Завдання класифікуються за категоріями, кожна з яких має свій баловий еквівалент, зважаючи на складність. Учасники намагаються вирішити якомога більше завдань за встановлений час, і відповідно до кількості балів визначається їх місце в рейтингу в реальному часі.",
  img: jeopardy
}
export const whySection = {
  title: "Чому варто брати участь у CTF-змаганнях? ",
  items: [
    { title: "Вклад у майбутнє кібербезпеки", desc: "Станьте частиною розвитку наступного покоління кібербезпеки, підтримуючи нові таланти та інноваційні рішення." },
    { title: "Підвищення впізнаваності бренду", desc: "Розширте свій вплив серед студентів та молодих фахівців, які можуть стати Вашими майбутніми працівниками." },
    { title: "Ефективний піар", desc: "Залучення до CTF-змагань привертає увагу цільової аудиторії та сприяє формуванню позитивного іміджу Вашої компанії." },
    { title: "Виявлення талантіви", desc: "Знайдіть талановитих учасників, які можуть стати перспективними працівниками." },
    { title: "Конкурентна перевага", desc: "Підтримка нових талантів дає Вашій компанії конкурентну перевагу в майбутньому завдяки впізнаваності Вашого бренду." },
    { title: "Зміцнення національних кібервійськ", desc: "Ваша залученість до CTF-змагань допоможе заохотити студентів зміцнювати наші кібервійська в майбутньому, що є критично важливим для захисту національних інтересів у цифровому просторі." },

  ]
}
export const statisticsSection = {
  title: "Статистика",
  items: [
    { title: 'facebook', value: 2100, img: socialMediaLogos[0] },
    { title: 'instagram', value: 2900, img: socialMediaLogos[1] },
    { title: 'linkedIn', value: 300, img: socialMediaLogos[2] },
    { title: 'telegram', value: 800, img: socialMediaLogos[3] }
  ],
  additionalInfo: [{
    title: "Більше 5 заходів щороку",
    desc: "Наші заходи дозволяють студентам регулярно отримувати цінний досвід та спілкуватися з експертами у своїй галузі."
  }, {
    title: "850+ активних студентів",
    desc: "Щороку сотні студентів відвідують наші заходи, розвиваються і ростуть з нами."
  },],
  ourProjects: ourProjects
}


export const customersSection = {
  title: "Хто відвідує  CTF - змагання?",
  personType: [
    { title: "Студенти технічних спеціальностей", desc: "" },
    { title: "Особи, зацікавлені в кібербезпеці та етичному хакінгу", desc: "" },
    { title: "Молоді фахівці віком 17-22 років", desc: "" },
  ],
  specialisation: ["Мережеві Технології", "Телекомунікації та Радіотехніка", "Програмна Інженерія", "Інженерія Програмного Забезпечення", "Кібербезпека", "Комп'ютерні Науки", "Прикладна Математика", "Інформаційні Технології", "Системний Аналіз"]
}


export const sellingPoints: iSellingPoint[] = [
  {
    compulsory: true,
    active: true,
    name: "Essential",
    price: 300,
    annotation: "Обов'язковий",
    services: [
      `Логотип компанії на бренд-волл та на сайті події`,
      `Згадка компанії в постівентному відео`,
      `Пост-дайджест у Telegram`,
      `Участь у нетворкінгу`,
    ],
  },
  {
    compulsory: false,
    active: false,
    name: "Brand",
    price: 300,
    // annotation: "4 left",
    services: [
      "Пост про компанію в Instagram",
      `Згадка компанії в постівентному відео`,
      `Розміщення банера компанії під час змагань`,
      `Промоція в LinkedIn або TikTok`
    ],
  },
  {
    compulsory: false,
    active: false,
    name: "Elite",
    price: 700,
    annotation: "(максимум 4 компанії може взяти)",
    services: [
      `Логотип на футболках учасників та організаторів`,
      `Участь у подкасті`,
      `Можливість провести воркшоп або тренінг серед учасників`,
      `Доступ до бази CV учасників`,
      `Пряма трансляція в Instagram-профілі з представником компанії`,
    ],
  },
  {
    compulsory: false,
    active: false,
    name: "Flexible",
    price: 500,
    annotation: "(4 на вибір)",
    services: [
      `World Cafe`,
      `Гра «Treasure hunt»`,
      `Розсилка вакансій у Telegram-боті`,
      `Пост про компанію в Instagram`,
      `Номінація від компанії`,
      `Розміщення банера компанії під час змагань`,
      `Промоція в LinkedIn або TikTok`,
      `Доступ до бази CV учасників`,
      `Промоція на Інфостійках`,
    ],
  },
];

export const sellingPointsExplanation = {
  Essential: [

    {
      heading: "Логотип компанії на бренд-волл та на сайті події",
      details:
        "Ми розмістимо Ваш логотип на бренд-воллі, великому банері з логотипами всіх партнерів заходу, що буде демонструватися під час події. Також логотип буде представлений на офіційному сайті події, що забезпечить додаткову видимість Вашого бренду.",
    },
    {
      heading: "Логотип компанії у постівентному відео",
      details:
        " Логотип Вашої компанії буде внесений у постівентне відео, яке буде опубліковане в Instagram-профілі @best_lviv після завершення заходу. Це відео підсумує всі ключові моменти змагань і надасть додаткову рекламу бренду.",
    },
    {
      heading: "Пост-дайджест у Telegram",
      details:
        "Інформація про Вашу компанію буде розміщена в пості про всіх партнерів у Telegram-каналі BEST Lviv Students. Це дозволить Вам охопити широку аудиторію, яка слідкує за нашими подіями.",
    }, {
      heading: "Участь у нетворкінгу",
      details:
        "Нетворкінг — це зустрічі між учасниками, організаторами та представниками компанії в неформальній обстановці, що може стати відмінною нагодою для компанії поспілкуватися з учасниками та знайти потенційних працівників.",
    }
  ],
  Brand: [
    {
      heading: "Пост про компанію в Instagram",
      details:
        "Ми опублікуємо пост про Вашу компанію в Instagram-профілі @best_lviv. У цьому пості буде розміщена інформація про компанію та зазначено, що Ви є одним з основних партнерів наших CTF-змагань.",
    },
    {
      heading: "Розміщення банера компанії під час змагань",
      details:
        "Під час проведення CTF-змагань ми розмістимо Ваш банер, який Ви нам надасте до початку змагань. Це забезпечить максимальну видимість для учасників та гостей заходу та стане ефективним способом підвищити впізнаваність Вашого бренду серед цільової аудиторії.",
    },
    {
      heading: "Промоція в LinkedIn або TikTok",
      details:
        "Поширення поста на LinkedIn-сторінці BEST Lviv з короткою інформацією про Вашу компанію, досягненнями компанії та інформацією про партнерство. Текст надсилається Вашою компанією та публікується під час змагань або після проведення події. Альтернативно, ми знімемо персоналізоване відео про Вашу компанію до 30 секунд в TikTok BEST Lviv. Ви можете обрати лише один вид промоції із запропонованих варіантів.",
    },
    {
      heading: "Інтерактивні Instagram Stories або Reels",
      details:
        "Спільно з нашою командою буде створено контент для промоції Instagram Stories або Reels на сторінці @best_lviv. Приклади інтерактиву: рубрика “Питання-відповідь”, рубрика “Як проходить день нашого працівника” та інше. У компанії буде можливість створити максимум 5 таких Instagram Stories або 1 Reels, які ми виставимо після завершення івенту.",
    }
  ],
  Elite: [
    {
      heading: "Логотип на футболках учасників та організаторів",
      details:
        "Ми надрукуємо Ваш логотип на футболках, які поширюватимуться серед учасників змагань та організаторів BEST Lviv. Це забезпечить вашій компанії постійну видимість серед молодих талантів у сфері кібербезпеки та створить тривалий бренд-ефект.",
    },
    {
      heading: "Участь у подкасті",
      details:
        "Ми запрошуємо Вас взяти участь у постівентному подкасті. Представник компанії зможе поділитися досвідом та думками на вибрану тему. Наша команда забезпечить монтаж і зйомку, а подкаст буде розміщено на YouTube-каналі BEST Lviv, що забезпечить широке охоплення аудиторії.",
    },
    {
      heading: "Можливість провести воркшоп або тренінг серед учасників",
      details:
        "Пропонуємо провести воркшоп або тренінг для учасників заходу. Воркшоп – це інтерактивне навчання, де учасники виконують практичні завдання, беруть участь у дискусіях або демонстраціях. Тренінг спрямований на підвищення знань та навичок у певній галузі, таких як техніка комунікації, управління проєктами, web-технології та інші корисні теми. Це чудова можливість для Вашої компанії поділитися експертизою та залучити талановитих учасників.",
    },
    {
      heading: "Доступ до бази CV учасників",
      details:
        "Отримайте ексклюзивний доступ до бази резюме учасників, які успішно пройшли відбір на наші CTF-змагання. Це дозволить Вам швидко знайти перспективних кандидатів для компанії, зберігаючи час та ресурси на пошук нових кадрів.",
    },
    {
      heading: "Пряма трансляція в Instagram-профілі з представником компанії",
      details:
        "Пропонуємо провести пряму трансляцію тривалістю від 30 хв до 1 години в Instagram-профілі @best_lviv з представником Вашої компанії у форматі Q&A. Це чудова можливість встановити прямий звʼязок з студентами, зацікавленими у сфері кібербезпеки.",
    },
  ],
  Flexible: [
    {
      heading: "World Cafe",
      details:
        "World Cafe – це інтерактивна сесія, спрямована на спільне створення та обмін ідеями у невимушеній атмосфері. Ваша компанія матиме 30 хвилин для взаємодії з учасниками, що дозволить вам поділитися своїм досвідом, презентувати інноваційні ідеї та створити міцні зв’язки з майбутніми професіоналами у сфері кібербезпеки. World Cafe проводитиметься водночас з нетворкінгом.",
    },
    {
      heading: "Гра «Treasure hunt»",
      details:
        "Перед початком події студенти матимуть можливість взяти участь у “полюванні на скарби”, де завдання та підказки будуть розміщені в Instagram-профілі @best_lviv. Компанія-партнер надає мерчендайз, який ми заховаємо в межах Львівської політехніки, що дасть змогу залучити увагу студентів, підвищити Вашу впізнаваність та зацікавити їх партнерськими продуктами чи послугами.",
    },
    {
      heading: "Розсилка вакансій у Telegram-боті",
      details:
        "Можливість розмістити Ваші вакансії протягом наступних пів року в Telegram-боті, спеціально створеному для реєстрації учасників змагань. Це дозволить Вашій компанії безпосередньо донести свої вакансії до талановитих фахівців у сфері кібербезпеки, забезпечивши швидкий доступ до цільової аудиторії.",
    },
    {
      heading: "Пост про компанію в Instagram",
      details:
        "Ми опублікуємо пост про Вашу компанію на сторінці в Instagram-профілі @best_lviv. У цьому пості ми надамо інформацію про Вашу компанію та зазначимо, що Ви є одним з наших основних партнерів на цих CTF змаганнях.",
    },
    {
      heading: "Номінація від компанії",
      details:
        "Ваша компанія може придумати власну номінацію на змаганнях та нагородити команду-переможця у цій категорії. Це може бути нагорода за найкраще використання певних технологій або інші унікальні досягнення команд, що дозволить вам підкреслити важливі для вашого бізнесу аспекти та підвищити свою видимість на заході.",
    },
    {
      heading: "Розміщення банера компанії під час змагань",
      details:
        "Під час проведення CTF-змагань ми розмістимо ваш банер, що забезпечить максимальну видимість для учасників та гостей заходу. Це ефективний спосіб підвищити впізнаваність вашого бренду серед цільової аудиторії.",
    },
    {
      heading: "Промоція в LinkedIn або TikTok",
      details:
        "Поширення одного допису на сторінці LinkedIn BEST Lviv з інформацією про Вашу компанію, досягненнями та спільне партнерство (початковий текст надається вами). Також ми можемо зняти персоналізоване відео про Вашу компанію для TikTok BEST Lviv.",
    },
    {
      heading: "Доступ до бази CV учасників",
      details:
        "Отримайте ексклюзивний доступ до бази резюме учасників, які успішно пройшли відбір на наші CTF-змагання. Це дозволить Вам швидко знайти перспективних кандидатів для компанії, зберігши час та ресурси на пошук нових кадрів.",
    },
    {
      heading: "Промоція на Інфостійках",
      details:
        "Ваше рекламне відео компанії тривалістю до 30 секунд на тижні інформаційних стійок у Національному університеті 'Львівська політехніка' (НУЛП), що підвищить Вашу видимість серед студентів ще до проведення змагань.",
    },
  ],
};

export const additionalOptions: dataItem[] = [

  {
    heading: "Онлайн-вебінар чи семінар в YouTube ($150)",
    details: "Можливість провести вебінар або семінар на нашому YouTube-каналі, де Ви зможете поділитися своїми знаннями та експертизою з глядачами. Це не тільки підвищить впізнаваність Вашого бренду, але й дозволить безпосередньо взаємодіяти з цільовою аудиторією, надаючи цінну інформацію та залучаючи нових прихильників."
  },
  {
    heading: "Логотип на футболках учасників та організаторів ($120) ",
    details: "Ми надрукуємо ваш логотип на футболках, які поширюватимуться серед учасників змагань та організаторів BEST Lviv. Це забезпечить вашій компанії постійну видимість серед молодих талантів у сфері кібербезпеки та створить тривалий бренд-ефект."
  },
  {
    heading: "Доступ до бази CV учасників ($100) ",
    details: "Отримайте ексклюзивний доступ до бази резюме учасників, які успішно пройшли відбір на наші CTF-змагання. Це дозволить вам швидко знайти перспективних кандидатів для компанії, зберігши час та ресурси на пошук нових кадрів."
  },
  {
    heading: "Розміщення банера компанії під час змагань ($80)",
    details: "Під час проведення CTF-змагань ми розмістимо ваш банер у важливих місцях, що забезпечить максимальну видимість для учасників та гостей заходу. Це ефективний спосіб підвищити впізнаваність вашого бренду серед цільової аудиторії."
  },
  {
    heading: "Розсилка вакансій у Telegram-боті ($60)",
    details: "Можливість розмістити ваші вакансії в Telegram-боті, спеціально створеному для реєстрації учасників змагань. Це дозволить вашій компанії безпосередньо донести свої вакансії до талановитих фахівців у сфері кібербезпеки, забезпечивши швидкий доступ до цільової аудиторії."
  },
  {
    heading: "World cafe ($60)",
    details: "World Cafe – це інтерактивна сесія, спрямована на спільне створення та обмін ідеями у невимушеній атмосфері. Ваша компанія матиме 90 хвилин для взаємодії з учасниками, що дозволить вам поділитися своїм досвідом, презентувати інноваційні ідеї та створити міцні зв’язки з майбутніми професіоналами у сфері кібербезпеки."
  },
  {
    heading: "Номінація від компанії ($80)",
    details: "Ваша компанія може придумати власну номінацію на змаганнях та нагородити команду-переможця у цій категорії. Це може бути нагорода за найкраще використання певних технологій або інші унікальні досягнення команд, що дозволить вам підкреслити важливі для вашого бізнесу аспекти та підвищити свою видимість на заході."
  },

]
export const cartSection = {
  heading: "Кошик",
  headingOffers: "Пакети",
  additionalOffersHeading: "Додаткові опції",
  salesHeading: "Додаткові опції",
  desc: [
    "*Оплата буде здійснюватись за курсом НБУ",
    "Essential + 3 додаткові опції -50$",
    "Essential + один пакет -50$",
    "Essential + два пакети -150$",
    "*Знижки не поєднуються."
  ],
  formHeadings: [
    "Назва компанії",
    "Ваш email",
    "Відправити",
    "Форму успішно надсілано",
  ]
}
export const flexibleOfferContent = {
  buttonHeading: "Додати & Видалити"
}

export const offerContent = {
  heading: "Пропозиції",
  desc: "*10% від загальної суми буде передано на підтримку ЗСУ"
}
export const options: iOptional[] = [
  {
    name: 'Онлайн-вебінар чи семінар в YouTube',
    active: false,
    price: 150,
  },
  {
    name: 'Логотип на футболках учасників та організаторів',
    active: false,
    price: 120,
  },
  {
    name: 'Доступ до бази CV учасників',
    active: false,
    price: 100,
  },
  {
    name: 'Розміщення банера компанії під час змагань',
    active: false,
    price: 80,
  },
  {
    name: 'Розсилка вакансій у Telegram-боті',
    active: false,
    price: 60,
  },
  {
    name: 'World cafe',
    active: false,
    price: 60,
  },
  {
    name: 'Номінація від компанії',
    active: false,
    price: 80,
  },
]

export const partnersSection = {
  heading: "Нас підтримували",
  logos:
  [
  {
    image: leobit,
    width: 123,
    height: 50
  },

  {
    image: softserve,
    width: 123,
    height: 50
  },
  {
    image: globallogic,
    width: 123,
    height: 50
  },
  {
    image: teamvoy,
    width: 123,
    height: 50
  },

  {
    image: sigma,
    width: 123,
    height: 50
  },
  {
    image: dataart,
    width: 123,
    height: 50
  }]

}

export const organizatorsSection = {
  heading: "Організатори події",
  title: "Best Lviv",
  logo: bestLvivLogo,
  description: "(Board of European Students of Technology) – осередок міжнародної неприбуткової громадської організації, який об’єднує студентів технічних спеціальностей. Нашою місією є розви-ток студентів через обмін знаннями та співпрацю компаній, університетів та студентів Європи.",
  statistics: [
    { title: "осередків", desc: "Майже у всіх країнах Європи", value: 85 },
    { title: "країн", desc: "Більше 15 тисяч бестівців по усьому світі  ", value: 30 },
    { title: "років досвіду", desc: "З 1989 ми забезпечуємо співпрацю та комунікацію між студентами технічних спеціальностей ", value: 35 },
  ],

}
export const contactsSection = {
  title: "Контакти",
  team: [
    { name_surname: "Віктор Гаврилюк", description: "головний організатор", mail: "viktor.gavryliuk@best-eu.org", phone: "099 32 98 431" },
    { name_surname: "Вікторія Шевченко", description: "Відповідальна за корпоративні зв'язки", mail: "vika.shevchenko@best-eu.org", phone: "067 86 40 104" },
    { name_surname: "Анна Гащук", description: "Відповідальна за корпоративні зв'язки", mail: "anna.hashchuk@best-eu.org", phone: "096 04 31 261" },

  ]
}

export const footerSection = {
  socialMedia: [
    { img: socialMediaLogos[0], link: "https://www.facebook.com/BEST.Lviv/?locale=uk_UA" },
    { img: socialMediaLogos[1], link: "https://www.instagram.com/best_lviv/" },
    { img: socialMediaLogos[2], link: "https://www.linkedin.com/company/bestlviv/mycompany/" },
    { img: socialMediaLogos[3], link: "https://t.me/s/bestlviv?before=412" },
  ],
  year: 2024
}
