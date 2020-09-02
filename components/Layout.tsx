import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>


    <header id="mainHeader" className="section section_header" data-template="sectionHeader">
        <div className="header header_content">
          <Link href="/">
            <a className="header__logo">JSA</a>
          </Link>
          {/* Menu en portable */}
          {/* <Menu {...props} right pageWrapId={"page-wrap"} outerContainerId={"App"}>
            <ul>
              <li>
                <Link href="/">
                  <a className="up">Contact</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="up">About</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="up">FR</a>
                </Link>
                <Link href="/" >
                  <a className="up cut">EN</a>
                </Link>
              </li>
            </ul>
          </Menu> */}

          {/* Menu desktop */}
          <ul className="header__right">
            <li>
              <Link href="/">
                <a className="up hover-font">Contact</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="up hover-font">About</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="up">FR</a>
              </Link>
              <Link href="/" >
                <a className="up cut">EN</a>
              </Link>
            </li>
          </ul>
        </div>
      </header>


    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
)

export default Layout
