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
import fnp1 from '../img/fnp/วิเคราะห์และออกแบบระบบ.png'
import fnp2 from '../img/fnp/แผนภาพยูสเคส (Use Case Diagram).png'
import fnp3 from '../img/fnp/คำอธิบายยูสเคส (Use Case Description).png'
import fnp4 from '../img/fnp/แผนภาพแสดงความสัมพันธ์ระหว่างเอนทิตี (Entity-Relationship Diagram).png'
import fnp5 from '../img/fnp/ร่วมออกแบบ Application Food Delivery ( Mobile ).png'
import fnp6 from '../img/fnp/Home_trend.png'


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
            <p>ฝึกใช้ JavaScript เพื่อทำ kanbanBoard โดยที่สามารถย้าย Card ไปมาได้ระหว่างกระดานบอร์ด</p>
            <p></p>
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
      <div>
        <h2>Project</h2>
        <div className={styles.port_list}>
          <div className={styles.port_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src={fnp5} alt="fnp5" />
            </Tilt>
            <p>ร่วมออกแบบ Application Food Delivery <span>( Mobile )</span></p>
            <a href="https://citly.me/GdOC4" target='_blank'>Click Download file Figma</a>
          </div>
          <div className={styles.port_items}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src={fnp6} alt="fnp6" />
            </Tilt>
            <p>Second-Hand Products Centre Website <span>( ยังไม่เสร็จ )</span></p>
            <div className={styles.text_project}>
              <p className={styles.text1}>ส่วนที่รับผิดชอบในโปรเจค</p>
              <ul className={styles.ul_project}>
                <li>วิเคราะห์และออกแบบระบบ</li>
                <li>แผนภาพยูสเคส (Use Case Diagram)</li>
                <li>คำอธิบายยูสเคส (Use Case Description)</li>
                <li>ออกแบบฐานข้อมูล (Database Design)</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
