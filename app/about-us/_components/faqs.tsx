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
            What does Nurman Innovate do?
          </AccordionTrigger>
          <AccordionContent>
            we specialize in developing cutting-edge technology solutions to
            address a wide range of challenges and opportunities.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          className="my-6 bg-[#eff0ff] py-10 md:py-16 rounded-[40px] text-[#3d2e7c]"
          value="item-2"
        >
          <AccordionTrigger className="font-medium">
            What are we serve?
          </AccordionTrigger>
          <AccordionContent>
            We serves a diverse range of industries, including but not limited
            to: Technology, Healthcare, Finance, Energy, Education,
            Manufacturing, Transportation, Retail
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          className="my-6 bg-[#eff0ff] py-10 md:py-16 rounded-[40px] text-[#3d2e7c]"
          value="item-3"
        >
          <AccordionTrigger className="font-medium">
            How we approach innovation?
          </AccordionTrigger>
          <AccordionContent>
            We foster a culture of creativity, curiosity, and collaboration,
            empowering our team to explore new ideas, experiment with emerging
            technologies, and push the boundaries of what&apos;s possible.
            Through continuous learning and adaptation, we stay ahead of the
            curve and drive meaningful innovation.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          className="my-6 bg-[#eff0ff] py-10 md:py-16 rounded-[40px] text-[#3d2e7c]"
          value="item-4"
        >
          <AccordionTrigger className="font-medium">
            What sets Nurman Innovative apart from other technology companies?
          </AccordionTrigger>
          <AccordionContent>
            We take data privacy and security extremely seriously. We adhere to
            the highest standards of data protection and comply with all
            relevant regulations and best practices. We employ robust
            encryption, access controls, and monitoring mechanisms to safeguard
            our client&apos;s data and ensure confidentiality, integrity, and
            availability at all times.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          className="my-6 bg-[#eff0ff] py-10 md:py-16 rounded-[40px] text-[#3d2e7c]"
          value="item-5"
        >
          <AccordionTrigger className="font-medium">
            How can I get in touch for more information?
          </AccordionTrigger>
          <AccordionContent>
            For inquiries, partnership opportunities, or general questions,
            <Link href="/contact">Contact us Here</Link>
            Our team is here to assist you and provide the information you need
            to make informed decisions about working with.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          className="my-6 bg-[#eff0ff] py-10 md:py-16 rounded-[40px] text-[#3d2e7c]"
          value="item-6"
        >
          <AccordionTrigger className="font-medium">
            What other Innovative products does Nurman has ?
          </AccordionTrigger>
          <AccordionContent>
            We&apos;ve curated a multifaceted platform that encapsulates four
            distinct yet interwoven domains, catering to the diverse needs of
            today&apos;s dynamic learners and aspiring entrepreneurs.
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
