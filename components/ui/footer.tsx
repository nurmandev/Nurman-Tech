import {
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <section className="md:flex flex-col md:py-10 md:justify-between">
        <div className="p-10 space-y-10 md:space-y-0 md:text-center md:flex justify-between md:px-80 md:space-x-20">
          <div>©2024 Nurman Innovation. All rights reserved.</div>
          <div>
            <Globe className="h-16 w-16" />
          </div>
          <div>Terms and Conditions</div>

          <div className="flex items-center justify-center space-x-2">
            <div className="bg-black p-2 rounded-full">
              <Link href="https://web.facebook.com/proficientng/">
                <Facebook className="h-6 w-6 text-white" />
              </Link>
            </div>

            <div className="bg-black p-2 rounded-full">
              <Link href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fnurman_ng%3Figsh%3Ddjk5d2o2endneTY2%26fbclid%3DIwAR1f4pctlQmDpeZWVtPp2HXjDoCTMHeV5v0q8P_S7vDEpDr1G836a3-ci8E&h=AT00qRKR0TPsZLHkG8hPX3hykv-Fhqm7jWZ0OM6wVlIvV7vPXTZD_jT4-vAD6Tzlh4dj-dF2sFz1WekXkmXunY_iCsRuUFafIGa22AQ8eavtIyzJekCrgiuIaN-HdIEIwUyy3w">
                <Instagram className="h-6 w-6 text-white" />
              </Link>
            </div>

            <div className="bg-black p-2 rounded-full">
              <Link href="https://www.linkedin.com/company/nurman-tech">
                <Linkedin className="h-6 w-6 text-white" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
