import React from 'react'
import styles from './Hero.module.css'
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { TypeAnimation } from 'react-type-animation';
import Tilt from 'react-parallax-tilt';

function Hero() {
  return (
    <div className={styles.hero_wrapper}>
      <div className={styles.container}>
        <div className={styles.hero_con}>
          <div className={styles.hero_info}>
            <p className={styles.text_1}>Hi, its' me</p>
            <h3 className={styles.text_2}>Aekkaphop Sreesunthorn</h3>
            <p className={styles.text_3}>
              I'm a <span><TypeAnimation
                sequence={[
                  'Front-end Developer',
                  1000,
                  'Web Developer',
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
              />
              </span>
            </p>
            <p className={styles.text_4}>
              I’m a student who switched majors to pursue a career in Software Development. In my first year of working, I would like to intern as a Front-end Developer. The following year, I plan to move to a Back-end Developer role to eventually become a Full-Stack Developer. After that, I’ll let my future self decide on the next steps.
              I am excited to learn, contribute, and become a part of your company.
            </p>
            <ul className={styles.hero_social}>
              <li><a href="https://github.com/Drymartini2199" target='_blank'><FaGithub /></a></li>
              <li><a href="https://linkedin.com/in/drymartini2199" target='_blank'><FaLinkedinIn /></a></li>
            </ul>
          </div>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <div className={styles.hero_img}></div>
          </Tilt>
        </div>
      </div>
    </div>
  )
}

export default Hero
