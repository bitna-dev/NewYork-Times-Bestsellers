import type { Metadata } from "next";
import "../styles/global.css";

import { Luckiest_Guy } from "next/font/google";
import Navigation from "@components/Navigation";

const luckiest_guy = Luckiest_Guy({
  variable: "--font-luckiest",
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | NewYork Times Bestsellers",
    default: "NewYork Times Bestsellers",
  },
  description: "Nomad 리액트 10주 스터디 Next.js 졸업과제",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={luckiest_guy.variable}>
      <body className={luckiest_guy.variable}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
