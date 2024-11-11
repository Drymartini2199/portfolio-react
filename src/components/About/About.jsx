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
                                <h2>Information</h2>
                                <ul>
                                    <li>Full Name: Aekkaphop Sreesunthorn</li>
                                    <li>Nickname: Best</li>
                                    <li>Date of Birth: June 16, 1998</li>
                                    <li>Current Address: <div>300 Grand Dana Tower, Soi Ladprao 20,<br /> Chom Phon Subdistrict, Chatuchak District,<br /> Bangkok 10900, Thailand</div><br /></li>
                                </ul>
                            </div>
                            <div className={styles.text_2}>
                                <h2>Education</h2>
                                <ul>
                                    <h3><span>Bachelor's Degree (Current)</span><br />
                                        Institution: Bangkok University</h3>
                                    <li>Faculty: Information Technology and Innovation</li>
                                    <li>Major: Computer Science</li>
                                    <li>GPA : 3.53 <span>( Current )</span></li> <br />

                                    <h3><span>Bachelor's Degree (Current)</span><br />
                                        Institution: Bangkok University,<br /> 2019 – 2021 Academic Years</h3>
                                    <li>Faculty: Engineering</li>
                                    <li>Major: Electrical Engineering</li>
                                    <li>GPA : 3.95 <span>( before transferring )</span></li> <br />
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
