import localFont from 'next/font/local';
import "./globals.css";

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
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
