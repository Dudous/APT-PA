//imports dos módulos
import localFont from "next/font/local";
import { Roboto } from "next/font/google"

//imports internos
import "./globals.css";
import { Menu } from "@/components/menu";
import medina from "@/assets/medina.png"

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
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased bg-[url(${medina})]`}
      >
        {children}
      </body>
    </html>
  );
}
