import React from 'react'

///////////////---STYLES---///////////////////
const column = "container text-secondary w-full lg:w-1/2 px-4 py-1 mx-auto"
///////////////---END STYLES---////////////////

///////////////---COMPONENT---////////////////
const TwoColumns = ({htmlOne, htmlTwo}) => {

    return (
        <section className="mb-20 lg:mb-40 lg:flex lg:mt-6 ">
            <div className={column}>
                <div dangerouslySetInnerHTML={{__html: htmlOne}} />
            </div>
            <div className={column}>
                <div dangerouslySetInnerHTML={{__html: htmlTwo}} />            
            </div>        
        </section>
    )
}
export default TwoColumns
////////////---END-CONPONENT---///////////////