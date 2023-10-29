import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";
import { MoonLoader } from "react-spinners";
const AllQuest = ({ allQuest, trackChanges, setTrackChanges, loading }) => {
  const steps = 5;
  const divElements = [];

  for (let i = 0; i < steps; i++) {
    divElements.push(
      <div key={i} className="h-6 w-6 mx-1 rounded-full border-2"></div>
    );
  }

  const addQuest = async (item) => {
    try {
      const response = await fetch("/api/userquest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...item, uuid: uuidv4() }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      toast.success("Quest added!");
      setTrackChanges((p) => !p);
    } catch (error) {
      toast.error("Error in adding Quest!");
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
      {loading && allQuest.length == 0 ? (
        <MoonLoader
          color={"#537749"}
          loading={true}
          cssOverride={override}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 sm:gap-20 gap-4 mt-20">
          {allQuest.map((el) => (
            <div
              key={el._id}
              className="bg-[#D9D9D9] max-w-[320px] text-center text-[#537749] flex flex-col justify-center items-center py-6 "
            >
              <h1>{el.title}</h1>
              <img src={el.icon} className="h-28 my-4" />
              <h1 className="text-sm mt-2 mb-4 px-4">{el.desc}</h1>
              <div
                onClick={() => addQuest(el)}
                className=" px-4 py-1 custom-border m-auto flex justify-center items-center text-lg font-bold hover:cursor-pointer"
              >
                start quest
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default AllQuest;
