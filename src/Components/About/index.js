import React from "react";

import styles from './About.module.css'

const About = () => {
    return (
        <div className={styles.creative}>
        <div className="container">
            <div className={styles.creative_info}>
                <h2 className={styles.info_title}>
                <span className={styles.info_title_span}>This is</span> Me</h2>
                <h4 className={styles.info_dir}>Creative Director</h4>
                <p className={styles.info_desc}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est 
                    <a className={styles.info_desc_a} href="#">explicabo</a> 
                    maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                </p>
                <p className={styles.info_desc}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                </p>
            </div>
        </div>
    </div>
    )
}
export default About