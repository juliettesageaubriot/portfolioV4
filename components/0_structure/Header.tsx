import React from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";

import "../../assets/structure/header.scss"

const menuItems = [
  {
    name: "Contact",
    link: "/contact"
  },
  {
    name: "About",
    link: "/about"
  },
  {
    name: "FR",
    link: "/fr"
  },
  {
    name: "EN",
    link: "/en"
  },
]

const Header = () => {
  const router = useRouter();

  return (

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
                  <a className={`up ${router.pathname == item.link ? "selected" : "hover-line"}`}>{item.name}</a>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </header>
  )
}

export default Header
