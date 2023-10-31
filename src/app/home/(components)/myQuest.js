import axios from "axios";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { MoonLoader } from "react-spinners";
import {
  FaCrown,
  FaMinus,
  FaMinusCircle,
  FaPlus,
  FaPlusCircle,
} from "react-icons/fa";

const MyQuest = ({ userQuest, setTrackChanges, loading }) => {
  const getSteps = (steps) => {
    const divElements = [];
    for (let i = 0; i < 5; i++) {
      divElements.push(
        <div
          key={i}
          className={`h-6 w-6 mx-1 rounded-full border-2 ${
            i < steps && "active"
          }`}
        ></div>
      );
    }
    return divElements;
  };
  const addStep = async (id) => {
    try {
      const response = await axios.post("/api/addStep", id, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status == 200) {
        toast.success("Step Added!");
        setTrackChanges((p) => !p);
      } else {
        toast.error("Error in adding step!");
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      // Handle errors
    }
  };
  const removeStep = async (id) => {
    try {
      const response = await axios.post("/api/removeStep", id, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status == 200) {
        toast.success("Step Removed!");
        setTrackChanges((p) => !p);
      } else {
        toast.error("Error in adding step!");
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      // Handle errors
    }
  };
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "#537749",
  };
  return (
    <>
      <div>
        <Toaster position="top-right" />
      </div>
      {loading && userQuest.length == 0 ? (
        <MoonLoader
          color={"#537749"}
          loading={true}
          cssOverride={override}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : userQuest.length === 0 && !loading ? (
        <div className="text-center m-auto text-xl text-bold w-[100%]">
          No quest selected currently
        </div>
      ) : (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-20 mt-20 ">
          {userQuest &&
            userQuest.map((el) => (
              <div
                key={el.uuid}
                className="bg-[#D9D9D9] max-w-[320px] text-center text-[#537749] flex flex-col justify-center items-center py-6 relative"
              >
                <FaCrown
                  className={`${
                    el.steps < 5 ? "hidden" : "absolute"
                  } right-[-45px] rotate-[30deg] top-[-60px]`}
                  size={100}
                  color="#E5B162"
                />
                <h1>{el.title}</h1>
                <img src={el.icon} className="h-28 my-4" />
                <h1 className="text-sm mt-2 mb-4 px-4">{el.desc}</h1>
                <div className="flex gap-10 mb-4">
                  <FaMinusCircle
                    size={"25px"}
                    className={`rounded-full border-2 ${
                      el.steps == 0 ? "hover:cursor-not-allowed" : ""
                    }`}
                    onClick={() => el.steps != 0 && removeStep(el.uuid)}
                  />
                  <FaPlusCircle
                    size={"25px"}
                    className={`rounded-full border-2 ${
                      el.steps == 5 ? "hover:cursor-not-allowed" : ""
                    }`}
                    onClick={() => el.steps < 5 && addStep(el.uuid)}
                  />
                </div>
                <div className="flex">{getSteps(el.steps)}</div>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default MyQuest;

// {/* <div className="bg-[#D9D9D9] text-[#537749] flex flex-col justify-center items-center py-6 px-8 relative">

// <h1>Bike to work</h1>
// <img src="https://res.cloudinary.com/dmqimmmad/image/upload/v1698469280/salad_xrisc1.png" className="h-32"/>
// {/* <MdPedalBike size={100} className="my-6" color="black" /> */}
// <div className="flex">{divElements}</div>
// </div> */}
