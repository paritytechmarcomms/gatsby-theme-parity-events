import * as React from "react"
import Head from '../components/layout/Head'
import Layout from '../components/layout/Layout'
import HeroSection from '../components/sections/HeroSection'
import WhoShouldAttend from '../components/sections/WhoShouldAttend'
import ShareLearn from '../components/sections/ShareLearn'
import HowToJoin from '../components/sections/HowToJoin'
import Speakers from '../components/sections/Speakers'
import Program from '../components/sections/Program'
import WatchReplay from '../components/sections/WatchReplay'

import textData from '../content/text.json'
import speakerData from '../content/speakers.json'
import programData from '../content/program.json'

const IndexPage = () => {
  
  return (
    <Layout>
        <Head 
        />

        <HeroSection 
            data={textData.heroSection}
        />
        
        <ShareLearn 
          data={textData.shareAndLearn}
        />

        <WhoShouldAttend 
            data={textData.whoAttend}
        />

        <HowToJoin 
            data={textData.howToJoin}
        />

        <Speakers 
            data={speakerData.speakers}
        />

        <Program 
            textData={textData.program}
            programData={programData}
        />
        <WatchReplay 
            data={textData.watchReplay}
        />

    </Layout>
    
  )
    
}

export default IndexPage

