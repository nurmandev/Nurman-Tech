"use client";

import { useState } from "react";
import Link from "next/link";

import { toast } from "react-toastify";
import { GoogleCircleFilled, SyncOutlined } from "@ant-design/icons";
import axios from "axios";

import Image from "next/image";

const Free = () => {
  const [name, setName] = useState("nnn");
  const [email, setEmail] = useState("nnn@gmail.com");
  const [password, setPassord] = useState("nnPades342");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setLoading(true);
      const { data } = await axios.post(`/api/register`, {
        name,
        email,
        password,
      });
      console.log(data);
      toast.success("Registration sucessful, please login");
    } catch (error: any) {
      toast.error(error.response?.data?.message || "An error occurred");
      setLoading(false);
    }
  };
  return (
    <div className="relative h-full w-full bg-white">
      <div
        className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)]
             [background-size:16px_16px]
              [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
      ></div>

      <Link className="absolute top-0 left-0 z-10" href={`/`}>
        <Image
          src="/logos/bird-logo.png"
          alt="logo"
          width={150}
          height={150}
          className="w-40 p-7"
        />
      </Link>

      <div className="flex flex-col justify-center items-center rounded-[40px]">
        <div className="flex items-center justify-center">
          <div className="p-10 bg-white border md:p-20 w-5/6 mx-auto rounded-[40px] z-10 mt-40">
            <div className="md:text-4xl text-3xl w-4/5 mx-auto font-medium justify-center flex text-center">
              Get Started in Seconds
            </div>
            <div className="py-10 space-y-4">
              <div className="border py-4 rounded-full justify-center flex items-center space-x-2">
                <GoogleCircleFilled className="object-cover w-6" />

                <div className="text-lg font-medium">Sign in with Google</div>
              </div>

              <div className="flex items-center">
                <hr className="w-1/2 border-gray-300" />
                <div className="mx-4">OR</div>
                <hr className="w-1/2 border-gray-300" />
              </div>

              <div className="pt-6">
                <form onSubmit={handleSubmit}>
                  <div className="text-md font-medium">Your Name</div>
                  <input
                    className="
                    w-full
                    border 
                    py-2 
                    mt-2 
                    px-4
                   
                    rounded-full 
                    justify-center
                    flex
                    items-center
                    space-x-2
                    text-md
                    "
                    type="text"
                    placeholder="jorn smith"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  ></input>
                  <div className="text-md font-medium">Work Email</div>
                  <input
                    className="
                    w-full
                    border 
                    py-2 
                    mt-2 
                    px-4
                   
                    rounded-full 
                    justify-center
                    flex
                    items-center
                    space-x-2
                    text-md
                    "
                    type="email"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  ></input>
                  <div className="text-md font-medium">Password</div>
                  <input
                    className="
                    w-full
                    border 
                    py-2 
                    mt-2 
                    px-4
                   
                    rounded-full 
                    justify-center
                    flex
                    items-center
                    space-x-2
                    text-md
                    "
                    type="text"
                    placeholder="Asdf123@"
                    value={password}
                    onChange={(e) => setPassord(e.target.value)}
                    required
                  ></input>

                  <div
                    className="
        p-4
        mt-4
        items-center
        justify-center
        flex
        bg-[#333]
        rounded-full
        text-[#ededed]
        font-semibold
        
        "
                  >
                    <button disabled={!name || !email || !password || loading}>
                      {loading ? <SyncOutlined spin /> : "Continue"}
                    </button>
                  </div>
                </form>
                <div className="text-center text-sm mt-4">
                  Already register?
                  <Link href={"/sign-in"} className="text-[red]">
                    login instead
                  </Link>
                </div>
              </div>

              <div className="text-center text-sm mt-4">
                By signing up, you ackowledge that you have read and agree to
                Nurman&apos;s Terms of Service and Privacy Policy.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Free;
