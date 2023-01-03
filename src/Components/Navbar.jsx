
import { StylesProvider } from '@chakra-ui/react'
import React from 'react'
import style from './Navbar.module.css';
import logo from "../Images/pfolio_logo.png"

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div className={style.logoContainer}>
        <img className={style.logo} src={logo} alt="Logo" />
      </div>

      <div className={style.navMenu}>
        <a href='#'>Home</a>
        <a href='#'>About Me</a>
        <a href='#'>Projects</a>
        <a href='#'>Tech-Stack</a>
      </div>

      <div className={style.btnContainer}>
        <button className={style.contactBtn}>Contact</button>
        <button className={style.resumeBtn}>Resume</button>
      </div>
    </div>
  )
}

export default Navbar