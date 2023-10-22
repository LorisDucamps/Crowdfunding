import React, { useState } from 'react'
import Card from '../UI/Card/Card'
import Button from '../Button/Button'

export default function ProjectIntro() {

    const [active, setActive] = useState(false)

    return (
        <Card className='pt-[52px] sm:pt-14'>
            <img className="absolute -top-[28px] left-0 right-0 mx-auto" src="/assets/img/logo-mastercraft.svg" alt="logo CrowdFunding" />
            <h1 className="text-xl font-bold text-center">Mastercraft Bamboo Monitor Riser</h1>
            <p className="text-sm text-center text-darkGray mt-4 mb-6">A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
            <div className="flex justify-between items-center">
                <Button className="" variant="primary" size="big" wording={"Back to this project"} />
                <Button className={`button ${active ? "button__active" : ""}`} variant="secondary" icon wording={`${active ? "Bookmarked" : "Bookmark"}`} onClick={() => setActive(!active)} />
            </div>
        </Card>
    )
}
