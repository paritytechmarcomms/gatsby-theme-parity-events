import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'


const Head = ({ title }) => {

    const data= useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                }
            }
        }
    `)

    return (
        <Helmet
            title={`${data.site.siteMetadata.title} | ${data.site.siteMetadata.description}`}
        >
            {/* Twitter Card with Large Image Code */}
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:site" content="@ParityTech"/>
            <meta name="twitter:title" content="Substrate Blockchain Developer Conference | Sub0 Online Conference"/>
            <meta name="twitter:description" content="Technical deep-dives, real-world blockchain projects, and networking."/>
            <meta name="twitter:image" content="https://sub0.parity.io/assets/img/ogimage-sub0-oct-2020.png"/>

            {/* <!-- Open Graph --> */}
            <meta property="og:title" content="Substrate Blockchain Developer Conference | Sub0 Online Conference"/>
            <meta property="og:image" content="https://sub0.parity.io/assets/img/ogimage-sub0-oct-2020.png"/>
            <meta property="og:description" content="Technical deep-dives, real-world blockchain projects, and networking."/>
            <meta property="og:url" content="https://sub0.parity.io/" />
        </Helmet>
        
    )
}

export default Head