import Link from "next/link";

import { Accordion, AccordionItem } from "@/components/ui/accordion";

import { Newspaper, Settings, Users, Briefcase } from "lucide-react";

interface DropDownMenuProps {
  onClose: () => void;
}

const DropdownMenu: React.FC<DropDownMenuProps> = ({ onClose }) => {
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div
      className="w-screen h-screen bg-white 
     px-4 items-center justify-center absolute top-20 right-0 xl:hidden"
    >
      <Accordion
        className="
            pl-2
            "
        type="single"
        collapsible
      >
        <AccordionItem className="my-6 border-b" value="item-1">
          <Link
            href={"/product"}
            className="flex pt-10"
            onClick={handleLinkClick}
          >
            <div>
              <Settings className="h-6 w-6 mr-4 text-grey-400" />
            </div>
            <div>Product Management</div>
          </Link>
        </AccordionItem>
        <AccordionItem className="my-6 border-b" value="item-2">
          <Link
            href={"https://www.linkedin.com/company/nurman-tech"}
            className="flex pt-10"
            onClick={handleLinkClick}
          >
            <div>
              <Newspaper className="h-6 w-6 mr-4 text-orange-400" />
            </div>
            <div>Blog</div>
          </Link>
        </AccordionItem>

        <AccordionItem className="my-6 border-b" value="item-3">
          <Link
            href={"/about-us"}
            className="flex pt-10"
            onClick={handleLinkClick}
          >
            <div>
              <Users className="h-6 w-6 mr-4 text-orange-400" />
            </div>
            <div>About Us</div>
          </Link>
        </AccordionItem>
        <AccordionItem className="my-6 border-b" value="item-4">
          <Link
            href={"/careers"}
            className="flex pt-10"
            onClick={handleLinkClick}
          >
            <div>
              <Briefcase className="h-6 w-6 mr-4 text-green-400" />
            </div>

            <div>Careers</div>
          </Link>
        </AccordionItem>
        <AccordionItem className="my-6 border-b" value="item-4">
          <Link
            href={"/contact"}
            className="
            flex
            flex-1
            items-center 
            justify-between
            text-xl
            px-6 
            py-4
            my-6
      
            "
          >
            Contact us
          </Link>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default DropdownMenu;
