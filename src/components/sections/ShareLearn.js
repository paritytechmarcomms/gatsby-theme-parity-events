import React from 'react'
import Heading from '../Heading'
import TwoColumns from '../TwoColumns'

///////////////---STYLES---///////////////////

///////////////---END STYLES---////////////////

///////////////---COMPONENT---////////////////
const ShareLearn = ({data}) => {
    
    return (
        <section id="about">
            <Heading 
                outline="Substrate"
                lineBreak="3"
            >
                {data.title}
            </Heading>

            <TwoColumns
                htmlOne={data.htmlOne}
                htmlTwo={data.htmlTwo}
            />
        </section>           
    )
}
export default ShareLearn
////////////---END-CONPONENT---///////////////