import { iSellingPoint, iOptional } from '@/types';

export const generateMessage = (name: string, sellingPoints: iSellingPoint[], optionalPoints: iOptional[], activeOptionsPriceSum: number, selligPointsPriceSum: number, selectedCheckboxes: string[], totalSum: number, isDiscount: boolean): string => `<!DOCTYPE html>

    <table
      cellpadding="0"
      cellspacing="0"
      width="100%"
      style="max-width: 600px; margin: 0 auto"
    >
      <tr
        style="
          padding: 20px;
          border-radius: 20px;
          color: white;
          background-color: #0F0F11;
        "
      >
        <td
          style="
            padding: 20px 20px;
            display: flex;
            justify-content: space-between;
          "
        >
          <img
            src="https://eobhoxf.stripocdn.email/content/guids/CABINET_542f996da0b698f8fe30d37519f37e50e6f4ad1d8aecb90b63e63bdbb194bd01/images/ctf_logo_png.png"
            alt="logo"
            style="width: 20%; margin: 0 auto;"
          />
        </td>
      </tr>
    </table>

    <table
      cellpadding="0"
      cellspacing="0"
      width="100%"
      style="max-width: 600px; margin: 0 auto; background-color: white"
    >
      <tr>
        <td align="center" style="padding: 20px">
          <h1 style="color: #0F0F11">Вітаємо, ${name}!</h1>
          <p style="color: #0F0F11">
            Ви на крок ближче до участі в <span style = "font-size: 17px; font-weight: bold; color: #5F001B">BEST CTF</span> в ролі партнера!
          </p>
        </td>
      </tr>
      <tr>
        <td style="max-width: 560px; margin: 0 auto">
          <hr style="border: 2px solid #5F001B" />
        </td>
      </tr>
    </table>

    <table
      cellpadding="0"
      cellspacing="0"
      width="100%"
      style="max-width: 600px; margin: 0 auto; background-color: #fff"
    >
      <tr>
        <td style="padding: 20px">
          <h2 style="color: #0F0F11">
            Ваш вибір опцій співпраці виглядає так:
          </h2>
          <table cellpadding="10" cellspacing="0" width="100%">
            <tr>
              <th
                style="text-align: left; background-color: #5F001B; color: #fff"
              >
                Назва пакету
              </th>
              <th
                style="
                  text-align: right;
                  background-color: #5F001B;
                  color: #fff;
                "
              >
                Вартість (USD)
              </th>
            </tr>

            ${sellingPoints.map(sp => `<tr>
    <td style="text-align: left">${sp.name}</td>
    <td style="text-align: right">${sp.price}</td>
    
  </tr>
  <tr style="text-align: left"><ul>${sp.name === "Flexible" ?selectedCheckboxes.map((item) => `<li>${item}</li>`) : ""}</ul></tr>`).join('')}

            <tr>
              <td colspan="2" style="text-align: right; padding-top: 10px">
                Підсумок: $${selligPointsPriceSum}
              </td>
            </tr>
          </table>

          ${optionalPoints.filter((opt) => opt.active).length > 0
    ? `
    <table cellpadding="10" cellspacing="0" width="100%">
      <tr>
        <th
          style="text-align: left; background-color: #5F001B; color: #fff"
        >
          Назва опції
        </th>
        <th
          style="
                  text-align: right;
                  background-color: #5F001B;
                  color: #fff;
                "
        >
          Вартість (USD)
        </th>
      </tr>

      ${optionalPoints.map(op =>
      `<tr>
          <td style="text-align: left">${op.name}</td>
          <td style="text-align: right">${op.price}</td>
        </tr>`
    ).join('')}

      <tr>
        <td colspan="2" style="text-align: right; padding-top: 10px">
          Підсумок: $${activeOptionsPriceSum}
        </td>
      </tr>
    </table>`
    : ''}
    
    ${isDiscount ?
    `<p style="text-align: right; font-weight: 600;">
      Вартість після знижки (-${selligPointsPriceSum +
    activeOptionsPriceSum - totalSum}): ${totalSum}
    </p>`
    : `<p style="text-align: right; font-weight: 600;">
      Загальна вартість: ${totalSum}
    </p>`}
    
        </td >
      </tr >
    </table >

    <table
      cellpadding="0"
      cellspacing="0"
      width="100%"
      style="max-width: 600px; margin: 0 auto"
    >
      <tr>
        <td style="padding: 20px">
          <p style="color: #262626">
            1. При купівлі одразу трьох додаткових опцій надається знижка -50$
          </p>
          <p style="color: #262626">
            2. При купівлі одразу двох пакетів надається знижка -50$
          </p>
          <p style="color: #262626">
            3. При купівлі одразу трьох пакетів надається знижка -150$
          </p>
          <p style="color: #; font-weight: 600">
            * Знижки не поєднуються.
          </p>

          <p style="color: #262626">
            Очікуйте, зовсім скоро з вами зв'яжуться організатори проєкту для
            уточнення деталей та підтвердження участі. У випадку запитань
            звертайтесь за контактами нижче.
          </p>
          <p
            style="
              text-align: right;
              margin-top: 20px;
              color: #5F001B;
              font-weight: 600;
            "
          >
            До зустрічі на BEST CTF!
          </p>
        </td>
      </tr>
    </table>

    <table
      cellpadding="0"
      cellspacing="0"
      width="100%"
      style="max-width: 600px; margin: 0 auto"
    >
      <tr>
        <td style="padding: 20px">
          <p style="color: #262626; font-weight: bold">Анна Гащук,</p>
          <p style="color: #262626">відповідальна за корпоративні зв’язки</p>

          <p>
            <a style="color: #262626" href="tel:+380960431261">
              + 380 96 04 31 261
            </a>
          </p>
          <p>
            <a style="color: #262626" href="mailto:anna.hashchuk@best-eu.org">
              anna.hashchuk@best-eu.org
            </a>
          </p>
        </td>
        <td style="padding: 20px">
          <p style="color: #262626; font-weight: bold">Вікторія Шевченко,</p>
          <p style="color: #262626">відповідальний за корпоративні зв’язки</p>
          <p>
            <a style="color: #262626" href="tel:+300678640104">
              +380 67 86 40 104
            </a>
          </p>
          <p>
            <a style="color: #262626" href="mailto:vika.shevchenko@best-eu.org">
              vika.shevchenko@best-eu.org
            </a>
          </p>
        </td>
      </tr>
    </table>
`