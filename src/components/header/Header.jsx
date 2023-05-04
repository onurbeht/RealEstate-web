import './Header.css'

const Header = () => {
  return (
    <section className='header-wrapper'>
      <div className="flexCenter paddings innerWidth header-top">
        <img src="/logo.png" alt="logo" />
        <div className="flexCenter header-links">
          <a href="">Residencies</a>
          <a href="">Our Values</a>
          <a href="">Contact Us</a>
          <a href="">Get Started</a>
          <button><a href='mailto:emailfake@email.com'>Contact</a></button>
        </div>
      </div>
    </section>
  )
}

export default Header