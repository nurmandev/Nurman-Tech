import Navbar from "@/components/ui/navbar/navbar";
import FirstSection from "./_components/first-section";
import Sliders from "./_components/slider/sliders";
import ThirdSection from "./_components/third-section";
import FourthSection from "./_components/fourth-section";
import FifthSection from "./_components/fifth-section";
import EighthSection from "./_components/eighth-section";
import NinthSection from "./_components/ninth-section";
import TenthSection from "./_components/tenth-section";
import BottomCard from "@/components/ui/bottom-card";
import BottomSection from "@/components/ui/bottom-section";
import Footer from "@/components/ui/footer";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <FirstSection />
      <Sliders />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <EighthSection />
      <NinthSection />
      <TenthSection />
      <BottomCard />
      <BottomSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
