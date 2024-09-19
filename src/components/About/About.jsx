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
                                    <li>ที่อยู่ปัจจุบัน : <div>300 อาคาร แกรนด์ ดานา ทาวเวอร์<br />
                                        ซ.ลาดพร้าว 20 แขวงจอมพล เขตจตุจักร กรุงเทพฯ 10900</div></li>
                                </ul>
                            </div>
                            <div className={styles.text_2}>
                                <h2>การศึกษา</h2>
                                <ul>
                                    <h3>สำเร็จการศึกษาระดับอาชีวศึกษา วิทยาลัยเทคนิคลพบุรี <br /><span>( ปีการศึกษา 2561 )</span></h3>
                                    <li>ประเภทวิชาช่างอุตสาหกรรม</li>
                                    <li>แผนกช่างไฟฟ้า</li>
                                    <li>GPA : 3.45</li>

                                    <h3>เข้าศึกษาในระดับปริญญาตรี มหาวิทยาลัยกรุงเทพ <br /><span>( ปีการศึกษา 2562 - 2564 )</span></h3>
                                    <li>คณะวิศวกรรมศาสตร์</li>
                                    <li>สาขาวิชาวิศวกรรมไฟฟ้า</li>
                                    <li>GPA : 3.95 <span>( ก่อนย้ายคณะ )</span></li>

                                    <h3>กำลังศึกษาอยู่ในระดับปริญญาตรี มหาวิทยาลัยกรุงเทพ <br /><span>( ปัจจุบัน )</span></h3>
                                    <li>คณะวิศวกรรมศาสตร์</li>
                                    <li>สาขาวิชาวิศวกรรมคอมพิวเตอร์</li>
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
