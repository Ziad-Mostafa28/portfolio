import React from "react";

import style from './Home.module.css'

const Home = () => {
    return (
        <div className={style.home}>
            <div className="container">
                <div className={style.homeinformation}>
                    <h2 className={style.hometitle}>Ziad Eladawy</h2>
                    <h4 className={style.homeinfo}>Creative Director</h4>
                    <p className={style.homedesc}>
                        Iam a professional <span className={style.span}>UX Designer</span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                    </p>
                    <button className={style.homebtn}>Let's Begin</button>
                </div>
            </div>
        </div>
    )
}
export default Home