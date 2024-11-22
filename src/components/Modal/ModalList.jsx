import clsx from "clsx";
import React from "react";

export default function ModalList({
  pledges,
  selectedPledgeId,
  onSelectPledge,
  pledgeAmount,
  setPledgeAmount,
  onSubmitPledge,
}) {
  return (
    <ul className="space-y-4">
      {pledges.map((pledge) => (
        <li
          key={pledge.id}
          className={clsx(
            "p-4 border rounded-lg",
            selectedPledgeId === pledge.id && "border-verdigris"
          )}
        >
          <label htmlFor={`pledge-${pledge.id}`} className="cursor-pointer">
            <input
              type="radio"
              id={`pledge-${pledge.id}`}
              name="pledge"
              className="hidden peer"
              checked={selectedPledgeId === pledge.id}
              onChange={() => onSelectPledge(pledge.id)}
            />
            <h3>{pledge.title}</h3>
            <p>Pledge ${pledge.minPledge} or more</p>
          </label>
          {selectedPledgeId === pledge.id && (
            <form onSubmit={onSubmitPledge}>
              <input
                type="number"
                value={pledgeAmount}
                onChange={(e) => setPledgeAmount(Number(e.target.value))}
                placeholder={`Minimum ${pledge.minPledge}`}
              />
              <button type="submit">Continue</button>
            </form>
          )}
        </li>
      ))}
    </ul>
  );
}
