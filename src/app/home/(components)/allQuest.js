import React from "react";
import { MdPedalBike } from "react-icons/md";
import { FaTrash, FaRecycle } from "react-icons/fa";
import Link from "next/link";
const AllQuest = () => {
    const steps = 5;
    const divElements = [];
  
    for (let i = 0; i < steps; i++) {
      divElements.push(
        <div key={i} className="h-6 w-6 mx-1 rounded-full border-2"></div>
      );
    }
    return (
      <div className="grid sm:grid-cols-4 grid-cols-1 sm:gap-20 gap-4 mt-20">
        <div className="bg-[#D9D9D9] text-[#537749] flex flex-col justify-center items-center py-6 px-12">
          <h1>Bike to work</h1>
          <MdPedalBike size={100} className="my-6" color="black" />
         <Link href={"/home"}>
          <div className=" px-4 py-1 custom-border m-auto flex justify-center items-center text-lg font-bold hover:cursor-pointer">
            start quest
          </div>
        </Link>
        </div>
  
        <div className="bg-[#D9D9D9] text-[#537749] flex flex-col justify-center items-center py-6 px-12">
        
          <h1>Bike to work</h1>
          <FaTrash size={100} className="my-6" color="black" />
         <Link href={"/home"}>
          <div className="py-1 px-4 custom-border m-auto flex justify-center items-center text-lg font-bold hover:cursor-pointer">
            start quest
          </div>
        </Link>
        </div>
  
        <div className="bg-[#D9D9D9] text-[#537749] flex flex-col justify-center items-center py-6 px-12">
          <h1>Bike to work</h1>
          <FaRecycle size={100} className="my-6" color="black" />
         <Link href={"/home"}>
          <div className="py-1 px-4 custom-border m-auto flex justify-center items-center text-lg font-bold hover:cursor-pointer">
            start quest
          </div>
        </Link>
        </div>
  
        <div className="bg-[#D9D9D9] text-[#537749] flex flex-col justify-center items-center py-6 px-12">
          <h1>Bike to work</h1>
          <MdPedalBike size={100} className="my-6" color="black" />
         <Link href={"/home"}>
          <div className="py-1 px-4 custom-border m-auto flex justify-center items-center text-lg font-bold hover:cursor-pointer">
            start quest
          </div>
        </Link>
        </div>
  
        <div className="bg-[#D9D9D9] text-[#537749] flex flex-col justify-center items-center py-6 px-12">
          <h1>Bike to work</h1>
          <MdPedalBike size={100} className="my-6" color="black" />
         <Link href={"/home"}>
          <div className="py-1 px-4 custom-border m-auto flex justify-center items-center text-lg font-bold hover:cursor-pointer">
            start quest
          </div>
        </Link>
        </div>
  
        <div className="bg-[#D9D9D9] text-[#537749] flex flex-col justify-center items-center py-6 px-12">
          <h1>Bike to work</h1>
          <MdPedalBike size={100} className="my-6" color="black" />
         <Link href={"/home"}>
          <div className="py-1 px-4 custom-border m-auto flex justify-center items-center text-lg font-bold hover:cursor-pointer">
            start quest
          </div>
        </Link>
        </div>
  
        <div className="bg-[#D9D9D9] text-[#537749] flex flex-col justify-center items-center py-6 px-12">
          <h1>Bike to work</h1>
          <MdPedalBike size={100} className="my-6" color="black" />
         <Link href={"/home"}>
          <div className="py-1 px-4 custom-border m-auto flex justify-center items-center text-lg font-bold hover:cursor-pointer">
            start quest
          </div>
        </Link>
        </div>
      </div>
    );
  };

export default AllQuest