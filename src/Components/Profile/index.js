import React, { useEffect, useState } from "react";

import styles from './Profile.module.css'
import axios from "axios";

const Profile = () => {


        const [ skills , setSkills] = useState([])
            useEffect (() => {
                axios.get('js/data.json').then( res => {setSkills(res.data.skills) })
            } , [])

            const ProfileSkills = skills.map( (skillsItem) => {
                // console.log ("sp"+skillsItem.id, "dd")
                return (
                    <div className={styles.bar} key={skillsItem.id}>
                    <span className={styles.title}> {skillsItem.title}</span>
                    <span className={styles.perc}>  {skillsItem.prec}</span>
                    <div className={styles.parent}>
                        <span className={`${styles.parent_span} ${skillsItem.id == 1 ? styles.sp1 : skillsItem.id == 2 ? styles.sp2 : styles.sp3}`}></span>
                    </div>
                </div>
                )
            })

    return (
        <div className={styles.profile_skills}>
        <div className="container">
            <div className={styles.profile}>
                <h2 className={styles.profile_title}>
                    <span className={styles.profile_title_span}>My </span>Profile</h2>
                <ul className={styles.profile_list}>
                    <li className={styles.profile_item}>
                        <span className={styles.span}>Name</span>
                        Hamza Nabil
                    </li>
                    <li className={styles.profile_item}>
                        <span className={styles.span}>Birthday</span>
                        21/1/1996
                    </li>
                    <li className={styles.profile_item}>
                        <span className={styles.span}>Address</span>
                        Ain shams
                    </li>
                    <li className={styles.profile_item}>
                        <span className={styles.span}>Phone</span>
                        4444 5555 6666
                    </li>
                    <li className={styles.profile_item}>
                        <span className={styles.span}>Email</span>
                        hamza@hamza.com
                    </li>
                    <li className={styles.profile_item}>
                        <span className={styles.span}>Website</span>
                        <span className={`${styles.span} ${styles.web}`} >www.google.com</span>
                    </li>
                </ul>
            </div>
            
            <div className={styles.skills}>
                <h2 className={styles.skills_title}>Some 
                <span className={styles.skills_title_span}>skills</span>
                </h2>
                <p className={styles.skills_desc}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                </p>

                {ProfileSkills}

            </div>
            
        </div>
    </div>
    
    )
}

export default Profile