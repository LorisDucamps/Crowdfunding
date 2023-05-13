import React from 'react';

const ButtonVariant = (variant) => {
    switch (variant) {
        case 'primary':
            return ('button__primary')
        case 'secondary':
            return ('button__secondary')
        default:
            return ('')
    }
}

const ButtonSize = (size) => {
    switch (size) {
        case 'big':
            return ('button__big')
        case 'medium':
            return ('button__medium')
        default:
            return ('')
    }
}
const Button = ({icon, size, variant, className, wording, onClick}) => {
    return (
        <button className={`${className} ${ButtonVariant(variant)} ${ButtonSize(size)}`} icon="false" onClick={onClick}>
            {icon && <span className="button__icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 18">
                    <path d="m0,0v18l5-5.06,5,5.06V0H0Z"/>
                </svg>
            </span>}
            <span>{wording}</span>
        </button>
    );
};

export default Button;