"use client";

import ContentMenu from "./content-menu";

import React, { useState } from "react";

import {
  Building2,
  ChevronDown,
  Factory,
  GraduationCap,
  Headphones,
  Home,
  Info,
  LifeBuoy,
  Newspaper,
  Settings,
  Smile,
  Sparkles,
  UserCircle2,
  UserPlus,
} from "lucide-react";

interface MenuItem {
  title: string;
  menu: string;
  options: { label: string; emoji: React.ReactElement; href: string }[];
}

const items: MenuItem[] = [
  {
    title: "Products",
    menu: "use-cases",
    options: [
      {
        label: "Learning",
        emoji: <UserPlus className="text-orange-500" />,
        href: "/learning",
      },
      {
        label: "Enterprenuer",
        emoji: <Factory className="text-blue-500" />,
        href: "/enterprenuer",
      },

      {
        label: "Education",
        emoji: <GraduationCap className="text-green-500" />,
        href: "/education",
      },
      {
        label: "Nurman AI",
        emoji: <Sparkles className="text-indigo-500" />,
        href: "/nurman-ai",
      },
      {
        label: "Product Management",
        emoji: <Settings className="text-gray-500" />,
        href: "/product",
      },
    ],
  },

  {
    title: "Business",
    menu: "for-business",
    options: [
      {
        label: "Customers",
        emoji: <Smile className="text-indigo-500" />,
        href: "/",
      },
    ],
  },
  {
    title: "Resources",
    menu: "resources",
    options: [
      {
        label: "Blog",
        emoji: <Newspaper className="text-orange-500" />,
        href: "https://www.linkedin.com/company/nurman-tech",
      },
      {
        label: "Help & Support",
        emoji: <LifeBuoy className="text-green-500" />,
        href: "/",
      },
     
    ],
  },
  {
    title: "Company",
    menu: "company",
    options: [
      {
        label: "About Us",
        emoji: <Info className="text-red-500" />,
        href: "/about-us",
      },
      {
        label: "Careers",
        emoji: <UserCircle2 className="text-green-500" />,
        href: "/careers",
      },
    ],
  },
];

export function NavigationMenuBar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleMouseEnter = (menu: string) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const renderMenu = (item: MenuItem) => {
    const { title, menu, options } = item;

    return (
      <div
        className="
         flex
         items-center
         relative
         "
        onMouseEnter={() => handleMouseEnter(menu)}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex items-center">
          <div className="w-24">{title}</div>
          <div>
            <ChevronDown className="relative top-[1px] h-3 w-3" />
          </div>
          <div className="mt-20">
            {activeMenu === menu && (
              <ContentMenu
                options={options.map((option, index) => ({
                  ...option,
                  href: option.href,
                }))}
              />
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className="
        hidden
        text-md
        font-light
        space-x-4
        w-full 
        items-center
        xl:flex
        h-24
        
        "
    >
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <div className="cursor-pointer hidden xl:block">
            {renderMenu(item)}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
