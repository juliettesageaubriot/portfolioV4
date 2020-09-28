import React from 'react'
import Link from 'next/link'

const menuItems = [
  {
    name: "Contact",
    link: "/"
  },
  {
    name: "About",
    link: "/about"
  },
  {
    name: "FR",
    link: "/"
  },
  {
    name: "EN",
    link: "/"
  },
]

const Header = () => (

  <header id="mainHeader" className="section section_header" data-template="sectionHeader">
    <div className="header header_content">
      <Link href="/">
        <a className="header__logo">JSA</a>
      </Link>

      {/* Menu desktop */}
      <ul className="header__right">
        {menuItems.map((item, i) => {
          return (
            <li key={i}>
              <Link href={`${item.link}`}>
                <a className="up hover-line">{item.name}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  </header>
)

export default Header
