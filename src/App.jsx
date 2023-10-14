import React, { useState } from 'react';
import './styles/global.css'
import './styles/button.css'
import './styles/project.css'
import './styles/goal.css'
import './styles/card.css'
import Header from './components/Header/Header'
import ProjectIntro from './components/ProjectIntro/ProjectIntro';
import ProjectGoal from './components/ProjectGoal/ProjectGoal';
import ProjectAbout from './components/ProjectAbout/ProjectAbout';
import Modal from './components/Modal/Modal';

const initialCollections = [
  {
    id: 1,
    title: 'Bamboo Stand',
    pledge: 'Pledge $25 or more',
    description: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.",
    left: 101,
  },
  {
    id: 2,
    title: 'Black Edition Stand',
    pledge: 'Pledge $75 or more',
    description: "You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
    left: 64,
  },
  {
    id: 3,
    title: 'Mahogany Special Edition',
    pledge: 'Pledge $200 or more',
    description: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list.  Shipping is included.",
    left: 0,
  },
]

export default function App() {

  const [collections, setCollections] = useState(initialCollections)
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

      <main>
        <div className='container'>
          <ProjectIntro />
          <ProjectGoal pledge={amountBacked} left={totalBackers} />
          <ProjectAbout collections={collections} onOpenModal={handleShowModal} />
        </div>
      </main>
    </>
  )
}


