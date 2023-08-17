import React, { useEffect, useState } from "react";

import styles from './SocialMedia.module.css'
import axios from "axios";

const SocialMedia = () => {

    const [social, setSocial] = useState([])
    useEffect(() => {

        axios.get('js/data.json').then(res => { setSocial(res.data.social) })

    }, [])

    const ProfileSocial = social.map((socialItem) => {
        return (
            <div className={`${styles.social}
                            ${`${styles.face} ${socialItem.id == 1 ? styles.face : socialItem.id == 2 ? styles.twitter : styles.pin}`}`}
                key={socialItem.id}>

                <i className={`${styles.icon} ${socialItem.icon}`}></i>

                <p className={styles.social_p}>

                    <span className={`${styles.span} `}>{socialItem.title} </span>
                    <span className={` ${styles.info2} ${styles.span}`}>{socialItem.body}</span>


                </p>
            </div>

        )
    })


    return (
        <div className={styles.social_media}>

            {ProfileSocial}
        </div>
    )
}
export default SocialMedia;