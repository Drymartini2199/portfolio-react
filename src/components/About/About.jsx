import React from 'react'
import styles from './about.module.css'

function About() {
    return (
        <div>
            <div className={styles.about_wrapper}>
                <div className={styles.container}>
                    <div className={styles.about_con}>
                        <div className={styles.title}>
                            <h1> About Me </h1>
                        </div>
                        <div className={styles.about_info}>
                            <div className={styles.text_1}>
                                <h2>ข้อมูล</h2>
                                <ul>
                                    <li>ชื่อ - สกุล : เอกภพ ศรีสุนทร</li>
                                    <li>ชื่อเล่น : เบส</li>
                                    <li>วันเกิด : 16 มิถุนายน 2541</li>
                                    <li>ที่อยู่ปัจจุบัน : <div>300 อาคาร แกรนด์ ดานา ทาวเวอร์ <br />ซ.ลาดพร้าว 20
                                        แขวงจอมพล เขตจตุจักร <br />กรุงเทพฯ 10900</div></li>
                                </ul><br />
                                <h2>คติที่ชอบ</h2>
                                <blockquote>
                                    <div><q> เปลี่ยนสิ่งที่ไม่รู้เป็นความรู้ <br />แล้วเปลี่ยนความรู้เป็นความหวัง </q></div>
                                </blockquote>
                            </div>
                            <div className={styles.text_2}>
                                <h2>การศึกษา</h2>
                                <ul>
                                    <h3><span>สำเร็จการศึกษา</span>ระดับอาชีวศึกษา วิทยาลัยเทคนิคลพบุรี - ปีการศึกษา 2561</h3>
                                    <li>ประเภทวิชาช่างอุตสาหกรรม</li>
                                    <li>แผนกช่างไฟฟ้า</li>
                                    <li>GPA : 3.45</li>
                                    <br />

                                    <h3><span>เข้าศึกษา</span>ในระดับปริญญาตรี มหาวิทยาลัยกรุงเทพ - ปีการศึกษา 2562 - 2564</h3>
                                    <li>คณะวิศวกรรมศาสตร์</li>
                                    <li>สาขาวิชาวิศวกรรมไฟฟ้า</li>
                                    <li>GPA : 3.95 <span>( ก่อนย้ายคณะ )</span></li>
                                    <br />

                                    <h3><span>กำลังศึกษาอยู่</span>ในระดับปริญญาตรี มหาวิทยาลัยกรุงเทพ - ปัจจุบัน</h3>
                                    <li>คณะเทคโนโลยีสารสนเทศและนวัตกรรม</li>
                                    <li>สาขาวิชาวิทยาการคอมพิวเตอร์</li>
                                    <li>GPA : 3.53 <span>( ปัจจุบัน )</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default About
