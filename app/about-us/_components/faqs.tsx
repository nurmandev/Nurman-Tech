import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const FAQS = () => {
  return (
    <div className="flex-col flex items-center justify-center bg-[#2b1c50]  py-40">
      <div className="text-4xl md:text-7xl  font-medium pb-10 text-[#eff0ff]">
        Frequently Asked Questions (FAQs)
      </div>
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
            How can I access the resources on your platform?
          </AccordionTrigger>
          <AccordionContent>
            Accessing our resources is easy! Simply sign up for an account on
            our website to unlock a world of educational content, tech
            resources, AI-powered tools, and entrepreneurship courses.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          className="my-6 bg-[#eff0ff] py-10 md:py-16 rounded-[40px] text-[#3d2e7c]"
          value="item-2"
        >
          <AccordionTrigger className="font-medium">
            How can I access All-in-One Hub for Educational Resources?
          </AccordionTrigger>
          <AccordionContent>
            Accessing our resources is easy! Simply
            <Link href={"/call"}>book a call</Link>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          className="my-6 bg-[#eff0ff] py-10 md:py-16 rounded-[40px] text-[#3d2e7c]"
          value="item-3"
        >
          <AccordionTrigger className="font-medium">
            Are the entrepreneurship courses self-paced?
          </AccordionTrigger>
          <AccordionContent>
            Yes, our entrepreneurship courses are designed to be self-paced,
            allowing you to learn at your convenience and according to your
            schedule. You can access the course materials anytime, anywhere.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          className="my-6 bg-[#eff0ff] py-10 md:py-16 rounded-[40px] text-[#3d2e7c]"
          value="item-4"
        >
          <AccordionTrigger className="font-medium">
            How can I provide feedback or suggestions?
          </AccordionTrigger>
          <AccordionContent>
            We value your feedback! You can provide feedback directly through
            our platform. Look for the feedback section or reach out to our
            customer support team via email. Your insights help us improve and
            enhance our offerings.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          className="my-6 bg-[#eff0ff] py-10 md:py-16 rounded-[40px] text-[#3d2e7c]"
          value="item-5"
        >
          <AccordionTrigger className="font-medium">
            Can I suggest topics or resources to be included
          </AccordionTrigger>
          <AccordionContent>
            Absolutely! We encourage suggestions and ideas from our users. If
            you have specific topics or resources you&apos;d like to see on our
            platform, feel free to share your suggestions through our feedback
            channel or contact our support team.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          className="my-6 bg-[#eff0ff] py-10 md:py-16 rounded-[40px] text-[#3d2e7c]"
          value="item-6"
        >
          <AccordionTrigger className="font-medium">
            Is the AI-powered website creation tool user-friendly for beginners?
          </AccordionTrigger>
          <AccordionContent>
            Absolutely! Our AI tool is designed to be intuitive and
            user-friendly, catering to individuals with varying levels of
            technical expertise. With guided steps and easy-to-use features,
            creating tailored learning websites is simplified for everyone.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          className="my-6 bg-[#eff0ff] py-10 md:py-16 rounded-[40px] text-[#3d2e7c]"
          value="item-7"
        >
          <AccordionTrigger className="font-medium">
            Is there a community or forum for users to engage and interact with
            each other?
          </AccordionTrigger>
          <AccordionContent>
            Yes, we have a vibrant community where users can engage, share
            insights, and collaborate. Join our forums, discussion boards, or
            follow our social media channels to connect with like-minded
            individuals, ask questions, and participate in discussions.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQS;
