import React from 'react'
import Heading from '../Heading'
import FeatureText from '../FeatureText'

///////////////---STYLES---///////////////////
const iconStyles ="text-primary w-14 h-14 border-2 rounded-full border-primary text-center font-bold py-3 mx-auto -mb-16 mt-14"
///////////////---END STYLES---////////////////

///////////////---COMPONENT---////////////////
const HowToJoin = ({data}) => {
   
    return (
        <section className="mt-14">

            <Heading 
                outline="How"
                lineBreak="0"
            >
                {data.title}
            </Heading>

            <div className="lg:flex flex flex-wrap justify-center ">

                <div className="flex flex-col mx-8">
                    <div className={iconStyles}>1</div>
                    <FeatureText
                        title={data.blockOneTitle}
                    >
                        Sub0 Online will be hosted on Crowdcast. Make sure to <a className="text-primary hover:opacity-80" href="https://www.crowdcast.io/e/axvfinsv?utm_campaign=sub0&amp;utm_source=sub0+website&amp;utm_medium=referral">register here</a> free of charge.
                    </FeatureText>
                </div>

                <div className="flex flex-col mx-8">
                    <div className={iconStyles}>2</div>
                    <FeatureText
                    title={data.blockTwoTitle}
                    >
                        To further the discussion and connect deeper with the Substrate community, join the <a className="text-primary hover:opacity-80" href="https://discord.gg/7qxR8Zr">Discord server</a>.
                    </FeatureText>
                </div>

                <div className="flex flex-col mx-8">
                    <div className={iconStyles}>3</div>
                    <FeatureText
                    title={data.blockThreeTitle}
                    >
                        On Oct 15th, at 12pm CEST, visit <a className="text-primary hover:opacity-80" href="https://www.crowdcast.io/e/axvfinsv?utm_campaign=sub0&amp;utm_source=sub0+website&amp;utm_medium=referral">this link</a> to attend Sub0 Online on the Crowdcast platform.
                    </FeatureText>
                </div>

            </div>
            <p className="text-center my-20">For any question, reach out to <a href="mailto:sub0@parity.io">sub0@parity.io</a>.</p>

        </section>           
    )
}
export default HowToJoin
////////////---END-CONPONENT---///////////////