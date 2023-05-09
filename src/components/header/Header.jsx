import { useState } from 'react'

import { BiMenuAltRight } from 'react-icons/bi'

import OutsideClickHandler from 'react-outside-click-handler'

import './Header.css'

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  const getMenuStyle = (menuOpen) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpen && '-100%' }
    }
  }

  return (
    <section className='header-wrapper'>
      <div className="flexCenter paddings innerWidth header-top">
        <img src="/logo.png" alt="logo" />
        <OutsideClickHandler onOutsideClick={() => setMenuOpen(false)}>
          <nav className="flexCenter header-links" style={getMenuStyle(menuOpen)}>
            <a href="#Residencies">Residencies</a>
            <a href="#OurValues">Our Values</a>
            <a href="#ContactUs">Contact Us</a>
            <a href="#GetStarted">Get Started</a>
            <button className='button'><a href='mailto:emailfake@email.com'>Contact</a></button>
          </nav>
        </OutsideClickHandler>
        <div className="menu-icon" onClick={() => setMenuOpen((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  )
}

export default Header