import React from 'react'
import ProjectList from '../ProjectList/ProjectList'
import Card from '../UI/Card/Card'

export default function ProjectAbout({ collections, onOpenModal }) {

    return (
        <Card>
            <h2>About this project</h2>
            <p>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</p>
            <p>Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.</p>
            <ProjectList collections={collections} onOpenModal={onOpenModal} />
        </Card>
    )
}
