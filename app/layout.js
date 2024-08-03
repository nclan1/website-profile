import localFont from 'next/font/local';
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';

const myFont = localFont({
  src: "../assets/fonts/GeneralSans-Variable.ttf",
  display: "swap",
})


export const metadata = {
  title: "nolan ngim",
  description: "nolan's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
