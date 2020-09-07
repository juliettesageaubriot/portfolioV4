import * as React from 'react'
import Link from 'next/link'

const Projects = ({ }) => (
  <section id='sectionProjects' className='section section_projects' data-template='sectionProjects'>
    <div className="projects_wrap">
      <h2>Projects</h2>

      <div className="projects__list">
        <ul className="cards">
          <li className="card">
            <Link href="#">
              <a>
                <div className="cover">
                  <img src="../../assets/images/paris2.jpg"></img>
                </div>
                <div>
                  <div className="head">
                    <h3>Two Gazers</h3>
                    <span>2020</span>
                  </div>
                  <div>
                    <ul>
                      <li>
                        Personnel
                      </li>
                      <li>
                        Photography
                      </li>
                    </ul>
                  </div>
                </div>
              </a>
            </Link>
          </li>


          <li className="card">
            <Link href="#">
              <a>
                <div>
                  <img></img>
                </div>
                <div>
                  <div>
                    <h3>Two Gazers</h3>
                    <span>2020</span>
                  </div>
                  <div>
                    <ul>
                      <li>
                        Personnel
                      </li>
                      <li>
                        Photography
                      </li>
                    </ul>
                  </div>
                </div>
              </a>
            </Link>
          </li>

          <li className="card">
            <Link href="#">
              <a>
                <div>
                  <img></img>
                </div>
                <div>
                  <div>
                    <h3>Two Gazers</h3>
                    <span>2020</span>
                  </div>
                  <div>
                    <ul>
                      <li>
                        Personnel
                      </li>
                      <li>
                        Photography
                      </li>
                    </ul>
                  </div>
                </div>
              </a>
            </Link>
          </li>

          <li className="card">
            <Link href="#">
              <a>
                <div>
                  <img></img>
                </div>
                <div>
                  <div>
                    <h3>Two Gazers</h3>
                    <span>2020</span>
                  </div>
                  <div>
                    <ul>
                      <li>
                        Personnel
                      </li>
                      <li>
                        Photography
                      </li>
                    </ul>
                  </div>
                </div>
              </a>
            </Link>
          </li>


        </ul>
      </div>
    </div>
  </section>
)

export default Projects
