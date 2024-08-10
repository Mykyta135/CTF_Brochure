

import { dataItem, iOptional } from "@/types";
import { iSellingPoint } from "@/types";

import { useTranslations } from "next-intl";

import facebookLogo from "@/public/facebook.svg"
import instagramLogo from "@/public/instagram.svg"
import linkedinLogo from "@/public/linkedin.svg"
import telegramLogo from "@/public/telegram.svg"
import hackPhoto from "@/public/hack.jpg"

import jeopardy from "@/public/jeopardyDiagram.svg"
import jeopardyWeb from "@/public/web.svg"
import jeopardyCrypto from "@/public/crypto.svg"
import jeopardyMisc from "@/public/misc.svg"
import jeopardyForensic from "@/public/forensic.svg"
import jeopardyReverse from "@/public/reverse.svg"
import jeopardyPwn from "@/public/pwn.svg"

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


export const headerNavigation = () => {
  const t = useTranslations("headerNavigation");
  return [

    {
      name: t("name1"),
      href: "#about",
    },
    {
      name: t("name2"),
      href: "#statistics",
    },
    {
      name: t("name3"),
      href: "#contacts",
    },
  ];
}


export const introSection = () => {
  const t = useTranslations("intro");
  return {
    title: 'Capture The Flag',
    term: t("date"),
    description: t("subtitle"),
  }
};

export const descriptionSectionText = () => {
  const t = useTranslations("descriptionSection");
  return {
    title: t("title"),
    titleDescription1: t("titleDescription1"),
    titleDescription2: t("titleDescription2"),

    term: introSection().term,

    img1: {
      src: hackPhoto,
      alt: "img1"
    }
  }


};

export const forPartnersSection = () => {
  const t = useTranslations("forPartnersSection");
  return {
    title: t("title"),
    description: t("description"),
    img: jeopardy
  }

}

export const whySection = () => {
  const t = useTranslations("whySection");

  return {
    title: t("title"),
    items: [
      { title: t("title1"), desc: t("desc1") },
      { title: t("title2"), desc: t("desc2") },
      { title: t("title3"), desc: t("desc3") },
      { title: t("title4"), desc: t("desc4") },
      { title: t("title5"), desc: t("desc5") },
      { title: t("title6"), desc: t("desc6") },

    ]
  }
}
export const statisticsSection = () => {
  const t = useTranslations("statisticsSection");
  return {
    title: t("title"),
    items: [
      { title: 'facebook', value: 2100, img: socialMediaLogos[0], link: "https://www.facebook.com/BEST.Lviv/?locale=uk_UA" },
      { title: 'instagram', value: 2900, img: socialMediaLogos[1], link: "https://www.instagram.com/best_lviv/" },
      { title: 'linkedIn', value: 300, img: socialMediaLogos[2], link: "https://www.linkedin.com/company/bestlviv/mycompany/" },
      { title: 'telegram', value: 800, img: socialMediaLogos[3], link: "https://t.me/s/bestlviv?after=560" }
    ],
    additionalInfo: [{
      title: t("title1"),
      desc: t("desc1")
    }, {
      title: t("title2"),
      desc: t("desc2")
    },],
    ourProjects: ourProjects
  }
}

export const customersSection = () => {
  const t = useTranslations("customersSection");
  return {
    title: t("title"),
    personType: [
      { title: t("title1") },
      { title: t("title2") },
      { title: t("title3") },
    ],
    specialisation: [
      t("field1"),
      t("field2"),
      t("field3"),
      t("field4"),
      t("field5"),
      t("field6"),
      t("field7"),
      t("field8"),
      t("field9"),

    ]
  }
}

export const sellingPointsText = () => {
  const essential = useTranslations("Essential");
  const brand = useTranslations("Brand");
  const elite = useTranslations("Elite");
  const flexible = useTranslations("Flexible");
  return [{
    annotation: essential("annotation"),
    services: [
      essential("service1"),
      essential("service2"),
      essential("service3"),
      essential("service4"),

    ],
  }, {
    annotation: "",
    services: [
      brand("service1"),
      brand("service2"),
      brand("service3"),
      brand("service4"),

    ],
  }, {
    annotation: elite("annotation"),
    services: [
      elite("service1"),
      elite("service2"),
      elite("service3"),
      elite("service4"),
      elite("service5"),
    ],
  },
  {
    annotation: flexible("annotation"),
    services: [
      flexible("service1"),
      flexible("service2"),
      flexible("service3"),
      flexible("service4"),
      flexible("service5"),
      flexible("service6"),
      flexible("service7"),
      flexible("service8"),
      flexible("service9"),
    ],
  },

  ]
}

