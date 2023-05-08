import './Header.css'

const Header = () => {
  return (
    <section className='header-wrapper'>
      <div className="flexCenter paddings innerWidth header-top">
        <img src="/logo.png" alt="logo" />
        <nav className="flexCenter header-links">
          <a href="#Residencies">Residencies</a>
          <a href="#OurValues">Our Values</a>
          <a href="">Contact Us</a>
          <a href="">Get Started</a>
          <button className='button'><a href='mailto:emailfake@email.com'>Contact</a></button>
        </nav>
      </div>
    </section>
  )
}

export default Header