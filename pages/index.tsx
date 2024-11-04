import Image from "next/image";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import About from "@/components/About";
import Brewery from "@/components/Brewery";
import Mosaic from "@/components/Mosaic";
import Beers from "@/components/Beers";
import Pub from "@/components/Pub";
import Testimonials from "@/components/Testimonials";
import Delivery from "@/components/Delivery";
import Awards from "@/components/Awards";
import Maps from "@/components/Maps";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Cervejaria from "./Cervejaria";

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

export default function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <About />
      <Brewery />
      <Mosaic />
      <Beers />
      <Testimonials />
      <Pub />
      <Delivery />
      <Awards />
      <Contact />
      <Maps />
      <Footer />

      <Cervejaria />
    </>
  );
}
