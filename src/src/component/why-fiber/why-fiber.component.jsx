import React from 'react';
import './why-fiber.style.scss';
import PortfolioImage from '../../../Assets/Page Image.png'
import Timer from '../../../Assets/time.svg';
import Code from '../../../Assets/code.svg';
import Mobile from '../../../Assets/allSizes.svg';

const WhyFiber = () => (
    <div className="container fiber">
        <div className="fiber__intro">
            <p>Why Fiber?</p>
            <h2>A good portfolio means good employability.</h2>
        </div>
        <div className="fiber__features">
            <div className="feature">
                <img src={Timer} alt="" />
                <p className='feature__heading'>Build in minutes</p>
                <p className='feature__desc'>With selection of premade templates,
                    you can build out a portfolio in less than 10 minutes
                </p>
            </div>
            <div className="feature">
                <img src={Code} alt="" />
                <p className='feature__heading'>Add custom CSS</p>
                <p className='feature__desc'>With selection of premade templates,
                    you can build out a portfolio in less than 10 minutes
                </p>
            </div>
            <div className="feature">
                <img src={Mobile} alt="" />
                <p className='feature__heading'>Responsive</p>
                <p className='feature__desc'>With selection of premade templates,
                    you can build out a portfolio in less than 10 minutes
                </p>
            </div>

        </div>
        <div className="fiber__gallery">
            <div className="content">
                <h1>Diversify your portfolio.</h1>
                <p>Create an even more impressive portfolio
                    by creating case studies for you projects. Simply follow our step-by-step
                    guide.
                </p>
                <button className='blue-btn'>Start Free Trial</button>
            </div>
            <div className="image">
                <img src={PortfolioImage} alt="" />
            </div>

        </div>
    </div>
);

export default WhyFiber;