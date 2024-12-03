import React from 'react'
import styles from './Skills.module.css'
import { FaSquareJs, FaReact, FaGitAlt, FaNode, FaHtml5, FaCss3Alt, FaPython, FaPhp, FaAngular } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
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
          <dt><b>My Skills and Experience</b></dt>
          <dd>
            I have mostly been self-studying through books and online resources. Since I lack real work experience, <br /> I sometimes feel uncertain in my abilities. I would be grateful for an opportunity to learn and develop in this field, so I can continue growing and improving myself.
          </dd>
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
              <BiLogoTypescript />
            </Tilt><br />typescript</div>
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
              <SiAdobephotoshop />
            </Tilt><br />photoshop</div>
          </li>
          <li>
            <div><Tilt scale={1.7} transitionSpeed={2500} tiltReverse={true}>
              <SiAdobeillustrator />
            </Tilt><br />illustrator</div>
          </li>
        </ul>
        <div>
          <dl>
            <dt><b>This is my learning plan before the internship</b></dt>
          </dl>
        </div><br />
        <ul className={styles.skills_list}>
          <li>
            <div><Tilt scale={1.7} transitionSpeed={2500} tiltReverse={true}>
              <FaReact />
            </Tilt><br />react</div>
          </li>
          <li>
            <div><Tilt scale={1.7} transitionSpeed={2500} tiltReverse={true}>
              <FaNode />
            </Tilt>
              <br />node.js</div>
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
