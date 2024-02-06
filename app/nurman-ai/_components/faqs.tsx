import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = () => {
  return (
    <div className="flex-col flex items-center justify-center pt-40">
      <div className="text-4xl font-medium pb-10">FAQS</div>
      <Accordion
        className="md:w-2/3 w-full px-10 md:px-0"
        type="single"
        collapsible
      >
        <AccordionItem
          className="my-6 bg-[#eff0ff] py-10 md:py-16 rounded-[40px] text-[#3d2e7c]"
          value="item-1"
        >
          <AccordionTrigger className="font-medium">
            How does the website generation process work?
          </AccordionTrigger>
          <AccordionContent>
            Our platform utilizes advanced AI algorithms to analyze your
            preferences and learning style. With a simple input of your
            interests and topics, it generates a customized learning website
            instantly.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          className="my-6 bg-[#eff0ff] py-10 md:py-16 rounded-[40px] text-[#3d2e7c]"
          value="item-2"
        >
          <AccordionTrigger className="font-medium">
            Can I manage and customize the content on the generated website?
          </AccordionTrigger>
          <AccordionContent>
            Absolutely! You have complete control over the content. Easily add,
            edit, or remove materials, ensuring your learning space reflects
            your preferences.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          className="my-6 bg-[#eff0ff] py-10 md:py-16 rounded-[40px] text-[#3d2e7c]"
          value="item-3"
        >
          <AccordionTrigger className="font-medium">
            How secure is my data on this platform?
          </AccordionTrigger>
          <AccordionContent>
            Your data&apos;s security is our top priority. We employ
            cutting-edge encryption methods to safeguard all information stored
            on our platform, ensuring the highest levels of protection.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          className="my-6 bg-[#eff0ff] py-10 md:py-16 rounded-[40px] text-[#3d2e7c]"
          value="item-4"
        >
          <AccordionTrigger className="font-medium">
            What kind of content can I expect on the generated learning
            websites?
          </AccordionTrigger>
          <AccordionContent>
            Our platform offers a diverse array of content types, including
            articles, videos, quizzes, and more. The content is curated based on
            your preferences and interests.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          className="my-6 bg-[#eff0ff] py-10 md:py-16 rounded-[40px] text-[#3d2e7c]"
          value="item-5"
        >
          <AccordionTrigger className="font-medium">
            Is the platform user-friendly for individuals without technical
            expertise?
          </AccordionTrigger>
          <AccordionContent>
            Absolutely! Our platform is designed for ease of use. You don&apos;t
            need technical skills to create, manage, and personalize your
            learning website.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          className="my-6 bg-[#eff0ff] py-10 md:py-16 rounded-[40px] text-[#3d2e7c]"
          value="item-6"
        >
          <AccordionTrigger className="font-medium">
            Can I integrate my own content into the generated website?
          </AccordionTrigger>
          <AccordionContent>
            Yes, you can seamlessly incorporate your own materials, ensuring a
            completely customized learning experience that aligns with your
            needs and preferences.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          className="my-6 bg-[#eff0ff] py-10 md:py-16 rounded-[40px] text-[#3d2e7c]"
          value="item-7"
        >
          <AccordionTrigger className="font-medium">
            What happens if I need help or encounter issues while using the
            platform?
          </AccordionTrigger>
          <AccordionContent>
            We have a dedicated support team ready to assist you. Reach out to
            us through our contact channels, and we&apos;ll be more than happy
            to help resolve any queries or concerns.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          className="my-6 bg-[#eff0ff] py-10 md:py-16 rounded-[40px] text-[#3d2e7c]"
          value="item-8"
        >
          <AccordionTrigger className="font-medium">
            Are there different subscription plans available?
          </AccordionTrigger>
          <AccordionContent>
            Yes, we offer various subscription plans tailored to different user
            needs. Choose the plan that best suits your learning goals and
            content management requirements.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          className="my-6 bg-[#eff0ff] py-10 md:py-16 rounded-[40px] text-[#3d2e7c]"
          value="item-9"
        >
          <AccordionTrigger className="font-medium">
            Is the platform accessible on mobile devices?
          </AccordionTrigger>
          <AccordionContent>
            Absolutely! Access your personalized learning space from any device
            with internet access, ensuring you can learn wherever and whenever
            you want.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          className="my-6 bg-[#eff0ff] py-10 md:py-16 rounded-[40px] text-[#3d2e7c]"
          value="item-8"
        >
          <AccordionTrigger className="font-medium">
            Can I share my generated learning website with others?
          </AccordionTrigger>
          <AccordionContent>
            Yes, you have the option to share your learning website with others,
            enabling collaborative learning experiences if desired.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQS;
