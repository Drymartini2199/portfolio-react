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
                                    <li><span className={styles.span1}>Name:</span><div>Aekkaphop Sreesunthorn</div></li>
                                    <li><span className={styles.span1}>Nickname:</span><div>Best</div></li>
                                    <li><span className={styles.span1}>Date of Birth:</span><div>16 June 1998</div></li>
                                    <li><span className={styles.span1}>Current Address:</span><div>300 Grand Dana Tower, Soi Ladprao 20,<br /> Chom Phon Subdistrict, Chatuchak District,<br /> Bangkok 10900, Thailand</div><br /></li>
                                </ul>

                            </div>
                            <div className={styles.text_2}>
                                <h2>Education</h2>
                                <ul>
                                    <h3><span className={styles.span2}>Bachelor's Degree (Current)</span></h3>
                                    <li><span className={styles.span1}>Institution:</span><div>Bangkok University</div></li>
                                    <li><span className={styles.span1}>Faculty:</span><div>Information Technology and Innovation</div></li>
                                    <li><span className={styles.span1}>Major:</span><div>Computer Science</div></li>
                                    <li><span className={styles.span1}>GPA:</span> 3.53 <span className={styles.span2}>( Current )</span></li> <br />

                                    <h3><span className={styles.span2}>Bachelor's Degree</span></h3>
                                    <li><span className={styles.span1}>Institution:</span><div>Bangkok University,<br /> 2019 – 2021 Academic Years</div></li>
                                    <li><span className={styles.span1}>Faculty:</span><div>Engineering</div></li>
                                    <li><span className={styles.span1}>Major:</span><div>Electrical Engineering</div></li>
                                    <li><span className={styles.span1}>GPA:</span> 3.95 <span className={styles.span2}>( before transferring )</span></li> <br />
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
