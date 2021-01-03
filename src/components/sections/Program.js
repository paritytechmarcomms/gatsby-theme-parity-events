import React, {useState, useEffect} from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Heading from '../Heading'
import ProgramSlot from '../ProgramSlot'

///////////////---STYLES---///////////////////
///////////////---END STYLES---////////////////

///////////////---COMPONENT---////////////////
const Program = ({textData, programData}) => {

    const { program } = programData

    const [allSlots, setAllSlots] = useState([])

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
        const slots = []
        program.forEach( slot => slots.push(slot))
        setAllSlots(slots)
    }, [program])
    
    return (
        <section id="program" className="mt-14">
            <div className="text-left">
                <Heading 
                    outline="Program"
                    lineBreak=""
                >
                    {textData.title}
                </Heading>
            </div>
            <div className="mt-14 mx-auto max-w-5xl">

                {allSlots.map( (slot, index )=> {
                    
                    const thisImage = imagesData.allFile.edges.find( (image) => {
                        return slot.image === image.node.relativePath
                    })
                    
                    return (
                        <ProgramSlot 
                            key={index}
                            slotData = {slot}
                            avatar = {thisImage}
                        />
                    )
                })}
            </div>
        </section>           
    )
}
export default Program
////////////---END-CONPONENT---///////////////