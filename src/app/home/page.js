"use client";

import React, { useState } from "react";
import MyQuest from "./(components)/myQuest";
import AllQuest from "./(components)/allQuest";

const Home = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [trackChange, setTrackChanges] = useState(false);
  const [loading, setLoading] = useState(false);

  // USER QUEST :::
  const [userQuest, setUserQuest] = React.useState([]);
  const getUserQuest = () => {
    console.log("GETTING DATA AGAIN ");
    setLoading(true);
    return fetch("/api/userquest")
      .then((res) => res.json()) // Parse the response as JSON
      .then((res) => {
        setUserQuest(res[0].quest);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };
  React.useEffect(() => {
    getUserQuest();
  }, [trackChange]);

  //  ALL QUEST :::
  const [allQuest, setAllQuest] = React.useState([]);
  const getAllQuest = () => {
    setLoading(true);
    return fetch("/api/allquest")
      .then((res) => res.json()) // Parse the response as JSON
      .then((res) => {
        setAllQuest(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };
  React.useEffect(() => {
    allQuest.length == 0 && getAllQuest();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-start sm:p-24 sm:pt-0 my-12">
      <div className="fixed bg-white z-20 w-[100%] flex flex-col py-6 top-0 items-center justify-center">
        <div className="sm:text-6xl text-2xl font-bold mb-12">
          Climate quest
        </div>
        <ul className="flex flex-wrap">
          <li className="mr-2 border-2 border-black">
            <div
              onClick={() => setActiveTab(1)}
              className={`sm:py-4 py-1 sm:px-24 px-2 sm:text-2xl font-medium text-center ${
                activeTab == 1 ? "active" : "not-active"
              } hover:cursor-pointer`}
            >
              My quests
            </div>
          </li>
          <li className="ml-6 border-2 border-black">
            <div
              onClick={() => setActiveTab(2)}
              className={`sm:py-4 py-1 sm:px-24 px-2 sm:text-2xl font-medium text-center ${
                activeTab == 2 ? "active" : "not-active"
              }  hover:cursor-pointer`}
            >
              All quests
            </div>
          </li>
        </ul>
      </div>

      {/* Pages */}
      <div className="sm:mt-44 mt-24">
        {activeTab == 1 ? (
          <MyQuest userQuest={userQuest} setTrackChanges={setTrackChanges} loading={loading}/>
        ) : (
          <AllQuest
            allQuest={allQuest}
            trackChange={trackChange}
            setTrackChanges={setTrackChanges}
            loading={loading}
          />
        )}
      </div>
    </main>
  );
};

export default Home;
