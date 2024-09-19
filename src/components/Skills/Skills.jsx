import React from 'react'
import styles from './Skills.module.css'
import { FaSquareJs, FaReact, FaGitAlt, FaNode, FaHtml5, FaCss3Alt, FaPython, FaPhp } from "react-icons/fa6";
import { SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";
import Tilt from 'react-parallax-tilt';
import cerhtml from '../img/Certificate/HTML.png'
import cercss from '../img/Certificate/CSS.png'
import cerjs from '../img/Certificate/JavaScript.png'

function Skills() {
  return (
    <div className={styles.skills_wrapper}><div className={styles.skills_con}>
      <h1 className={styles.skills_title}> My Skill set </h1>
      <div>
        <dl>
          <dt><b>ทักษะและประสบการณ์ของฉัน</b></dt>
          <dd>โดยส่วนตัวจะเป็นการศึกษาด้วยตัวเองจากหนังสือ และสื่อออนไลน์ ทำให้ยังขาดประสบการณ์ทำงานจริงทำให้ขาดความมั่นนใจอยู่เสมอ เลยอยากจะขอโอกาสที่จะได้เรียนรู้และพัฒนาตัวเองในสายงานด้านนี้ เพื่อจะได้มีเป้าหมายที่จะอยากมีชีวิตต่อไป</dd>
        </dl>
      </div>
      <div>
        <ul className={styles.skills_list}>
          <li>
            <div><Tilt scale={1.7} transitionSpeed={2500} tiltReverse={true}>
              <FaHtml5 />
            </Tilt><br />html</div>
          </li>
          <li>
            <div><Tilt scale={1.7} transitionSpeed={2500} tiltReverse={true}>
              <FaCss3Alt />
            </Tilt><br />css</div>
          </li>
          <li>
            <div><Tilt scale={1.7} transitionSpeed={2500} tiltReverse={true}>
              <FaSquareJs />
            </Tilt><br />javascript</div>
          </li>
          <li>
            <div><Tilt scale={1.7} transitionSpeed={2500} tiltReverse={true}>
              <FaPython />
            </Tilt><br />python</div>
          </li>
          <li>
            <div><Tilt scale={1.7} transitionSpeed={2500} tiltReverse={true}>
              <FaPhp />
            </Tilt><br />php</div>
          </li>
          <li>
            <div><Tilt scale={1.7} transitionSpeed={2500} tiltReverse={true}>
              <FaReact />
            </Tilt><br />react</div>
          </li>
          <li>
            <div><Tilt scale={1.7} transitionSpeed={2500} tiltReverse={true}>
              <FaNode />
            </Tilt><br />node.js</div>
          </li>
          <li>
            <div><Tilt scale={1.7} transitionSpeed={2500} tiltReverse={true}>
              <SiAdobephotoshop />
            </Tilt><br />photoshop</div>
          </li>
          <li>
            <div><Tilt scale={1.7} transitionSpeed={2500} tiltReverse={true}>
              <SiAdobeillustrator />
            </Tilt><br />illustrator</div>
          </li>
        </ul>
      </div>
      <div>
        <ul className={styles.skills_items}>
          <li>
            <div>
              <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                <img src={cerhtml} alt="html" />
              </Tilt>
            </div>
          </li>
          <li><div>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src={cercss} alt="css" />
            </Tilt>
          </div></li>
          <li><div>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src={cerjs} alt="js" />
            </Tilt>
          </div></li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Skills
