import React from "react";
import { twMerge } from "tailwind-merge";
import formatCurrency from "../../utils/formatCurrency";
import ProgressBar from '../ProgressBar/ProgressBar';
import Card from "../UI/Card/Card";

export default function ProjectGoal({ dataGoal }) {

  if (!dataGoal) {
    return <p>Loading...</p>;
  }

  const listItemBaseClasses = twMerge(
    "relative mb-6 pb-6 after:content-[' * '] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:w-20 after:mx-auto after:bg-medium-black sm:pb-0",
    "sm:after:content-[' * '] sm:after:absolute sm:after:top-0 sm:after:right-0 sm:after:left-[inherit] sm:after:h-full sm:after:w-px sm:after:m-[inherit] sm:after:bg-medium-black sm:mb-0 sm:pb-0"
  );

  const progress =
    dataGoal.goalAmount > 0
      ? Math.min((dataGoal.currentAmount / dataGoal.goalAmount) * 100, 100)
      : 0;

  return (
    <Card>
      <ul className="grid grid-cols-1 text-center sm:grid-cols-3">
        <li
          className={listItemBaseClasses}
        >
          <dl>
            <dt className="text-[32px] font-bold">{formatCurrency(dataGoal.currentAmount)}</dt>
            <dd className="text-sm text-sonic-silver sm:text-[15px]">
              of {formatCurrency(dataGoal.goalAmount)} backed
            </dd>
          </dl>
        </li>
        <li
          className={listItemBaseClasses}
        >
          <dl>
            <dt className="text-[32px] font-bold">{dataGoal.totalBackers || 0}</dt>
            <dd className="text-sm text-sonic-silver sm:text-[15px]">
              total backers
            </dd>
          </dl> 
        </li>
        <li>
          <dl>
            <dt className="text-[32px] font-bold">{dataGoal.daysLeft || 0}</dt>
            <dd className="text-sm text-sonic-silver sm:text-[15px]">
              days left
            </dd>
          </dl>
        </li>
      </ul>
      <ProgressBar progress={progress} />
    </Card>
  );
}
