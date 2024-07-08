import "./globals.css";
import type { Metadata } from "next";

import { inter } from "./fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Partnership Broshure",
  description: "Best Capture The Flag partnership offer",
};
import { ThemeProvider } from "@/components/ColorTheme/theme-provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-gradient-to-b from-[#101012] via-[#101012] via-45% to-[#1C1C20] ">
      <head>
      <link rel="icon" href="./icon.ico" sizes="any" />
      </head>
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />

          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
