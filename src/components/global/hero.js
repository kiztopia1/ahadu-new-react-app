import React from 'react';
import './hero.css'
const Hero = () => (
    <div className="hero">
        <img src={`${process.env.PUBLIC_URL}/imgs/hero.jpg`}></img>
    </div>
)
export default Hero;