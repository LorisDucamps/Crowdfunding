import React from "react";
import ProjectItem from "../ProjectItem/ProjectItem";

export default function ProjectList({ pledges, onOpenModal }) {
  return (
    <>
      {pledges.map((pledge) => {
        return (
          <ProjectItem
            key={pledge.id}
            pledge={pledge}
            onOpenModal={onOpenModal}
          />
        );
      })}
    </>
  );
}
