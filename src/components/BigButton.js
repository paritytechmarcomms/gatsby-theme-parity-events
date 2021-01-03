import React from 'react'

///////////////---STYLES---///////////////////
const buttonStyles = "border-2 border-primary font-border font-bold text-primary px-8 py-4 my-12 text-xl focus:outline-none"
const hoverStyles = "hover:bg-primary hover:text-black"
///////////////---END STYLES---////////////////

///////////////---COMPONENT---////////////////
const BigButton = ({children, link}) => {
    
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

export default BigButton
////////////---END-CONPONENT---///////////////