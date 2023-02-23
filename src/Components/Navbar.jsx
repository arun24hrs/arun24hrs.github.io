
import React from 'react'
import style from './Navbar.module.css';
import logo from "../Images/pfolio_logo.png"

const Navbar = () => {
  return (
    <div className={style.navbar} id="nav-menu">
      <div className={style.logoContainer}>
        <img className={style.logo} src={logo} alt="Logo" />
      </div>

      <div className={style.navMenu}>
        <a className="nav-link home" href='#'>Home</a>
        <a className="nav-link about" href='#'>About Me</a>
        <a className="nav-link projects" href='#'>Projects</a>
        <a className="nav-link skills" href='#'>Tech-Stack</a>
      </div>

      <div className={style.btnContainer}>
        <button className={style.contactBtn}>Contact</button>
        <button className={style.resumeBtn}>Resume</button>
      </div>
    </div>
  )
}

export default Navbar