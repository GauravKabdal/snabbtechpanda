import WelcomeBg from "../assets/welcome_bg.png";
import Union from "../assets/Union.svg";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="flex flex-col  md:flex-row h-screen">
        <img
          src={WelcomeBg}
          alt="Welcome Background"
          className="object-cover flex-1 md:w-8/12"
        />

        <div className="flex flex-col items-center text-sm bg-stone-100 md:w-4/12 md:overflow-auto lg:w-96 ">
          <div className="mt-8 flex gap-4 border-b border-neutral-200">
            <Link to={"/sign-up"}>
              <span className="text-stone-900 text-base leading-tight border-b-slate-950 border-b-4">
                Join PANDA
              </span>
            </Link>
            <span>or</span>
            <Link to={"/sign-in"}>
              <span className="text-stone-900 text-base leading-tight">
                Sign in
              </span>
            </Link>
          </div>
          <div className=" flex flex-col items-center rounded-tl-[250px]  rounded-tr-[250px] border border-neutral-200  mt-5 mx-4">
            <img src={Union} alt="" className="mt-16" />
            <p className="font-medium text-3xl mt-10 pl-10">
              Create your free account
            </p>
            <p className="text-xl mt-5 text-stone-900">
              Takes less than{" "}
              <span className=" text-xl font-medium font-['Jost'] leading-tight">
                5 minutes...
              </span>
            </p>
            <input
              type="text"
              placeholder="Enter email"
              className="mt-5 p-3 border-b border-neutral-200 focus:border-b outline-none bg-stone-100 text-yellow-500"
            />
            <p className="text-gray-400 text-[13px] font-normal">
              This email already exists .{" "}
              <Link to={"/sign-in"} className="underline">
                Sign in.
              </Link>
            </p>
            <input
              type="password"
              className="mt-5 p-3 border-b border-neutral-200 focus:border-b outline-none bg-stone-100"
              placeholder="Enter Password"
            />
            <input
              type="password"
              placeholder="Confirm password"
              className="mt-5 mb-5 p-3 border-b border-neutral-200 focus:border-b outline-none bg-stone-100"
            />
          </div>
          <div className="flex flex-col">
            <span className="mt-7">
              <input type="checkbox" name="imExpert" id="imExpert" />
              <label htmlFor="imExpert"> Im an Expert</label>
            </span>
            <span className="mt-7">
              <input type="checkbox" name="orgAfrica" id="orgAfrica" />
              <label htmlFor="orgAfrica"> Im an organization in Africa</label>
            </span>
          </div>
          <button
            className="border border-stone-900 px-12 py-3 rounded-full mt-7 mb-12 text-stone-900 text-[15px] font-normal font-['BIZ
UDPGothic']"
          >
            <Link to={"/sign-in"}>Join PANDA</Link>
          </button>
          <p className="mb-12 mx-6">
            By clicking on "Join PANDA", you agree to our{" "}
            <a href="" className="underline">
              terms of use
            </a>{" "}
            and{" "}
            <a href="" className="underline">
              privacy policy
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
