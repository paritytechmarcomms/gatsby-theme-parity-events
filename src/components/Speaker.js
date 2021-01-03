import React from 'react'

///////////////---STYLES---///////////////////

///////////////---END STYLES---////////////////

///////////////---COMPONENT---////////////////
const Speaker = ({data, avatar}) => {
    const {name, title, company, twitterHandle, twitterUrl} = data
    const image = avatar.node.publicURL
    
    return (
        <div className="flex items-center w-80 mx-4 my-8">

            <img 
                className="h-28 w-28 rounded-full object-contain mr-1" 
                src={image}
                alt={`${name} ${title} ${company}`}  
            />

            <ul className="list-none">

                <li className="text-xl font-body text-white">
                    {name}
                </li>
                <li className="text-secondary"> 
                    {`${title}, ${company}`}
                </li>
                <a href={twitterUrl} className="text-primary">
                    {twitterHandle}
                </a>

            </ul>
        </div>
    )
}

export default Speaker
////////////---END-CONPONENT---///////////////