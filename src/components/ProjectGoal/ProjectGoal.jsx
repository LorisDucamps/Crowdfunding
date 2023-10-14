import React, { useState } from 'react'
import Card from '../UI/Card/Card'

export default function ProjectGoal({ pledge, totalBackers }) {

    return (
        <Card>
            <ul className="goal">
                <li className="goal__amount">
                    <dt className="h2">${pledge}</dt>
                    <dd>of $100,000 backed</dd>
                </li>
                <li className="goal__backers">
                    <dt className="h2">${totalBackers}</dt>
                    <dd>total backers</dd>
                </li>
                <li className="goal__days">
                    <dt className="h2">100</dt>
                    <dd>days left</dd>
                </li>
            </ul>
        </Card>
    )
}
