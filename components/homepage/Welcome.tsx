import * as React from 'react'
import Slider from "../structure/Slider"



const sliderArray: WelcomeProps[] = [
  {
    word1: 'GOTOANDBUZZ',
    word2: 'Gobelins Paris'

  }
]

const Welcome = ({ }) => (
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
              sliderArray={sliderArray}
            />
          </div>
        </div>
        <div className="col col_2">
          <Slider
            opacity={0.3}
            vertical={90}
            fontSize={5}
            sliderArray={sliderArray}
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
