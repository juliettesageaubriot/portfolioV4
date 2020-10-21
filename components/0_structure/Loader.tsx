import React from "react";
import Slider from "../../components/1_elements/Slider";
import { SliderWord } from '../../interfaces/SliderInterface';

import "../../assets/structure/loader.scss";

const Loader = () => {

  const words: SliderWord[] = [
    {
      label: "Chargement",
      gradient: true
    },
    {
      label: "Loading",
      gradient: false
    },
    {
      label: "Chargement ",
      gradient: true
    },
    {
      label: "Loading ",
      gradient: false
    }
  ]

  return (
    <div className="loader">
      <div className="loading">
        <div className="slider slider_wrap">
          <div className="slider__content">
            <Slider
              opacity={0.5}
              vertical={0}
              fontSize={4}
              words={words}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
