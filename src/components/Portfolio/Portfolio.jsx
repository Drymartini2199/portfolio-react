import React from 'react'
import styles from './Portfolio.module.css'
import Tilt from 'react-parallax-tilt';
import ps1 from '../img/ps/ps01.jpg'
import ps2 from '../img/ps/ps02.jpg'
import ps3 from '../img/ps/ps03.jpg'
import ps4 from '../img/ps/ps4_Midtems.png'
import ai2 from '../img/ai/ai02.jpg'
import ai3 from '../img/ai/ai03.png'
import ai4 from '../img/ai/ai04.jpg'
import c1 from '../img/code/c1.png'
import c2 from '../img/code/c2.png'
import c3 from '../img/code/c3.png'
import c4 from '../img/code/c4.png'


function Portfolio() {
  return (
    <div className={styles.port_con}>
      <h1 className={styles.port_title}> Experience </h1>
      <div>
        <h2>Code</h2>
        <div className={styles.port_list}>
          <div className={styles.port_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src={c1} alt="c1" />
            </Tilt>
            <p>หัดเขียนเว็บเบี้องต้นด้วย HTML กับ CSS</p>
          </div>
          <div className={styles.port_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src={c2} alt="c2" />
            </Tilt>
            <p>ฝึกใช้ JavaScript เพื่อทำ kanbanBoard</p>
          </div>
          <div className={styles.port_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src={c3} alt="c3" />
            </Tilt>
            <p>หัดเชื่อมต่อ API</p>
          </div>
        </div>
      </div>
      <div>
        <h2>Photoshop</h2>
        <div className={styles.port_list}>
          <div className={styles.port_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src={ps1} alt="ps1" />
            </Tilt>
            <p>พาตัวเองไปเทียวที่ใหนสักที</p>
          </div>
          <div className={styles.port_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src={ps2} alt="ps2" />
            </Tilt>
            <p>เปลี่ยนหัวแกะเป็นอย่างอื่น</p>
          </div>
          <div className={styles.port_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src={ps3} alt="ps3" />
            </Tilt>
            <p>ซ้อนชั้นเลเยอร์ปรับแสงและสีภาพ</p>
          </div>
          <div className={styles.port_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src={ps4} alt="ps4" />
            </Tilt>
            <p>ทำโปสเตอร์เลียนแบบหนังที่ชอบ</p>
          </div>
        </div>
      </div>
      <div>
        <h2>illustrator</h2>
        <div className={styles.port_list}>
          <div className={styles.port_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src={ai4} alt="ai4" />
            </Tilt>
            <p>สร้างภาพตัวเอง</p>
          </div>
          <div className={styles.port_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src={ai2} alt="ai2" />
            </Tilt>
            <p>ออกแบบ logo ร้านกาแฟ</p>
          </div>
          <div className={styles.port_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src={ai3} alt="ai3" />
            </Tilt>
            <p>ลองทำภาพ Banner</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
