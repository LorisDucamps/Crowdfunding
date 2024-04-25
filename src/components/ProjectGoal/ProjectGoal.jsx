import { clsx } from 'clsx';
import React from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import Card from '../UI/Card/Card';

export default function ProjectGoal({ collections }) {

    return (
        <Card>
            <ul className='grid grid-cols-1 text-center sm:grid-cols-3'>
                <li className={clsx(`relative mb-6 pb-6 after:content-[' * '] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:w-20 after:mx-auto after:bg-medium-black sm:pb-0`,`sm:after:content-[' * '] sm:after:absolute sm:after:top-0 sm:after:right-0 sm:after:left-[inherit] sm:after:h-full sm:after:w-px sm:after:m-[inherit] sm:after:bg-medium-black sm:mb-0 sm:pb-0`)}>
                    <dt className='text-[32px] font-bold'>${collections.backed}</dt>
                    <dd className='text-sm text-sonic-silver sm:text-[15px]'>of $100,000 backed</dd>
                </li>
                <li className={clsx(`relative mb-6 pb-6 after:content-[' * '] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:w-20 after:mx-auto after:bg-medium-black sm:pb-0`,`sm:after:content-[' * '] sm:after:absolute sm:after:top-0 sm:after:right-0 sm:after:left-[inherit] sm:after:h-full sm:after:w-px sm:after:m-[inherit] sm:after:bg-medium-black sm:mb-0 sm:pb-0`)}>
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
