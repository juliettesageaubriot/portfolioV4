import React from 'react'
import Link from 'next/link'

const Footer = () => (

  <footer id="mainFooter" className="section section_footer" data-template="sectionFooter">
    <div className="footer footer_content">
      <div className="footer__mentions">
        <ul>
          <li>© Juliette SAGE—AUBRIOT 2020 <span>-</span></li>
          <li>All rights reserved <span>-</span></li>
          <li><Link href="#"><a className="hover-line">Mentions légales</a></Link></li>
        </ul>
      </div>
      <div className="footer__medias">
        <ul>
          <li><Link href="#" ><a className="hover-picto"><i className="fab fa-github"></i></a></Link></li>
          <li><Link href="#"><a><i className="fab fa-github"></i></a></Link></li>
          <li><Link href="#"><a><i className="fab fa-twitter"></i></a></Link></li>
          <li><Link href="#"><a><i className="fab fa-twitter"></i></a></Link></li>
        </ul>
      </div>
    </div>
    <div>

    </div>
  </footer>
)

export default Footer
