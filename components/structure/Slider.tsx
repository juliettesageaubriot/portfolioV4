import * as React from 'react'

interface SliderProps {
  opacity: number;
  vertical: number;
  fontSize: number;
  word1: string;
  word2: string;
  word3?: string;
}

const Slider = ({opacity, vertical, fontSize, word1, word2, word3} : SliderProps) => {
  const style = {
    opacity: opacity,
    transform: `rotate(${vertical}deg)`,
    fontSize: fontSize + 'em'
  }
  return (
    <div id="slider" className="slider"
      style={style}>
      <div className="scroll text1" >
        <div>
          <span> {word1} &nbsp;-&nbsp;</span>
          <span> <span className="colorGradient">{word2}</span> &nbsp;-&nbsp;</span>

          {word3 && <span>{word3} &nbsp;-&nbsp;</span>
          }
          <span> {word1} &nbsp;-&nbsp;</span>
          <span> <span className="colorGradient">{word2}</span> &nbsp;-&nbsp;</span>
          {word3 && <span>{word3} &nbsp;-&nbsp;</span>}
        </div>

        <div>
          <span>{word1} &nbsp;-&nbsp;</span>
          <span> <span className="colorGradient">{word2}</span> &nbsp;-&nbsp;</span>

          {word3 && <span>{word3} &nbsp;-&nbsp;</span>}

          <span> {word1} &nbsp;-&nbsp;</span>
          <span> <span className="colorGradient">{word2}</span> &nbsp;-&nbsp;</span>

          {word3 && <span>{word3} &nbsp;-&nbsp;</span>}
        </div>
      </div>
    </div>
  )
}

export default Slider
