import React from 'react';
import { twMerge } from 'tailwind-merge';
import formatCurrency from '../../utils/formatCurrency';
import Button from '../Button/Button';
import Card from '../UI/Card/Card';

export default function ProjectItem({ pledge, onOpenModal }) {

    const handleSelectReward = () => {
        onOpenModal(pledge.id); // Passe l'ID du pledge sélectionné
      };

    return (
        <div className={twMerge('mb-6 last:mb-0', pledge.amountLeft === 0 && 'opacity-50')}>
            <Card extraClassName="border-medium-black">
                <div className='sm:flex sm:justify-between sm:items-center'>
                    <h3 className='text-sm font-bold mb-2 sm:text-lg sm:mb-0'>{pledge.title}</h3>
                    <p className='text-sm text-verdigris font-medium sm:text-[15px]'>pledge {formatCurrency(pledge.minPledge)} or more</p>
                </div>
                <p className='text-sm text-sonic-silver my-6 sm:text-base'>{pledge.description}</p>
                <div className='sm:flex sm:justify-between sm:items-center'>
                    <div className='flex items-center gap-2 mb-6 sm:mb-0'>
                        <span className='font-bold text-[32px]'>{pledge.amountLeft}</span>
                        <span className='text-[15px] text-sonic-silver'>left</span>
                    </div>
                    <Button className="text-sm" variant="primary" size="medium" wording={"Select Reward"} disabled={pledge.amountLeft === 0} onClick={handleSelectReward} />
                </div>
            </Card>
        </div>
        
    )
}
