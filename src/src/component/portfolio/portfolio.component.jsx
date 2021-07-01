import React from 'react';
import './portfolio.style.scss'
import User1 from '../../../Assets/User Avatar 2.svg';
import User2 from '../../../Assets/User Avatar 32.svg';
import User3 from '../../../Assets/User Avatar.svg';

const Portfolio = () => (
    <div className="container portfolio">

        <div className="portfolio__items">
            <div className="item">
                <div className="info">
                    <div className="info__image">
                        <img src={User1} alt="" />
                    </div>
                    <div className="info__data">
                        <span className="name">Sarah Andrews</span>
                        <span className="revenue">$100k in revenue</span>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sapiente ullam odio harum voluptate dolores officiis ad blanditiis fugiat aut nesciunt itaque laborum reprehenderit voluptatem aspernatur cumque numquam, eaque non hic perspiciatis obcaecati similique. In quos ex veritatis eveniet veniam!
                </p>
                <button>View Sarah's Profile</button>
            </div>

            <div className="item">
                <div className="info">
                    <div className="info__image">
                        <img src={User2} alt="" />
                    </div>
                    <div className="info__data">
                        <span className="name">Mathew Higgins</span>
                        <span className="revenue">$20k in revenue</span>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sapiente ullam odio harum voluptate dolores officiis ad blanditiis fugiat aut nesciunt itaque laborum reprehenderit voluptatem aspernatur cumque numquam, eaque non hic perspiciatis obcaecati similique. In quos ex veritatis eveniet veniam!
                </p>
                <button>View Mathew's Profile</button>
            </div>


            <div className="item">
                <div className="info">
                    <div className="info__image">
                        <img src={User3} alt="" />
                    </div>
                    <div className="info__data">
                        <span className="name">Janice Dave</span>
                        <span className="revenue">$30k in revenue</span>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sapiente ullam odio harum voluptate dolores officiis ad blanditiis fugiat aut nesciunt itaque laborum reprehenderit voluptatem aspernatur cumque numquam, eaque non hic perspiciatis obcaecati similique. In quos ex veritatis eveniet veniam!
                </p>
                <button>View Janice's Profile</button>
            </div>

        </div>

    </div>
);

export default Portfolio;