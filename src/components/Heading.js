import React from 'react'

///////////////---STYLES---///////////////////
const headingStyles = ""
///////////////---END STYLES---////////////////

///////////////---COMPONENT---////////////////
const Heading = ({children, outline, lineBreak}) => {

    let outlineWithHtml = `<span class="outline">${outline}</span>`
    let text = children.split(' ')
    for (let index in text){
        if(text[index] === outline){
            text[index] = outlineWithHtml
        }
    }
    let firstLine = text.slice(0,lineBreak).join(' ')
    let secondLine = text.slice(lineBreak, text.length).join(' ')
    let combinedLine = `<h1>${firstLine}</br/>${secondLine}</h1>`
    
    return (
        <div className={headingStyles}>
            <div dangerouslySetInnerHTML={{__html: combinedLine}} />
        </div>
        
    )
}
export default Heading
////////////---END-CONPONENT---///////////////