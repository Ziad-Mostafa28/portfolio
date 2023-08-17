import React from "react";
import { Link } from "react-router-dom";
import styles from './Navbar.module.css'
const Navbar = () => {
    return (
        <div className={styles.navbar}>

            <div className="container">

                <div className={styles.logo}>
                    <h2 className={styles.logostext}>Ultra Profile</h2>
                </div>
                <ul className={styles.ullistss}>
                    <li className={`${styles.listitem}`}><Link className={styles.a} to="/">Home</Link></li>
                    <li className={styles.listitem}><a className={styles.a} href="#">Work</a></li>
                    <li className={styles.listitem}><a className={styles.a} href="#">Portfolio</a></li>
                    <li className={styles.listitem}><a className={styles.a} href="#">Resume</a></li>
                    <li className={styles.listitem}><a className={styles.a} href="#">About</a></li>
                    <li className={styles.listitem}><Link className={styles.a} to="/contact">Contact</Link></li>
                </ul>

            </div>
        </div>
    )
}


export default Navbar