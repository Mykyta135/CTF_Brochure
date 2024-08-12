import "./globals.css";
import type { Metadata } from "next";

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

export const metadata: Metadata = {
  title: "Partnership CTF",
  description: "Best Capture The Flag partnership offer",
};

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode,
  params: { locale: string };
}) {
  const messages = await getMessages();
  
  return (
    <html lang={locale}>

      <body className="bg-[#141414]">
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
      </body>

    </html>

  );


}
