"use client";

import * as Accordion from "@radix-ui/react-accordion";
// import Plus from "../assets/Plus.svg";
import Image from "next/image";

const items = [
  {
    question: "What services are we offer?",
    answer:
      "Nurman Innovation specializes in product development, offering services such as product design, design strategy, web design, user experience (UX), user interface (UI), and design optimization.",
  },
  {
    question: "How are we approach product development?",
    answer:
      "Our approach is collaborative and results-driven. We work closely with clients, conduct in-depth research, focus on human-centered design, and iterate through prototyping to ensure optimal results.",
  },
  {
    question:
      "Does Nurman Innovation provide ongoing support after the initial project is completed?",
    answer:
      "Yes, we offer ongoing support and are dedicated to the success of our clients. Whether it's refining designs, addressing emerging challenges, or scaling your project, we're here to assist you.",
  },
  {
    question: "Why is user-centric design important?",
    answer:
      "User-centric design ensures that products meet the needs and expectations of users, leading to a positive and memorable user experience. It enhances usability, satisfaction, and overall product success.",
  },

  {
    question: "How can I get started with Nurman Innovation's services?",
    answer:
      "Getting started is easy. Simply reach out to us through our contact page, and we'll schedule a consultation to discuss your project, goals, and how we can best assist you in achieving success.",
  },
  {
    question:
      "Can Nurman Innovation work with startups as well as established businesses?",
    answer:
      "Yes, our services are tailored to meet the needs of both startups and established businesses. We adapt our approach to match the unique challenges and goals of each client.",
  },
  {
    question: "How does Nurman Innovation ensure continuous improvement?",
    answer:
      "We are committed to excellence and continually assess and enhance our solutions based on user feedback, evolving technologies, and industry best practices, ensuring sustained success for our clients.",
  },
  {
    question: "What makes Nurman Innovation's strategies unique?",
    answer:
      "Our strategies are distinctive due to their user-centric focus, competitive positioning, holistic lifecycle planning, integration of innovation, and agile adaptability, providing a comprehensive and forward-thinking approach.",
  },
];

export function Faq() {
  return (
    <div className="flex flex-col w-full py-[48px] lg:py-[60px] lg:flex-row lg:gap-x-6">
      <div className="lg:w-1/3 lg:py-[32px] lg:pr-[56px]">
        <h3 className="text-[#EB2891] text-[14px] font-medium lg:text-base">
          Frequently Asked Questions
        </h3>
        <h1 className="py-4 text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
          Let&apos;s clarify some of your questions
        </h1>
        <p className="text-[#36485C] pb-[24px]">
          At Nurman Innovation, we&apos;re here to answer your questions and
          guide you through a seamless and successful collaboration.
        </p>
      </div>

      <div className="lg:w-2/3">
        <Accordion.Root
          type="single"
          defaultValue="item-1"
          collapsible
          className="flex flex-col gap-y-4"
        >
          {items.map((item, index) => (
            <div key={index}>
              <Accordion.Item
                value={`item-${index + 1}`}
                className="bg-[#E3F1FF] p-[16px] rounded-[8px]"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center justify-between">
                    <p className="text-left font-medium text-[#172026] lg:text-[18px]">
                      {item.question}
                    </p>
                    <span>
                      {/* <Image
                        src={Plus}
                        alt="See more"
                        className="h-10 w-10 lg:w-6 lg:h-6"
                      /> */}
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>

                <Accordion.Content>
                  <p className="pt-2 text-[#36485C]">{item.answer}</p>
                </Accordion.Content>
              </Accordion.Item>
            </div>
          ))}
        </Accordion.Root>
      </div>
    </div>
  );
}
