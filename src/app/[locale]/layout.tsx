import "./globals.css";
import type { Metadata } from "next";

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

export const metadata: Metadata = {
  title: "Partnership CTF",
  description: "Best Capture The Flag partnership offer",
};
import { ThemeProvider } from "@/components/ColorTheme/theme-provider";

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

      <body>
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>

    </html>

  );


}
