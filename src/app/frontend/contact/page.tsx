import { Metadata } from "next";
import FrontendLayouts from "@/components/Layouts/Frontendlayout";
// import Slider from "@/components/Frontend/Slider";
// import Search from "@/components/Frontend/Fillter";
// import AboutSection from "@/components/Frontend/AboutSection";
// import Recentlymarried from "@/components/Frontend/Recentlymarried";
// import Testimonial from "@/components/Frontend/Testimonial";
import Innerbanner from "@/components/Frontend/InnerPageBanner/contact-innerbanner";
import Contact from "@/components/Frontend/Contact/contact-info";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export const metadata: Metadata = {
  title:"Contact - TMSM",
  description: "",
};

export default function Home() {
  return (
    <>
     <FrontendLayouts>
      <Innerbanner/>
      <Contact/>
     </FrontendLayouts>
    </>
  );
}