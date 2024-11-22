import React, { useState } from 'react'
import Button from '../Button/Button'
import Card from '../UI/Card/Card'

export default function ProjectIntro() {

    const [active, setActive] = useState(false)

    const handleChangebutton = () => {
        setActive((active) => !active);
    }

    return (
        <Card className='pt-[52px] sm:pt-14'>
            <img className="absolute -top-[28px] right-0 left-0 mx-auto" src="/assets/img/logo-mastercraft.svg" alt="Logo CrowdFunding" height="56px" width="56px" />
            <h1 className="text-xl font-bold text-center sm:text-[28px]">Mastercraft Bamboo Monitor Riser</h1>
            <p className="text-sm text-center text-sonic-silver mt-4 mb-6 sm:text-base sm:mb-10">A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
            <div className="flex justify-between items-center">
                <Button className="" variant="primary" size="big" wording={"Back to this project"} />
                <Button className={`${active && "bg-light-deep-verdigris"}`} variant="secondary" icon wording={`${active ? "Bookmarked" : "Bookmark"}`} onClick={handleChangebutton} active={active} />
            </div>
        </Card>
    )
}
