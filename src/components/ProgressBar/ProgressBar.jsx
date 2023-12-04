import React from 'react'

export default function ProgressBar() {
    return (
        <div className='block h-3 w-full mt-8 bg-light-dark-charcoal rounded-full overflow-hidden'>
            <div className='bg-verdigris' style={{ height: '100%', width: '40%' }}></div>
        </div>
    )
}
