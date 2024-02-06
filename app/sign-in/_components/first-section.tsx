"use client";

import { useState, useContext } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-toastify";
import { GoogleCircleFilled, SyncOutlined } from "@ant-design/icons";

// import { Context } from "../../../context/index";

const FirstSection = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  // const { state, dispatch } = useContext(Context);
  // const router = useRouter();

  // console.log("State", state);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setLoading(true);
      const { data } = await axios.post(`/api/login`, {
        email,
        password,
      });
      console.log(data);
      toast.success("Login sucessful");
      // dispatch({
      //   type: "LOGIN",
      //   payload: data,
      // });

      // save to local storage
      window.localStorage.setItem("user", JSON.stringify(data));
      // redirect
      // router.push("/");
    } catch (error: any) {
      toast.error(error.response?.data?.message || "An error occurred");
      setLoading(false);
    }
  };
  return (
    <div className="flex items-center justify-center">
      <div className="px-10 w-full md:w-2/5">
        <div className="text-3xl md:text-4xl font-semibold justify-center flex">
          Sign in
        </div>

        <div className="py-10 space-y-2">
          <div className="border py-4 rounded-full justify-center flex items-center space-x-2">
            <GoogleCircleFilled className="object-cover w-6" />
            <div className="text-lg font-medium">Sign in with Google</div>
          </div>
        </div>

        <div className="flex items-center">
          <hr className="w-1/2 border-gray-300" />
          <div className="mx-4">OR</div>
          <hr className="w-1/2 border-gray-300" />
        </div>

        <div className="pt-6">
          <form onSubmit={handleSubmit}>
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
            <div className="text-md font-medium">password</div>
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
              onChange={(e) => setPassword(e.target.value)}
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
              <button disabled={!email || !password || loading}>
                {loading ? <SyncOutlined spin /> : "Continue"}
              </button>
            </div>
          </form>
          <div className="text-center text-sm mt-4">
            Not register yet?{"  "}
            <Link href={"/free"} className="text-[red]">
              Register instead
            </Link>
          </div>
        </div>

        <div className="text-center text-sm mt-4">
          By signing up, you ackowledge that you have read and agree to
          Nurman&apos;s Terms of Service and Privacy Policy.
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
