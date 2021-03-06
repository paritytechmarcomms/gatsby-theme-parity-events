import React from 'react'

import Footer from './Footer'
import Header from './Header'


///////////////---COMPONENT---////////////////
const Layout = (props) => {
    return (
        <> 
            <Header />
            <main className="min-h-screen">
                {props.children}
            </main>
            <Footer />
        </>
    )
}
export default Layout
////////////---END-CONPONENT---///////////////