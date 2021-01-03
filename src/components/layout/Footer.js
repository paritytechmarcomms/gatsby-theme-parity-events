import React from 'react'
import sub0Logo from "../../images/sub0-logo.svg"

///////////////---STYLES---///////////////////
const stayInTouchStyles = "text-secondary hover:text-white font-bold no-underline text-lg m-6"
const socialIcons = "w-8 h-auto fill-current stroke-1 text-secondary hover:text-white mx-4"
const footerText = "text-secondary text-xs text-center"
///////////////---END STYLES---////////////////

///////////////---COMPONENT---////////////////
const Footer = () => {
    return (
        <footer className="flex flex-col items-center">

            <img 
                className="w-20 h-auto"
                src={sub0Logo} 
                alt="Sub0 Logo" 
            />

            <div id="stay-in-touch" className="mt-14">
                <a 
                href="https://discord.gg/7qxR8Zr" 
                className={stayInTouchStyles}>
                    Discord
                </a>
                <a 
                href="/#" 
                className={stayInTouchStyles}>
                    Newsletter
                </a>
            </div>

            <div id="social-icons-footer" className="flex mt-14">
                <a 
                href="https://github.com/paritytech/substrate/releases" 
                >
                    <svg className ={socialIcons} role="img" viewBox="0 0 43.2 42.2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <title>GitHub icon</title>
                    <path d="M43.2,21.6A21.6,21.6,0,1,0,14.6,42c.5-.4,1.1-.8,1.1-1.6V36.2a13,13,0,0,1-2.3.2,5,5,0,0,1-5-3.4A6,6,0,0,0,6,30.1c-.6-.3-.7-.8,0-.9,3-.6,3.8,3.4,5.8,4a5.88,5.88,0,0,0,4.2-.3,4.49,4.49,0,0,1,1.7-2.8c-5.1-.5-8.1-2.2-9.6-5l-.2-.3-.4-.9-.1-.3a14.87,14.87,0,0,1-.7-4.9,8.09,8.09,0,0,1,2.4-6.2,9.11,9.11,0,0,1,.4-6.3s2.2-.5,6.3,2.5c2.3-1,8.2-1,11.1-.2,1.7-1.2,4.9-2.8,6.2-2.3.3.6,1.1,2.2.5,5.8a9.69,9.69,0,0,1,2.7,7.2,15.32,15.32,0,0,1-.6,4.5l-.2.6-.2.6-.1.3c-1.5,3.3-4.6,4.5-9.6,5,1.6,1,2.1,2.3,2.1,5.7v4.7c0,.7.6,1.2,1.1,1.6A22,22,0,0,0,43.2,21.6"/></svg>
                </a>
                <a 
                href="https://twitter.com/substrate_io" 
                >
                    <svg className ={socialIcons} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <title>Twitter icon</title>
                        <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"></path>
                    </svg>
                </a>
                <a 
                href="https://twitter.com/substrate_io" 
                >
                    <svg className ={socialIcons} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <title>YouTube icon</title>
                        <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"></path>
                    </svg>
                </a>
            </div>

            <p className={`${footerText} mt-14`}>
                © {(new Date().getFullYear())} All rights reserved. <a href="/">Sub0</a> is a conference organized by <a href="https://www.parity.io" target="_blank" rel="noreferrer">Parity Technologies</a>
            </p>

            <p className={footerText}>
                <a href="https://www.parity.io/privacy/" targer="_blank" rel="noreferrer">Privacy Policy</a>&nbsp;|&nbsp; 
                <a href="https://www.parity.io/terms/" targer="_blank" rel="noreferrer">Terms of Service</a>&nbsp;|&nbsp;   
                <a href="/#" targer="_blank" rel="noreferrer">Cookie Settings</a>  
            </p>

        </footer>
    )
}

export default Footer
////////////---END-CONPONENT---///////////////