import React, { useState } from "react";
import Header from "./components/Header/Header";
import ProjectGoal from "./components/ProjectGoal/ProjectGoal";
import ProjectIntro from "./components/ProjectIntro/ProjectIntro";
import data from "./data/data.json";
import "./styles/global.css";

export default function App() {
  const [datas, setDatas] = useState(data[0]);
  const [isOpen, setIsOpen] = useState(false);

  // function handleShowModal() {
  //   setIsOpen(true)
  // }

  // function handleCloseModal() {
  //   setIsOpen(false)
  // }

  // function handleUpdatePledge(pledge) {
  //   setAmountBacked(pledge)
  // }

  return (
    <>
      {/* {isOpen && <Modal collections={collections} onCloseModal={handleCloseModal} onUpdatePledge={handleUpdatePledge} />} */}

      <Header />

      <main className="px-6">
        <div className="flex flex-col max-w-[730px] mx-auto gap-6 -mt-14 sm:-mt-[92px]">
          <ProjectIntro />
          <ProjectGoal dataGoal={datas} />
          {/* <ProjectAbout pledges={pledges} onOpenModal={handleShowModal} /> */}
        </div>
      </main>
    </>
  );
}
