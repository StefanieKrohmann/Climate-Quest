import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
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
        <div className="h-14 w-[300px] custom-border m-auto flex justify-center items-center text-2xl font-bold hover:cursor-pointer">
          Login
        </div>
      </div>
    </main>
  );
};

export default Login;
