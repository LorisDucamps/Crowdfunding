import React from 'react';

const ButtonVariant = (variant) => {
    switch (variant) {
        case 'primary':
            return ('bg-verdigris hover:bg-deep-verdigris')
        case 'secondary':
            return ('bg-light-dark-charcoal')
        default:
            return ('')
    }
}

const ButtonSize = (size) => {
    switch (size) {
        case 'big':
            return ('h-14')
        case 'medium':
            return ('h-12')
        default:
            return ('')
    }
}
const Button = ({ icon, size, variant, className, wording, onClick, active, disabled }) => {

    return (
        <button className={`relative flex items-center text-base font-bold text-white rounded-full group/button ${className} ${ButtonVariant(variant)} ${ButtonSize(size)} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`} icon="false" onClick={disabled ? undefined : onClick} disabled={disabled}>
            {icon && <span className={`flex justify-center items-center h-14 w-14 rounded-full bg-dark-charcoal group-hover/button:bg-dark-silver ${active && 'bg-deep-verdigris group-hover/button:bg-deep-verdigris'}`}>
                <svg className={`fill-philippine-silver w-[10px] ${active && 'fill-white'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 18">
                    <path d="m0,0v18l5-5.06,5,5.06V0H0Z" />
                </svg>
            </span>}
            <span className={`${active && variant === 'secondary' && 'sm:!text-deep-verdigris'} ${variant === 'secondary' && 'last:hidden sm:last:block sm:text-sonic-silver sm:py-4 sm:pl-4 sm:pr-6'} ${size === 'big' && 'px-9'} ${size === 'medium' && 'px-8'}`}>{wording}</span>
        </button>
    );
};

export default Button;