import React from "react";
import Link from "next/link";
import "../_components/style.css";
import Image from "next/image";

const SecondSection: React.FC = () => {
  return (
    <div className="orbit ">
      <div className="center-image ">
        <Image src="/logo/nur-man-2.png" width={100} height={100} alt="" />
        <Image src="/logo/nur-man-2.png" width={100} height={100} alt="" />
      </div>
      <ul>
        <li>
          <div>
            <Image
              src="/assets/analytics.svg"
              width={100}
              height={100}
              className="mx-auto"
              alt=""
            />
          </div>
          <p>Analytics & Reporting</p>
        </li>
        <li>
          <div>
            <Image
              src="/assets/calendar.svg"
              className="mx-auto"
              alt=""
              width={100}
              height={100}
            />
          </div>
          <p>Time & Attendance</p>
        </li>
        <li>
          <div>
            <Image
              src="/assets/person.svg"
              className="mx-auto"
              alt=""
              width={100}
              height={100}
            />
          </div>
          <p>Onboarding</p>
        </li>
        <li>
          <div>
            <Image
              src="/assets/finger-print.svg"
              className="mx-auto"
              alt=""
              width={100}
              height={100}
            />
          </div>
          <p>HR Information System</p>
        </li>
        <li>
          <div>
            <Image
              src="/assets/coconut.svg"
              className="mx-auto"
              alt=""
              width={100}
              height={100}
            />
          </div>
          <p>Leaves & Holidays</p>
        </li>
        <li>
          <div>
            <Image
              src="/assets/logout.svg"
              className="mx-auto"
              alt=""
              width={100}
              height={100}
            />
          </div>
          <p>Exit & Off-boarding</p>
        </li>
        <li>
          <div>
            <Image
              src="/assets/plane-1.svg"
              className="mx-auto"
              alt=""
              width={100}
              height={100}
            />
          </div>
          <p>Travel & Requisitions</p>
        </li>
        <li>
          <div>
            <Image
              src="/assets/law.svg"
              className="mx-auto"
              alt=""
              width={100}
              height={100}
            />
          </div>
          <p>Disciplinary</p>
        </li>
      </ul>
    </div>
  );
};

export default SecondSection;
