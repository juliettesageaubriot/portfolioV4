import React from "react";
import Slider from '../components/1_elements/Slider';
import { SliderWord } from '../interfaces/SliderInterface';
import "../assets/pages/about.scss";

const skills = [
  "React / NextJS",
  "Unity / ShaderGraph",
  "Twig",
  "Wordpress",
  "HTML / CSS / SCSS / JS",
  "Agile & Scrum",
  "UX & UI Design"
]

const coming = [
  "VueJS / NuxtJS",
  "ThreeJS",
  "C#"
]

const experiences = [
  {
    name: "Since September 2019 - in alternation <br/> Front-End developer & Creative coder <br/>",
    link_name: "@GOTOANDBUZZ",
    link: "https://gotoandbuzz.com/"
  },
  {
    name: "Since Mars to June 2019 - in internship <br/> UX/UI Designer & developer <br/>",
    link_name: "@OneFIT Medical",
    link: "http://www.onefit-medical.com/"
  }
]

const formations = [
  {
    name: "For September 2020 <br/> Master Design & Management of Interactive Innovation <br/>",
    link_name: "@Gobelins Paris",
    link: "https://www.gobelins.fr/"
  },
  {
    name: "Since September 2019 <br/> Bachelor Interactive Designer & Developer <br/>",
    link_name: "@Gobelins Paris",
    link: "https://www.gobelins.fr/"
  },
  {
    name: "2017 - 2019 <br/> DUT Métiers du Multimédia et de l’Internet <br/>",
    link_name: "@MMI Montbéliard",
    link: "http://mmimontbeliard.com/"
  }
]

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

const AboutPage = () => (
  <section id='sectionAbout' className='section section_about' data-template='sectionAbout'>
    <div className="wrapp">
      <div className="col">
        <p>Hi, I’m Juliette SAGE—AUBRIOT, a french Front-End Developer currently studying at Gobelins Paris school. I’m working at GotoAndBuzz like Front-End developer and Creative Coder.</p>
          <ul>
          <h2>Experiences</h2>
          {experiences.map((exp, i) => {
            return (
              <li key={i}>
                <span dangerouslySetInnerHTML={{ __html: exp.name }}></span>
                <a href={`${exp.link}`}>{exp.link_name}</a>
              </li>
            )
          })}
        </ul>
        <ul>
          <h2>Formations</h2>
          {formations.map((form, i) => {
            return (
              <li key={i}>
                <span dangerouslySetInnerHTML={{ __html: form.name }}></span>
                <a href={`${form.link}`}>{form.link_name}</a>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="col col-2">

      <Slider
            opacity={0.3}
            vertical={0}
            fontSize={5}
            words={sliderArray}
          />
      </div>

      <div className="col">
        <ul>
          <h2>Skills</h2>
          {skills.map((skill, i) => {
            return (
              <li key={i}>{skill}</li>
            )
          })}
        </ul>

        <ul>
          <h2>Skills in coming</h2>
          {coming.map((coming, i) => {
            return (
              <li key={i}>{coming}</li>
            )
          })}
        </ul>
      </div>
    </div>
  </section>
)

export default AboutPage
