import React from 'react';
import './hero.style.scss';
import Stars from '../../../Assets/star.svg';
import CheckMark from '../../../Assets/Checkmark.svg';
import HeroBanner from '../../../Assets/hero-Illustration.png'
import Header from '../../component/header/header.component';

const HeroSection = () => (
    <div className='container'>
        <Header></Header>
        <div className="hero">
            <div className="hero__content">
                <div className="rating">
                    <div className="rating__stars">
                        <img src={Stars} alt="" />
                        <img src={Stars} alt="" />
                        <img src={Stars} alt="" />
                        <img src={Stars} alt="" />
                        <img src={Stars} alt="" />
                    </div>
                    <div className="rating__text">
                        <span>Rated 4.8/5 (243 reviews)</span>
                    </div>
                </div>
                <div className="main">
                    <h1>Create your portfolio in minutes.</h1>
                    <p>
                        With Fiber, you can setup your pwn personal portfolio in
                        minutes with dozens of premade, beautiful templates
                    </p>
                    <div className="main__links">
                        <button className='blue-btn'>Start Free Trial</button>
                        <a aclassName='main__links__cta'>View Examples</a>
                    </div>
                    <div className="benefits">
                        <div className="one benefits__here">
                            <img src={CheckMark} alt="" />
                            <span>No Credit Card Required</span>
                        </div>
                        <div className="two benefits__here">
                            <img src={CheckMark} alt="" />
                            <span>No Credit Card Required</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero__image">
                <img src={HeroBanner} alt="" />
            </div>
        </div>
    </div>

);

export default HeroSection;