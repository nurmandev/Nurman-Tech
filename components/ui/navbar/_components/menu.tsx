"use client";

import ContentMenu from "./content-menu";

import React, { useState } from "react";

import {
  ChevronDown,
  Info,
  Newspaper,
  Settings,
  UserCircle2,
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
        label: "Product Management",
        emoji: <Settings className="text-gray-500" />,
        href: "/product",
      },
    ],
  },

  {
    title: "Careers",
    menu: "Careers",
    options: [
      {
        label: "Careers",
        emoji: <UserCircle2 className="text-green-500" />,
        href: "/careers",
      },
    ],
  },
  {
    title: "Blog",
    menu: "Blog",
    options: [
      {
        label: "Blog",
        emoji: <Newspaper className="text-orange-500" />,
        href: "https://www.linkedin.com/company/nurman-tech",
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
