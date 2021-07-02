import React from 'react';
import './header.style.scss';
import MobileNav from '../../../Assets/Hamburger Menu.svg';

class Header extends React.Component {

    constructor() {
        super();
        this.state = {
            burgerMenuShow: false
        }
    }

    toggleBurgerMenu = () => {
        this.setState({ burgerMenuShow: !this.state.burgerMenuShow });
    }

    render() {
        return (
            <div className="navbar">

                <div className="navbar__logo">
                    <h2>Fiber</h2>
                </div>

                <div className="navbar__mobile" onClick={this.toggleBurgerMenu}>
                    <img src={MobileNav} alt="" />
                </div>

                <div className={` ${this.state.burgerMenuShow ? 'open' : ''} navbar__items`}>
                    <ul>
                        <li>Community</li>
                        <li>Pricing</li>
                        <li>Features</li>
                    </ul>
                </div>

                <div className="navbar__buttons">
                    <button className="navbar__buttons__login">
                        Sign In
                    </button>
                    <button className="blue-btn navbar__buttons__register">
                        Sign Up
                    </button>
                </div>
            </div >
        )
    }
}

export default Header;