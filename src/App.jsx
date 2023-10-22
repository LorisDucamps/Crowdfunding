import React, { useState } from 'react';
import './styles/global.css'
import data from "./data/data.json";
import Header from './components/Header/Header'
import ProjectIntro from './components/ProjectIntro/ProjectIntro';
import ProjectGoal from './components/ProjectGoal/ProjectGoal';
import ProjectAbout from './components/ProjectAbout/ProjectAbout';
import Modal from './components/Modal/Modal';

export default function App() {

  const [collections, setCollections] = useState(data)
  const [isOpen, setIsOpen] = useState(false)

  const [amountBacked, setAmountBacked] = useState(0);
  const [totalBackers, setTotalBackers] = useState(0);

  function handleShowModal() {
    setIsOpen(true)
  }

  function handleCloseModal() {
    setIsOpen(false)
  }

  function handleUpdatePledge(pledge) {
    setAmountBacked(pledge)
  }

  return (
    <>
      {isOpen && <Modal collections={collections} onCloseModal={handleCloseModal} onUpdatePledge={handleUpdatePledge} />}

      <Header />

      <main className='px-6'>
        <div className="flex flex-col max-w-[730px] mx-auto gap-6 -mt-14 sm:-mt-[92px]">
          <ProjectIntro />
          {/* <ProjectGoal pledge={amountBacked} left={totalBackers} />
          <ProjectAbout collections={collections} onOpenModal={handleShowModal} /> */}
        </div>
      </main>
    </>
  )
}


