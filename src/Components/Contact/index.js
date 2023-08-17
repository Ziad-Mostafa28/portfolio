import React from "react";

import styled from "./Contact.module.css"


const Contact = () => {
    return (
        <div className={styled.drop}>
        <div className="container">
            <h2 className={styled.drop_title}><span className={styled.drop_title_span}>Drop </span>Me A line</h2>
            <form action="" className={styled.drop_form}>
                <div className={styled.form_inputss}>
                <input className={`${styled.form_input} ${styled.form_inputss_input} ${styled.form_inputss_inputsss}`} type="text" placeholder="Your Name"/>
                <input className={`${styled.form_input} ${styled.form_inputss_input} ${styled.form_inputss_inputssss}`} type="email" placeholder="Your Email"/>
                </div>
                <input className={`${styled.form_input} ${styled.input_sub} `} type="text"  placeholder="Your Subject"/>
                <textarea className={styled.form_textarea} cols="30" rows="10" placeholder="Your Message"></textarea>
                <input className={`${styled.form_input} ${styled.form_input_last}`} type="submit" value="Send Message"/>
            </form>
        </div>
    </div>
    )
}

export default Contact