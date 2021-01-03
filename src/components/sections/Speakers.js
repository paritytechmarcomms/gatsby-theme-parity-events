import React, {useState, useEffect} from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Heading from '../Heading'
import Speaker from '../Speaker'

///////////////---STYLES---///////////////////

///////////////---END STYLES---////////////////



///////////////---COMPONENT---////////////////
const Speakers = ({data}) => {

    const [allSpeakers, setAllSpeakers] = useState([])
    
    const imagesData = useStaticQuery(graphql`
        {
            allFile(filter: {sourceInstanceName: {eq: "speakerImages"}}) {
            edges {
                node {
                id
                relativePath
                publicURL
                }
            }
            }
        }
    `)

    useEffect( () => {
        const speakers = []
        data.forEach( speaker => speakers.push(speaker))
        setAllSpeakers(speakers)
    }, [data])
    
    return (
        <section id="speakers" className="mx-auto">
            
            <Heading 
                outline="Speakers"
                lineBreak="0"
            >
                Speakers
            </Heading>

            <div id="container" className="flex flex-wrap justify-center">

                {allSpeakers.map( (speaker, index )=> {

                    const thisImage = imagesData.allFile.edges.find( (image) => {
                        return speaker.image === image.node.relativePath
                    })

                    return (
                        <Speaker 
                            key={index}
                            data={speaker} 
                            avatar={thisImage}
                        />
                    )
                })}

            </div>
            
        
            
        </section>           
    )
}
export default Speakers
////////////---END-CONPONENT---///////////////