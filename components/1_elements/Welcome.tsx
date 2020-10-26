import React, { useState, useEffect } from 'react';
import { SliderWord } from '../../interfaces/SliderInterface';
import Slider from "./Slider";
import client from '../../pages/client';

import "../../assets/components/homepage/section-welcome.scss"

/**
 * Pour le type de sliderArray tu as 2 façon de faire :
 * - Soit directement le type SliderWord[]
 *
 * - Soit le type SliderProps['words'] qui va faire référence à la clé 'words' dans le type SliderProps.
 * Cette solution à l'avantage de mettre à jour le type de sliderArray si le type de 'words' change par la suite
 */

const sliderArray: SliderWord[] = [
  {
    label: 'GOTOANDBUZZ',
    gradient: true
  },
  {
    label: 'Gobelins Paris',
    gradient: false
  }
]

const sliderBackground: SliderWord[] = [
  {
    label: 'Front-End Developper',
    gradient: true
  },
  {
    label: 'Creative Coder',
    gradient: false
  }
]


const Welcome = ({ }) => {
  const [homePage, SetHomePage] = useState([])

  useEffect(() => {
    client.getEntries({
      "content_type": "homePage"
    }).then((entries: any) => {
      SetHomePage(entries.items[0])
    })
  })


return (
  <section id='sectionWelcome' className='section section_welcome' data-template='sectionWelcome'>
    <div className="wrapp">
      <div className="wrapp_content">
        <div className="col col_1">
          <div className="col__name">
            <h1 className="up">{homePage}</h1>
            <Slider
              opacity={1}
              vertical={0}
              fontSize={3}
              words={sliderBackground}
            />
          </div>
        </div>
        <div className="col col_2">
          <Slider
            opacity={0.3}
            vertical={90}
            fontSize={5}
            words={sliderArray}
          />
        </div>
      </div>
      <div className="scroll">
        <span className="scroll_down">Scroll down</span>
      </div>
    </div>
  </section>
)
}

export default Welcome
