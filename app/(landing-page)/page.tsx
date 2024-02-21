import Navbar from "@/components/ui/navbar/navbar";
import ThirdSection from "./_components/third-section";
import FourthSection from "./_components/fourth-section";
import FifthSection from "./_components/fifth-section";
import EighthSection from "./_components/eighth-section";
import NinthSection from "./_components/ninth-section";
import BottomCard from "@/components/ui/bottom-card";
import BottomSection from "@/components/ui/bottom-section";
import Footer from "@/components/ui/footer";
import Home from "./_components/home";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <EighthSection />
      <NinthSection />
      <BottomCard />
      <BottomSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
