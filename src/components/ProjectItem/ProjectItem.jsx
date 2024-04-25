import React from 'react'
import Card from '../UI/Card/Card'

export default function ProjectItem({ pledge, onOpenModal }) {

    function handleOpenModalProject() {
        onOpenModal(true)
    }

    return (
        <Card className={pledge.left === 0 ? 'opacity' : 'show'}>
            <div>
                <h3>{pledge.title}</h3>
                <p>{pledge.pledge}</p>
            </div>
            <p>{pledge.description}</p>
            <div>
                <p>{pledge.left}</p>
                <button onClick={handleOpenModalProject}>Select Reward</button>
            </div>
        </Card>
    )
}
