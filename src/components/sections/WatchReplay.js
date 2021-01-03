import React from 'react'
import Heading from '../Heading'
import BigButton from "../BigButton"


///////////////---STYLES---///////////////////

///////////////---END STYLES---////////////////

///////////////---COMPONENT---////////////////
const WatchReplay = ({data}) => {
    const {title, buttonText, privacyNotice} = data
    return (
        <section className="flex flex-col items-center mt-40 mb-40 ">
            <Heading 
                outline="Sub0"
                lineBreak="4"
            >
                {title}
            </Heading>
            <BigButton link="https://www.crowdcast.io/e/axvfinsv?utm_campaign=sub0&utm_source=sub0+website&utm_medium=referral">
                {buttonText}
            </BigButton>
            <div className="text-secondary text-center">
                <div dangerouslySetInnerHTML={{__html: privacyNotice}} />
            </div>
            
        </section>           
    )
}
export default WatchReplay 
////////////---END-CONPONENT---///////////////