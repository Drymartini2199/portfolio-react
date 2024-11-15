import React from 'react'
import styles from './Contact.module.css'
import { FaPhone, FaEnvelope, FaHouseChimneyUser } from "react-icons/fa6";

function Contact() {
    return (
        <div className={styles.contact_wrapper}>
            <div className={styles.contact_container}>
                <div className={styles.contact_con}>
                    <div className={styles.contact_info}>
                        <h1> Contact Me </h1>
                        <h2> Get in touch </h2>
                        <p><FaPhone /> (+66) 65 575 9995</p>
                        <p><FaEnvelope /><a href="mailto:a.sreesunthorn@gmail.com"> a.sreesunthorn@gmail.com </a> <span>(แนะนำ)</span></p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact
