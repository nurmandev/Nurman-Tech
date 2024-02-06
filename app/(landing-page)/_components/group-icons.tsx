import Link from "next/link";
import React from "react";
import { Factory, GraduationCap, Settings, Sparkles } from "lucide-react";

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

    <CustomLink link="/nurman-ai" icon={Sparkles} name="AI website Generate" />
    <CustomLink link="/product" icon={Settings} name="Product Management" />
    <CustomLink
      link="/enterprenuer"
      icon={Factory}
      name="Enterprenuer Plantform"
    />
    <CustomLink
      link="/education"
      icon={GraduationCap}
      name="All in One Educational"
    />
  </div>
);

export default GroupIconComponent;
