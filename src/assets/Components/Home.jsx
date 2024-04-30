import React from "react";
import { useState } from "react";
import { GoHome } from "react-icons/go";
import { LiaGreaterThanSolid } from "react-icons/lia";
import Cardflip from "./Cardflip";
import Game from "./Game";
import Task from "./Task";
import Powered from '../images/Frame 41.png'
import Faq from "./Faq";

export default function Home() {
  const [category, setCategory] = useState("Study");

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };
  return (
    <div className="">
      <div className="text-gray-700">
        <p className="ml-24 mt-10 font-semibold flex items-center">
          {/* Icon for going home */}
          <GoHome className="mr-1 text-xl" />
          <span className="text-blue-800 ml-1 mr-1">
            {/* Icon for greater than */}
            <LiaGreaterThanSolid />
          </span>
          FlashCard
          <span className="text-blue-800 ml-1 mr-1">
            {/* Icon for greater than */}
            <LiaGreaterThanSolid />
          </span>
          Mathematics
          <span className="text-blue-800 ml-1 mr-1">
            {/* Icon for greater than */}
            <LiaGreaterThanSolid />
          </span>
          <span className="text-blue-800 ">Relation and Function</span>
        </p>
      </div>

      <h1 className="font-bold font- text-blue-800 text-2xl mt-10 ml-24">
        Relation and Function(Mathematics)
      </h1>
      <div className="flex flex-col items-center justify-center mt-10">
  <div className="filter-buttons flex justify-center gap-7 space-x-4 mb-4">
    <button className="font-semibold text-xl transition-all hover:border-b-2 hover:border-black" onClick={() => handleCategoryChange("Study")}>Study</button>
    <button className="font-semibold text-xl transition-all hover:border-b-2 hover:border-black" onClick={() => handleCategoryChange("Task")}>Quiz</button>
    <button className="font-semibold text-xl transition-all hover:border-b-2 hover:border-black" onClick={() => handleCategoryChange("Game")}>Game</button>
  </div>
  <div className="content-container w-full flex justify-center">
    {category === "Study" && <Cardflip />}
    {category === "Task" && <Task />}
    {category === "Game" && <Game />}
  </div>
</div>
<img src={Powered} className="ml-20 h-28"></img>
<Faq/>
    </div>
   
  );
}
