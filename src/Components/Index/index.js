import React , { Component } from 'react';
import Home from '../Home'
import About from '../About'
import Portofolio from '../Portofolio'
import Profile from '../Profile'
import SocialMedia from '../SocialMedia'
import Work from '../Work'
import Footer from '../Footer'

class Index extends Component {
    render() {
        return (
        <div>
        <Home/>
        <Work/>
        <Portofolio/>
        <Profile/>
        <About/>
        <SocialMedia/>
        <Footer/>
        </div>
        );
    };
}

export default Index;
