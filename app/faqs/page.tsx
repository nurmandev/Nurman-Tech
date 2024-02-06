import Navbar from "@/components/ui/navbar/navbar";
import BottomSection from "@/components/ui/bottom-section";
import Footer from "@/components/ui/footer";
import { Faq } from "./_components/Faq";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="px-[20px] lg:container lg:px-20 mx-auto">
        <Faq />
      </div>
      <BottomSection />
      <Footer />
    </>
  );
}
