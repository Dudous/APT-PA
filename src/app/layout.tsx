//imports dos módulos
import localFont from "next/font/local";
import { Roboto } from "next/font/google"

//imports internos
import "@/app/globals.css";
import { Menu } from "@/components/menu";

const roboto = Roboto({
  weight: ["100", "400", "900"],
  style: "normal",
  variable: "--roboto",
  subsets: ["latin"]
})

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased`}
      >
        <Menu op1="home" op2="maths" op3="geral" op4="cards" op5="fetch nativo" op6="fetch axios" op7="server side"></Menu>
        {children}
      </body>
    </html>
  );
}
