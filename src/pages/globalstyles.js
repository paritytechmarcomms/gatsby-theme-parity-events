import React from 'react'
import Layout from '../components/layout/Layout'
import Button from '../components/Button'
import BigButton from '../components/BigButton'
import SmallButton from '../components/SmallButton'

const GlobalStylesPage = () => {
    return (
        <Layout>
            <div className="text-white">
                <h1 id="headingone">Heading One</h1>
                <h2>Heading Two</h2>
                <h3>Heading Three</h3>
                <h4>Heading Four</h4>
                <h5>Heading Five</h5>
                <h6>Heading Six</h6>
                <hr/>
                <p>Paragraph</p>
                <blockquote>This is a blockqoute</blockquote>
                <hr/>
                <ol>
                    <span>Ordered list</span>
                    <li>List Item</li>
                    <li>List Item</li>
                    <li>List Item</li>
                    <li>List Item</li>
                </ol>
                <ul>
                    <span>Unordered list</span>
                    <li>List Item</li>
                    <li>List Item</li>
                    <li>List Item</li>
                    <li>List Item</li>
                </ul>
                <hr/>
                <a href="/">Anchor Tag</a>; that will take you to homepage
                <hr/>
                <p>Sample Simple Table</p>
                <table className="table border-separate border-white align-middle text-left rounded"> 
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Age</th>
                    </tr>
                    <tr>
                        <td>Jill</td>
                        <td>Smith</td>
                        <td>50</td>
                    </tr>
                    <tr>
                        <td>Eve</td>
                        <td>Jackson</td>
                        <td>94</td>
                    </tr>
                </table>
                <hr/>
                <SmallButton link="/">Jump to top</SmallButton><br/><br/>
                <Button link="/">Watch Replay</Button><br/><br/>
                <BigButton link="/#headingone">Watch replay now</BigButton><br/><br/>
                
            </div>
            
        </Layout> 
    )
}

export default GlobalStylesPage