import React from 'react'
import { Link } from 'gatsby'
///////////////---STYLES---///////////////////
const buttonStyles = "font-border font-bold text-primary px-6 py-2 focus:outline-none"
const hoverStyles = "hover:opacity-80"
///////////////---END STYLES---////////////////

///////////////---COMPONENT---////////////////
const SmallButton = ({children, link}) => {
    
    return (
        <Link
            to={link}
        >
            <button 
            type="buton"
            className={`${buttonStyles} ${hoverStyles}`}>
                {children}
            </button>
        </Link>
    )
}

export default SmallButton
////////////---END-CONPONENT---///////////////