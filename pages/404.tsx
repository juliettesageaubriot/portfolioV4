import React from 'react';
import Slider from "../components/1_elements/Slider";
import { SliderWord } from '../interfaces/SliderInterface';
import Link from 'next/link'

export default function Custom404() {

  const words: SliderWord[] = [
    {
      label: "Are you lost ?",
      gradient: true
    },
    {
      label: " 404",
      gradient: false
    },
    {
      label: "Allo ?",
      gradient: true
    }
  ]

  return (
    <section id="main404" className="section section_404" data-template="section404">
      <div className="slider slider_wrap">
        <div className="slider__content">
          <Slider
            opacity={0.5}
            vertical={0}
            fontSize={4}
            words={words}
          />
          <Link href="/">
            <a className="link link_homepage btn">Return to the homepage</a>
          </Link>

        </div>
      </div>
    </section>
  )
}
