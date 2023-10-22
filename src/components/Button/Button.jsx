import React from 'react';

const ButtonVariant = (variant) => {
    switch (variant) {
        case 'primary':
            return ('bg-moderateCyan')
        case 'secondary':
            return ('bg-gray-2')
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
const Button = ({ icon, size, variant, className, wording, onClick }) => {
    return (
        <button className={`relative flex items-center text-base font-bold text-white rounded-full ${className} ${ButtonVariant(variant)} ${ButtonSize(size)}`} icon="false" onClick={onClick}>
            {icon && <span className="button__icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 18">
                    <path d="m0,0v18l5-5.06,5,5.06V0H0Z" />
                </svg>
            </span>}
            <span>{wording}</span>
        </button>
    );
};

export default Button;