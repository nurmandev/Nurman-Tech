"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";

import { X, AlignJustify } from "lucide-react";
import Link from "next/link";
import DropdownMenu from "./drop-down-menu";

const ActionButtons = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  return (
    <div
      className="
    flex
    items-center
    md:justify-end
    md:space-x-6
    sm:px-10
    
    "
    >
      {isDropdownVisible && (
        <div
          onClick={toggleDropdown}
          className="
             bg-[#565add]
             p-3
             rounded-full
             xl:hidden
             "
        >
          <X className="h-6 w-6 text-[#eff0ff] items-center justify-center rounded-full" />
        </div>
      )}
      {!isDropdownVisible && (
        <div
          onClick={toggleDropdown}
          className="bg-[#eff0ff] p-3 rounded-full xl:hidden"
        >
          <AlignJustify className="h-6 w-6 text-[#565add] items-center justify-center rounded-full" />
        </div>
      )}

      {isDropdownVisible && <DropdownMenu onClose={closeDropdown} />}
    </div>
  );
};

export default ActionButtons;
