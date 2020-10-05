import * as React from 'react'
import { SliderProps } from '../../interfaces/SliderInterface';

import "../../assets/structure/slider.scss"

const Slider = ({ opacity, vertical, fontSize, words }: SliderProps) => {

  // let name;
  // switch (vertical) {
  //   case 0:
  //     name = "width";
  //     break;
  //   case 90:
  //     name = "height";
  //     break;
  // }

  const style = {
    opacity: opacity,
    transform: `rotate(${vertical}deg)`,
    fontSize: fontSize + 'em',
    // name: "100%"
  }

  /**
   * On créer la bande qui défile une fois, pour réutiliser la même variable pour le clone.
   * Comme ça, si tu modifies plus tard l'original, le clone est automatiquement à jour
   */

  const textStrip =
    <div>
      {
        words?.map((word, i) => {
          return word.gradient
            ? <span key={i}>{word.label} &nbsp;-&nbsp;</span>
            : <span key={i}> <span className="colorGradient">{word.label}</span> &nbsp;-&nbsp;</span>
        })
      }
    </div>

  return (
    <div id="slider" className="slider"
      style={style}>
      <div className="scroll text1" >

        {/* Le clone */}
        {textStrip}
        {textStrip}
        {textStrip}
        {textStrip}
      </div>
    </div>
  )
}

export default Slider