export const sellingPoints = (): iSellingPoint[] => {

  return [
    {
      compulsory: true,
      active: true,
      name: "Essential",
      price: 300,
      annotation: "",
      services: [

      ],
    },
    {
      compulsory: false,
      active: false,
      name: "Brand",
      price: 300,
      services: [

      ],
    },
    {
      compulsory: false,
      active: false,
      name: "Elite",
      price: 700,
      annotation: "",
      services: [

      ],
    },
    {
      compulsory: false,
      active: false,
      name: "Flexible",
      price: 500,
      annotation: "",
      services: [

      ],
    },
  ];
}

export const sellingPointsExplanationText = () => {
  const essebtialExplabation = useTranslations("ExplanationEssential");
  const brandExplabation = useTranslations("ExplanationBrand");
  const eliteExplabation = useTranslations("ExplanationElite");
  const flexibleExplabation = useTranslations("ExplanationFlexible");

  return [
    [
      {
        heading: essebtialExplabation("type1.heading"),
        details: essebtialExplabation("type1.details"),
      },
      {
        heading: essebtialExplabation("type2.heading"),
        details: essebtialExplabation("type2.details"),
      },
      {
        heading: essebtialExplabation("type3.heading"),
        details: essebtialExplabation("type3.details"),
      },
      {
        heading: essebtialExplabation("type4.heading"),
        details: essebtialExplabation("type4.details"),
      },
    ],
    [
      {
        heading: brandExplabation("type1.heading"),
        details: brandExplabation("type1.details"),
      },
      {
        heading: brandExplabation("type2.heading"),
        details: brandExplabation("type2.details"),
      },
      {
        heading: brandExplabation("type3.heading"),
        details: brandExplabation("type3.details"),
      },
      {
        heading: brandExplabation("type4.heading"),
        details: brandExplabation("type4.details"),
      },
    ],
    [
      {
        heading: eliteExplabation("type1.heading"),
        details: eliteExplabation("type1.details"),
      },
      {
        heading: eliteExplabation("type2.heading"),
        details: eliteExplabation("type2.details"),
      },
      {
        heading: eliteExplabation("type3.heading"),
        details: eliteExplabation("type3.details"),
      },
      {
        heading: eliteExplabation("type4.heading"),
        details: eliteExplabation("type4.details"),
      },
      {
        heading: eliteExplabation("type5.heading"),
        details: eliteExplabation("type5.details"),
      },
    ],
    [
      {
        heading: flexibleExplabation("type1.heading"),
        details: flexibleExplabation("type1.details"),
      },
      {
        heading: flexibleExplabation("type2.heading"),
        details: flexibleExplabation("type2.details"),
      },
      {
        heading: flexibleExplabation("type3.heading"),
        details: flexibleExplabation("type3.details"),
      },
      {
        heading: flexibleExplabation("type4.heading"),
        details: flexibleExplabation("type4.details"),
      },
      {
        heading: flexibleExplabation("type5.heading"),
        details: flexibleExplabation("type5.details"),
      }, {
        heading: flexibleExplabation("type6.heading"),
        details: flexibleExplabation("type6.details"),
      }, {
        heading: flexibleExplabation("type7.heading"),
        details: flexibleExplabation("type7.details"),
      }, {
        heading: flexibleExplabation("type8.heading"),
        details: flexibleExplabation("type8.details"),
      }, {
        heading: flexibleExplabation("type9.heading"),
        details: flexibleExplabation("type9.details"),
      },
    ],
  ];
}


export const sellingPointsExplanation = () => {

  return {
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
  }
};

