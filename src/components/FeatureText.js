import React from 'react'

///////////////---STYLES---///////////////////

///////////////---END STYLES---////////////////

///////////////---COMPONENT---////////////////
const FeatureText = ({title, text, children}) => {
    return (
        <div className="mt-14 w-80 flex flex-col mx-auto">
            <h5 className="mx-auto text-center font-bold">
                {title}
            </h5>
            <p className="mx-auto my-0 text-lg text-center">
                { text ? text : children }
            </p>
        </div>        
    )
}
export default FeatureText
////////////---END-CONPONENT---///////////////