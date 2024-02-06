import Navbar from "@/components/ui/navbar/navbar";
import FirstSection from "./_components/first-section";
import SecondSection from "./_components/second-section";
import ThirdSection from "./_components/third-section";
import FeedbackSection from "./_components/feedback-section";
import Slider from "../learning/_components/slider";

import Testimonials from "../bird-ai/_components/testimonials";
import FourthSection from "./_components/fourth-section";
import FAQS from "./_components/faqs";
import PhoneSection from "./_components/phone-section";
import BottomSection from "@/components/ui/bottom-section";
import Footer from "@/components/ui/footer";

const ScreenRecorder = () => {
    return ( 
    <div>
        <Navbar />
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FeedbackSection />
        <Slider />
        <Testimonials />
        <FourthSection />
        <FAQS />
        <PhoneSection />
        <BottomSection />
        <Footer />
 
    </div> );
}
 
export default ScreenRecorder;