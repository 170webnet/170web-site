import { ToastContainer } from "react-toastify";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
// Tailwind PRIMEIRO: utilities unlayered carregadas antes do CSS do template,
// para que as classes Tailwind/shadcn vençam o reset `*{margin:0;padding:0}` do
// template por especificidade, enquanto as classes de spacing do template
// (pb-75 etc.) vençam o Tailwind de mesmo nome por ordem de fonte.
import "./tailwind.css";
// Swiper: só o CSS dos módulos usados (Navigation, Pagination, FreeMode, Grid)
// em vez do bundle completo. Autoplay/Controller/Mousewheel não têm CSS.
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/grid";
import "./globals.scss";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pixora || Creative Portfolio Nextjs Template",
  description: "A modern creative portfolio template built with Next.js.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
