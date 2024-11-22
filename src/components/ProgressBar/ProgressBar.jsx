import React from 'react'

export default function ProgressBar({progress}) {
    return (
        <div className='block h-3 w-full mt-8 bg-light-dark-charcoal rounded-full overflow-hidden'>
            <div className='bg-verdigris transition-all duration-500 ease-in-out' style={{ height: '100%', width: `${Math.min(progress, 100)}%` }}></div>
        </div>
    )
}
