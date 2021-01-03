import React, { useState } from 'react'
import sub0Logo from "../../images/sub0-logo.svg"
import Button from '../Button'

///////////////---STYLES---///////////////////
const navItemsDiv = "px-2 pt-2 pb-4 md:flex md:items-center md:justify-center"
const navItemStyles = "block mt-1 px-4 py-1 text-white font-semibold hover:text-primary text-center"
///////////////---END STYLES---////////////////

///////////////---COMPONENT---////////////////
const Header = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="md:flex md:justify-between md:px-4 md:m-2">

            <div className="flex items-center justify-between px-4 py-3 md:p-0">
                <div>
                    <a href="/">
                        <img className="h-20" src={sub0Logo} alt="Sub0 Logo"/>
                    </a>
                </div>
                <div className="md:hidden">
                    <button type="button" className="block" onClick={() => setIsOpen(!isOpen)}> 
                    <svg className="h-6 w-6 fill-current text-white hover:text-primary focus:text-primary focus:outline-none" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m464.883 64.267h-417.766c-25.98 0-47.117 21.136-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.013-21.137-47.149-47.117-47.149z"/><path d="m464.883 208.867h-417.766c-25.98 0-47.117 21.136-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.013-21.137-47.149-47.117-47.149z"/><path d="m464.883 353.467h-417.766c-25.98 0-47.117 21.137-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.012-21.137-47.149-47.117-47.149z"/></svg>
                    </button>
                </div>
            </div>

            <div className={`${ isOpen ?  "block" : "hidden"} ${navItemsDiv}`} >
                <a href="#about" className={navItemStyles} >About</a>
                <a href="#speakers" className={navItemStyles} >Speakers</a>
                <a href="#program" className={navItemStyles} >Program</a>
                <a href="https://discord.gg/7qxR8Zr" className="flex justify-center px-2 py-1" >
                    <svg className="w-10 h-auto fill-current stroke-1 text-white hover:text-primary mx-8 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 245 240">
                        <path d="M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z"></path><path d="M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z"></path>
                    </svg>
                </a>
                <div className="flex justify-center px-2 py-1">
                    <Button link="https://www.crowdcast.io/e/axvfinsv/register?utm_campaign=sub0&utm_source=sub0%20website&utm_medium=referral">Watch Replay</Button>
                </div>
            </div>

        </header>
    )
}

export default Header
////////////---END-CONPONENT---///////////////
