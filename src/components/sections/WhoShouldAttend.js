import React from 'react'
import Heading from '../Heading'
import FeatureText from '../FeatureText'

///////////////---STYLES---///////////////////

///////////////---END STYLES---////////////////

///////////////---COMPONENT---////////////////
const WhoShouldAttend = ({data}) => {
   
    return (
        <section>
            <Heading 
                outline="Who"
                lineBreak="2"
            >
                {data.title}
            </Heading>
            <div className="lg:flex flex-wrap">
                <FeatureText
                    title={data.blockOneTitle}
                    text={data.blockOneText}
                />
                <FeatureText
                    title={data.blockTwoTitle}
                    text={data.blockTwoText}
                />
            
                <FeatureText
                    title={data.blockThreeTitle}
                    text={data.blockThreeText}
                />
            </div>
            
        
            
        </section>           
    )
}
export default WhoShouldAttend
////////////---END-CONPONENT---///////////////