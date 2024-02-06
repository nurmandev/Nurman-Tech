import Link from "next/link";
import React from "react";
import { Blocks, Component, Lightbulb, Trello } from "lucide-react";

interface CustomLinkProps {
  link: string;
  icon: React.ComponentType<{ className?: string }>;
  name: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({ link, icon: Icon, name }) => (
  <Link
    href={link}
    passHref
    className="mt-4 sm:mt-8 flex items-center justify-between gap-4 bg-[#565add]
     text-white px-6 py-4 rounded"
  >
    <Icon className="hidden sm:block w-6 h-6 items-center justify-center" />
    <div className="text-lg">{name}</div>
  </Link>
);
const GroupIconComponent: React.FC = () => (
  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
    <CustomLink link="/product" icon={Component} name="Web Design" />
    <CustomLink link="/product" icon={Lightbulb} name="Strategic Branding" />
    <CustomLink link="/product" icon={Trello} name="SEO Expertise" />
    <CustomLink link="/product" icon={Blocks} name="App Development" />
  </div>
);

export default GroupIconComponent;
