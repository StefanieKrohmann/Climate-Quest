import React from "react";
import { MdPedalBike } from "react-icons/md";
import { FaCrown, FaTrash, FaRecycle } from "react-icons/fa";

const MyQuest = () => {
  const steps = 5;
  const divElements = [];

  for (let i = 0; i < steps; i++) {
    divElements.push(
      <div key={i} className={`h-6 w-6 mx-1 rounded-full border-2 ${i < 2 && "active"}`}></div>
    );
  }
  return (
    <div className="grid sm:grid-cols-4 grid-cols-1 gap-20 mt-20 ">
      <div className="bg-[#D9D9D9] text-[#537749] flex flex-col justify-center items-center py-6 px-8 relative">
        <FaCrown
          className="absolute right-[-45px] rotate-[30deg] top-[-60px] "
          size={100}
          color="#E5B162"
        />
        <h1>Bike to work</h1>
        <MdPedalBike size={100} className="my-6" color="black" />
        <div className="flex">{divElements}</div>
      </div>

      <div className="bg-[#D9D9D9] text-[#537749] flex flex-col justify-center items-center py-6 px-8 relative">
        <FaCrown
          className="absolute right-[-45px] rotate-[30deg] top-[-60px] "
          size={100}
          color="#E5B162"
        />
        <h1>Bike to work</h1>
        <FaTrash size={100} className="my-6" color="black" />
        <div className="flex">{divElements}</div>
      </div>

      <div className="bg-[#D9D9D9] text-[#537749] flex flex-col justify-center items-center py-6 px-8">
        <h1>Bike to work</h1>
        <FaRecycle size={100} className="my-6" color="black" />
        <div className="flex">{divElements}</div>
      </div>

      <div className="bg-[#D9D9D9] text-[#537749] flex flex-col justify-center items-center py-6 px-8">
        <h1>Bike to work</h1>
        <MdPedalBike size={100} className="my-6" color="black" />
        <div className="flex">{divElements}</div>
      </div>

      <div className="bg-[#D9D9D9] text-[#537749] flex flex-col justify-center items-center py-6 px-8">
        <h1>Bike to work</h1>
        <MdPedalBike size={100} className="my-6" color="black" />
        <div className="flex">{divElements}</div>
      </div>

      <div className="bg-[#D9D9D9] text-[#537749] flex flex-col justify-center items-center py-6 px-8">
        <h1>Bike to work</h1>
        <MdPedalBike size={100} className="my-6" color="black" />
        <div className="flex">{divElements}</div>
      </div>

      <div className="bg-[#D9D9D9] text-[#537749] flex flex-col justify-center items-center py-6 px-8">
        <h1>Bike to work</h1>
        <MdPedalBike size={100} className="my-6" color="black" />
        <div className="flex">{divElements}</div>
      </div>
    </div>
  );
};

export default MyQuest;
