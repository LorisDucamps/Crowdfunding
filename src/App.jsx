import React, { useState } from "react";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import ProjectAbout from './components/ProjectAbout/ProjectAbout';
import ProjectGoal from "./components/ProjectGoal/ProjectGoal";
import ProjectIntro from "./components/ProjectIntro/ProjectIntro";
import data from "./data/data.json";
import "./styles/global.css";

export default function App() {
  const [datas, setDatas] = useState(data);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPledge, setSelectedPledge] = useState(null);

  const handleOpenModal = (pledgeId) => {
    const pledge = datas.pledges.find((p) => p.id === pledgeId);
    setSelectedPledge(pledge);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleUpdatePledge = (newPledge) => {
    console.log("Pledge updated:", newPledge);
    // Tu peux ajouter une logique pour mettre à jour les pledges ici si nécessaire.
  };

  return (
    <>
      {isModalOpen && (
        <Modal
          pledges={datas.pledges}
          selectedPledge={selectedPledge}
          isOpen={isModalOpen}
          onCloseModal={handleCloseModal}
          onUpdatePledge={handleUpdatePledge}
        />
      )}

      <Header />

      <main className="px-6">
        <div className="flex flex-col max-w-[730px] mx-auto gap-6 -mt-14 sm:-mt-[92px]">
          <ProjectIntro />
          <ProjectGoal dataGoal={datas.general} />
          <ProjectAbout pledges={datas.pledges} onOpenModal={handleOpenModal} />
        </div>
      </main>
    </>
  );
}