export const additionalOptionsText = () => {
  const t = useTranslations("additionalOptions");
  const UAoptions = [
    {
      heading: t("1.heading"),
      details: t("1.details"),
    },
    {
      heading: t("2.heading"),
      details: t("2.details"),
    },
    {
      heading: t("3.heading"),
      details: t("3.details"),
    },
    {
      heading: t("4.heading"),
      details: t("4.details"),
    },
    {
      heading: t("5.heading"),
      details: t("5.details"),
    },
    {
      heading: t("6.heading"),
      details: t("6.details"),
    },
    {
      heading: t("7.heading"),
      details: t("7.details"),
    }

  ];
  const ENoptions = [
    {
      heading: t("1.heading"),
      details: t("1.details"),
    },
    {
      heading: t("2.heading"),
      details: t("2.details"),
    },
    {
      heading: t("3.heading"),
      details: t("3.details"),
    },
    {
      heading: t("4.heading"),
      details: t("4.details"),
    },
    {
      heading: t("5.heading"),
      details: t("5.details"),
    },
    {
      heading: "",
      details: "",
    },
    {
      heading: t("7.heading"),
      details: t("7.details"),
    }
  ];

  let array = UAoptions;
  if (t("6.heading") === "additionalOptions.6.heading")
    array = ENoptions;

  return {
    heading: t("heading"),
    button: t("buttonText"),
    modalHeading: t("modalHeading"),
    options: array
  }
}


export const cartSection = () => {
  const t = useTranslations("cartSectionTest");
  return {
    heading: t("heading"),
    headingOffers: t("headingOffers"),
    additionalOffersHeading: t("additionalOffersHeading"),
    salesHeading: t("salesHeading"),
    desc0: t("desc0"),
    desc1: t("desc1"),
    desc2: t("desc2"),
    desc3: t("desc3"),
    desc4: t("desc4"),

    sum: t("sum"),

    formHeadings0: t("formHeadings0"),
    formHeadings1: t("formHeadings1"),
    formHeadings2: t("formHeadings2"),
    formHeadings3: t("formHeadings3"),

  }
}

export const flexibleOfferContent = () => {
  const t = useTranslations("flexibleOfferContent");

  return { buttonHeading: t("buttonHeading") }
}

export const offerContent = () => {
  const t = useTranslations("offerContent");
  return {
    heading: t("heading"),
    desc: t("desc"),
  }

}
export const options = (): iOptional[] => {

  return [
    {
      name: 'Онлайн-вебінар чи семінар в YouTube',
      active: false,
      price: 150,
      index: "1"
    },
    {
      name: 'Логотип на футболках учасників та організаторів',
      active: false,
      price: 120,
      index: "2"
    },
    {
      name: 'Доступ до бази CV учасників',
      active: false,
      price: 100,
      index: "3"
    },
    {
      name: 'Розміщення банера компанії під час змагань',
      active: false,
      price: 80,
      index: "4"
    },
    {
      name: 'Розсилка вакансій у Telegram-боті',
      active: false,
      price: 60,
      index: "5"
    },
    {
      name: 'World cafe',
      active: false,
      price: 60,
      index: "6"
    },
    {
      name: 'Номінація від компанії',
      active: false,
      price: 80,
      index: "7"
    },]
}


export const partnersSection = () => {
  const t = useTranslations("partnersSection");
  return {
    heading: t("heading"),
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
}

export const organizatorsSection = () => {
  const t = useTranslations("organizatorsSection");
  return {
    heading: t("heading"),
    title: t("title"),
    logo: bestLvivLogo,
    description: t("description"),
    statistics: [
      { title: t("statistics0.title"), desc: t("statistics0.desc"), value: 85 },
      { title: t("statistics1.title"), desc: t("statistics1.desc"), value: 30 },
      { title: t("statistics2.title"), desc: t("statistics2.desc"), value: 35 },
    ],
  }


};

export const contactsSection = () => {
  const t = useTranslations("contactsSection");

  return {
    title: t("title"),
    team: [
      { name_surname: t("name_surname1"), description: t("description1"), mail: "viktor.gavryliuk@best-eu.org", phone: "099 32 98 431" },
      { name_surname: t("name_surname2"), description: t("description2"), mail: "vika.shevchenko@best-eu.org", phone: "067 86 40 104" },
      { name_surname: t("name_surname3"), description: t("description2"), mail: "anna.hashchuk@best-eu.org", phone: "096 04 31 261" },
    ]
  }

};

export const footerSection = () => ({
  socialMedia: [
    { img: socialMediaLogos[0], link: "https://www.facebook.com/BEST.Lviv/?locale=uk_UA" },
    { img: socialMediaLogos[1], link: "https://www.instagram.com/best_lviv/" },
    { img: socialMediaLogos[2], link: "https://www.linkedin.com/company/bestlviv/mycompany/" },
    { img: socialMediaLogos[3], link: "https://t.me/s/bestlviv?before=412" },
  ],
  year: 2024
});
