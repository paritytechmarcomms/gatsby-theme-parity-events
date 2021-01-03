import React from 'react'

///////////////---STYLES---///////////////////
const slotDivStyles = "text-white flex flex-col flex-wrap justify-between items-start mx-4 my-6 border-b border-gray-600"
const mdStyles ="md:flex-row md:justify-center md:flex-nowrap md:items-center"
///////////////---END STYLES---////////////////

///////////////---COMPONENT---////////////////
const ProgramSlot = ({slotData, avatar}) => {

    const {time, title, speaker, speakerTitle, company} = slotData
    const image = avatar.node.publicURL

    
    return (
        <div className={`${slotDivStyles} ${mdStyles}`}>
            <div className="h-8 font-body md:w-20 md:text-xl">
                <span>{time}</span>
            </div>
            <div className="mb-4 font-bold font-body md:w-1/2 md:text-xl md:mr-8">
                <span>{title}</span>
            </div>
            <div className="flex items-center mb-6 md:w-1/4">
                <img 
                    className="h-8 w-8 rounded-full object-contain -mr-1" 
                    src={image}
                    alt={speaker}
               />
                <ul className="list-none">
                    <li className="text-xs font-body text-white md:text-base">
                        {speaker}
                    </li>
                    <li className="text-xs text-secondary md:text-base"> 
                        {`${speakerTitle}, ${company}`}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ProgramSlot
////////////---END-CONPONENT---///////////////