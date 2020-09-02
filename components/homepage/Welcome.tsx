import * as React from 'react'
import Slider from "../structure/Slider"

const Welcome = () => (
  <section id='sectionWelcome' className='section section_welcome' data-template='sectionWelcome'>
    <div className="wrapp">
      <div className="wrapp_content">
        <div className="col col_1">
          <div className="col__name">
            <h1 className="up">Juliette Sage--Aubriot</h1>
            <Slider
              opacity={1}
              vertical={0}
              fontSize={3}
              word1="Front-end dev"
              word2="Creative coder"
              word3="La boss"
            />
          </div>
        </div>
        <div className="col col_2">
          <Slider
            opacity={0.3}
            vertical={90}
            fontSize={5}
            word1="GotoAndBuzz"
            word2="Gobelins Paris"
          />
        </div>
      </div>
      <div className="scroll">
        <span className="scroll_down">Scroll down</span>
      </div>
    </div>
  </section>
)

export default Welcome
