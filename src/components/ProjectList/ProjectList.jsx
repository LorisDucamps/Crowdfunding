import React from 'react'
import ProjectItem from '../ProjectItem/ProjectItem'

export default function ProjectList({ collections, onOpenModal }) {
    return (
        <>
            {
                collections.map((collection) => {
                    return (
                        <ProjectItem key={collection.id} collection={collection} onOpenModal={onOpenModal} />
                    )
                })
            }
        </>

    )
}
