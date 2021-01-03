import React from 'react'

///////////////---STYLES---///////////////////
const buttonStyles = "border border-primary font-border font-bold text-primary px-6 py-2 focus:outline-none"
const hoverStyles = "hover:bg-primary hover:text-black"
///////////////---END STYLES---////////////////

///////////////---COMPONENT---////////////////
const Button = ({children, link}) => {
    
    return (
        <a
            href={link}
        >
            <button 
            type="buton"
            className={`${buttonStyles} ${hoverStyles}`}>
                {children}
            </button>
        </a>
    )
}

export default Button
////////////---END-CONPONENT---///////////////