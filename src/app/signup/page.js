import Link from "next/link";
import React from "react";

const Signup = () => {
  return (
    <>
      <div className="sm:text-6xl text-2xl font-bold">Climate quest</div>
      <div className="h-14 w-fit flex mt-20">
        <div className="h-14 flex justify-center items-center px-6 sm:text-3xl font-bold text-white bg-[#537749] border-2 border-black border-r-0">
          Username
        </div>
        <input className="h-14 sm:w-80 px-2 border-2 border-black focus:border-2 focus:rounded-none" />
      </div>
      <div className="h-14 w-fit flex mt-4">
        <div className=" h-14 flex justify-center items-center px-6 sm:text-3xl font-bold text-white bg-[#537749] border-2 border-black border-r-0">
          Password
        </div>
        <input className="h-14 sm:w-80 px-2 border-2 border-black focus:border-2 focus:rounded-none" />
      </div>
      <div className="sm:mt-20 mt-6 text-center">
        <Link href={"/home"}>
          <div className="h-14 w-[300px] custom-border m-auto flex justify-center items-center text-2xl font-bold hover:cursor-pointer">
            Register
          </div>
        </Link>
        <Link href={"/login"}>
          <div className="m-auto mt-6 underline text-xl font-bold hover:cursor-pointer">
            Already have an account?
          </div>
        </Link>
      </div>
    </>
  );
};

export default Signup;
