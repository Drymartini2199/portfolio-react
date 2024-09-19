import React, { useState } from 'react'
import styles from './Navbar.module.css'
import { FaBars } from "react-icons/fa6";

function Navbar() {

  const [isToggled, setToggle] = useState(false);

  function handleToggle() {
    setToggle(!isToggled)
  }

  return (
    <nav>
      <div className={styles.container}>
        <div className={styles.nav_con}>
          <div className={styles.logo}>
            <a href="#">Port <span>Aek Sr.</span></a>
          </div>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Mobile Menu */}
        <FaBars className={styles.bars} onClick={handleToggle} />
        {isToggled ? (
          <>
            <ul className={styles.mobile_menu}>
              <li><a href="#home">Home</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </>
        ) : null}

      </div>
    </nav>
  )
}

export default Navbar
