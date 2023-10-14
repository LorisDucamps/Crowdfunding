import React, { useState } from 'react'
import Card from '../UI/Card/Card'
import Button from '../Button/Button'

export default function ProjectIntro() {

    const [active, setActive] = useState(false)

    return (
        <Card className="project">
            <img className="logo" src="/assets/img/logo-mastercraft.svg" alt="logo CrowdFunding" />
            <h1>Mastercraft Bamboo Monitor Riser</h1>
            <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
            <div className="actions">
                <Button className="button" variant="primary" size="big" wording={"Back to this project"} />
                <Button className={`button ${active ? "button__active" : ""}`} variant="secondary" icon wording={`${active ? "Bookmarked" : "Bookmark"}`} onClick={() => setActive(!active)} />
            </div>
        </Card>
    )
}
