import React from 'react';
import './signup.style.scss';
import SignUpHero from '../../../Assets/Sign Up Image.png';

const SignUp = () => (
    <div className="signup">
        <div className="signup__content">
            <h3>Fiber</h3>
            <h2>Create your Fiber Account</h2>
            <div className="form">

                <div className="form__group">
                    <label>Your Name</label>
                    <input type="text" placeholder='John Doe' />
                </div>
                <div className="form__group">
                    <label>Email</label>
                    <input type="text" placeholder='John@example.com' />
                </div>
                <div className="form__group">
                    <label>Password</label>
                    <input type="text" placeholder='Atleast 8 characters' />
                </div>

            </div>
            <div className="checkbox">
                <input type="checkbox" name="" id="" />
                <span>By creating an account with Fiber you agree with the
                    <a href="">Terms and Condition</a>
                </span>
            </div>
            <button className='blue-btn'>Create Fiber Account</button>
            <div className="link">
                <span >Already have an account? &nbsp;
                    <a href=""> Sign in</a>
                </span>
            </div>

        </div>
        <div className="signup__image">
            <div className="signup__image__container">
                <img src={SignUpHero} alt="" />
                <div className="info">
                    <h2>Unparalleled Templates</h2>
                    <p>Crafted by a team of professional
                        designers, are templates are nparalleled in the marker
                    </p>
                    <div className="circles">
                        <span></span><span></span><span></span><span></span>
                    </div>
                </div>
            </div>
        </div>

    </div >
);

export default SignUp;
