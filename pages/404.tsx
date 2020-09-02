import React from 'react';
import Slider from "../components/structure/Slider";

export default function Custom404() {

  return (
    <section id="main404" className="section section_404" data-template="section404">
      <div className="slider slider_wrap">
        <div className="slider__content">
          <Slider
            opacity={0.5}
            vertical={0}
            fontSize={4}
            word1="Are you lost ?"
            word2="404"
            word3="Allo ?"
          />
          <a href="/" className="link link_homepage btn"
          >Return to the homepage</a>
        </div>
      </div>
    </section>
  )
}
