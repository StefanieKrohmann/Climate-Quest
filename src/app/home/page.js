"use client";

import React, { useState } from "react";
import MyQuest from "./(components)/myQuest";
import AllQuest from "./(components)/allQuest";

const Home = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <main className="flex min-h-screen flex-col items-center justify-start sm:p-24 sm:pt-0 py-8 ">
      <div className="sm:text-6xl text-2xl font-bold mb-12">Climate quest</div>
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
      {/* Pages */}

      {activeTab == 1 ? <MyQuest /> : <AllQuest />}
    </main>
  );
};

export default Home;
