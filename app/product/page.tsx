import { Cta } from "./_components/Cta";
import { Faq } from "./_components/Faq";
import { Hero } from "./_components/Hero";
import { Pricing } from "./_components/Pricing";
import Navbar from "@/components/ui/navbar/navbar";
import BottomSection from "@/components/ui/bottom-section";
import Footer from "@/components/ui/footer";
import Services from "./_components/services";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="px-[20px] lg:container lg:px-20 mx-auto">
        <Services />
        <Faq />
        <Pricing />
        <Cta />
      </div>
      <BottomSection />
      <Footer />
    </>
  );
}
