import React, { useState } from 'react'
import Card from '../UI/Card/Card'
import ProgressBar from '../ProgressBar/ProgressBar'
import clsx from 'clsx'

export default function ProjectGoal({ collections }) {

    const dividerAfter = 'after:content-[' * '] absolute top-0 right-0 h-px w-20 bg-medium-black'

    return (
        <Card>
            <ul className='grid grid-cols-1 text-center sm:grid-cols-3'>
                <li className={clsx('relative pb-6 sm:pb-0', dividerAfter)}>
                    <dt className='text-[32px] font-bold'>${collections.backed}</dt>
                    <dd className='text-sm text-sonic-silver sm:text-[15px]'>of $100,000 backed</dd>
                </li>
                <li className='relative py-6 sm:py-0'>
                    <dt className='text-[32px] font-bold'>{collections.totalBackers}</dt>
                    <dd className='text-sm text-sonic-silver sm:text-[15px]'>total backers</dd>
                </li>
                <li>
                    <dt className='text-[32px] font-bold'>{collections.daysLeft}</dt>
                    <dd className='text-sm text-sonic-silver sm:text-[15px]'>days left</dd>
                </li>
            </ul>
            <ProgressBar />
        </Card>
    )
}
