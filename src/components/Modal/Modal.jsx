import React, { useEffect, useState } from "react";
import Card from "../UI/Card/Card";
import ModalList from "./ModalList";

export default function Modal({
  pledges,
  selectedPledge,
  isOpen,
  onCloseModal,
  onUpdatePledge,
}) {
  const [selectedPledgeId, setSelectedPledgeId] = useState(null);
  const [pledgeAmount, setPledgeAmount] = useState(0);

  useEffect(() => {
    if (selectedPledge) {
      setSelectedPledgeId(selectedPledge.id); // Pré-sélectionner le pledge
      setPledgeAmount(selectedPledge.minPledge); // Initialiser avec le montant minimum
    }
  }, [selectedPledge]);

  const handleSelectPledge = (id) => {
    setSelectedPledgeId(id);
    setPledgeAmount(""); // Réinitialise le montant
  };

  const handleSubmitPledge = (e) => {
    e.preventDefault();
    const pledge = pledges.find((p) => p.id === selectedPledgeId);

    if (!pledgeAmount || pledgeAmount < pledge.minPledge) {
      alert(`Please enter a valid amount (minimum ${pledge.minPledge})`);
      return;
    }

    onUpdatePledge({ pledgeId: selectedPledgeId, amount: pledgeAmount });
    onCloseModal();
  };

  return (
    <dialog
      open={isOpen}
      className="fixed top-0 bottom-0 z-30 h-[calc(100%-100px)] overflow-y-auto before:content-[''] before:fixed before:inset-0 before:h-screen before:w-screen before:bg-black/[.5]"
      aria-labelledby="modal-title"
      role="dialog"
    >
      <Card extraClassName="relative max-w-[730px] mx-auto">
        <div>
          <button
            onClick={onCloseModal}
            className="absolute top-[30px] right-[30px]"
          >
            <img src="/assets/img/close-grey.svg" alt="close" />
          </button>
          <h2 id="modal-title" className="text-lg font-bold mb-6 sm:text-2xl sm:mb-4">
            Back this project
          </h2>
          <p className="text-sm text-sonic-silver mb-6 sm:text-base sm:mb-8">
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
          </p>
          <ModalList
            pledges={pledges}
            selectedPledgeId={selectedPledgeId}
            onSelectPledge={handleSelectPledge}
            pledgeAmount={pledgeAmount}
            setPledgeAmount={setPledgeAmount}
            onSubmitPledge={handleSubmitPledge}
          />
        </div>
      </Card>
    </dialog>
  );
}
