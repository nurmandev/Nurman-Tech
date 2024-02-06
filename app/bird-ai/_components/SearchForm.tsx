import Image from "next/image";
import React from "react";
import { Input } from "@/components/ui/input";

const SearchForm = () => {
  return (
    <form action="" className="flex-center mx-auto mt-10 w-full sm:-mt-10 bg-black-400">
      <label>
        <Image
          src="/magnifying-glass.svg"
          alt="search_icon"
          className="absolute left-8"
          width={32}
          height={32}
        />
        <Input 
        className="base-reguler h-fit border-0 bg-black-400 
        py-6 pl-20 pr-8 text-white-800 !ring-0 !ring-offset-0
        placeholder:text-white-800
        " type="text"
        placeholder="Search"
        />
      </label>
    </form>
  );
};

export default SearchForm;
