import React from 'react'
import Card from '../UI/Card/Card'

export default function ProjectItem({ collection, onOpenModal }) {

    function handleOpenModalProject() {
        onOpenModal(true)
    }

    return (
        <Card className={collection.left === 0 ? 'opacity' : 'show'}>
            <div>
                <h3>{collection.title}</h3>
                <p>{collection.pledge}</p>
            </div>
            <p>{collection.description}</p>
            <div>
                <p>{collection.left}</p>
                <button onClick={handleOpenModalProject}>Select Reward</button>
            </div>
        </Card>
    )
}
