import React from 'react'
import sub0Animation from '../../images/sub0-gif.gif'
import Button from '../Button'
import SmallButton from '../SmallButton'

///////////////---STYLES---///////////////////
const heroStyles="responsive -mt-20 my-auto h-screen flex flex-col justify-center items-center text-center"
const ySpacing="my-4 sm:my-8"
///////////////---END STYLES---////////////////

///////////////---COMPONENT---////////////////
const HeroSection = ({data}) => {
   
    return (
        <section className={heroStyles}>
            <h5  className={ySpacing} >{data.dateTime}</h5>
            <img className="h-96 w-96" src={sub0Animation} alt="Sub0 Online Gif Animation" />
            <h5  className={ySpacing}>{data.eventName}</h5>
            <div className={ySpacing}>
                <Button 
                    link="https://www.crowdcast.io/e/axvfinsv?utm_campaign=sub0&utm_source=sub0+website&utm_medium=referral">
                    {data.heroButtonOne}
                </Button>
                <SmallButton link="/#program">{data.heroButtonTwo}</SmallButton>
            </div>
        </section>
        
    )

}

export default HeroSection
////////////---END-CONPONENT---///////////////