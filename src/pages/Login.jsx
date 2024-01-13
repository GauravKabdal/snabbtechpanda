import WelcomeBg from "../assets/welcome_bg.png";
import Union from "../assets/Union.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [show, setShow] = useState("password");

  const handleShow = () => {
    setShow(show === "password" ? "text" : "password");
  };

  return (
    <>
      <div className="flex flex-col  md:flex-row h-screen">
        <img
          src={WelcomeBg}
          alt="Welcome Background"
          className="object-cover flex-1 md:w-8/12 "
        />

        <div className="flex flex-col items-center text-sm bg-stone-100 md:w-4/12 md:overflow-auto lg:w-96 ">
          <div className="mt-8 flex gap-4 border-b border-neutral-200">
            <Link to={"/sign-up"}>
              <span className="text-stone-900 text-base leading-tight ">
                Join PANDA
              </span>
            </Link>
            <span>or</span>
            <Link to={"/sign-in"}>
              <span className="text-stone-900 text-base leading-tight border-b-slate-950 border-b-4">
                Sign in
              </span>
            </Link>
          </div>
          <div className=" flex flex-col items-center rounded-tl-[250px]  rounded-tr-[250px] border border-neutral-200  mt-5 mx-4 p-5">
            <img src={Union} alt="" className="mt-16" />
            <p className="font-medium text-3xl mt-10">Sign in</p>

            <input
              type="email"
              placeholder="Enter email"
              className="mt-5 p-3 border-b border-neutral-200 focus:border-b outline-none bg-stone-100 text-yellow-500"
            />

            <p className="text-gray-400 text-[13px] font-normal pr-20">
              This email is invalid
            </p>
            <div className="flex items-center">
              <input
                type={show}
                className="mt-5 p-3 border-b border-neutral-200 focus:border-b outline-none bg-stone-100"
                placeholder="Enter Password"
              />
              <span onClick={handleShow} className="underline">
                show
              </span>
            </div>
            <p className="text-gray-400 text-[13px] font-normal">
              Wrong password , please try again.
            </p>
          </div>
          <div className="mt-7 pr-28 text-stone-900 text-base font-medium font-['Jost'] underline">
            <Link to={"/forgot-password"}>Forgot Password?</Link>
          </div>

          <button
            className="border border-stone-900 px-12 py-3 rounded-full mt-7 mb-12 text-stone-900 text-[15px] font-normal font-['BIZ
UDPGothic']"
          >
            <Link to={"/"}>Sign in</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
