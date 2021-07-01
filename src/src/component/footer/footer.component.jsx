import React from 'react';
import './footer.style.scss';

const Footer = () => (
    <div className="footer-section">
        <div className="footer container">
            <div className="footer__intro">
                <h3 className='footerheading'>Fiber</h3>
                <p>With Fiber, you can setup your own personal
                    portfolio in minutes with dozens of premade,
                    beautiful templates
                </p>
                <span>Made with ❤️ in the India</span>
            </div>
            <div className="footer__sitemap list">
                <h3 className='footerheading'>SiteMap</h3>
                <ul>
                    <li>Homepage</li>
                    <li>Pricing</li>
                    <li>Testimonials</li>
                    <li>Features</li>
                </ul>
            </div>
            <div className="footer__resources list">
                <h3 className='footerheading'>Resources</h3>
                <ul>
                    <li>Support</li>
                    <li>Contact</li>
                    <li>FAQ</li>
                </ul>
            </div>
            <div className="footer__company list">
                <h3 className='footerheading'>Company</h3>
                <ul>
                    <li>About</li>
                    <li>Customers</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div className="footer__portfolios list">
                <h3 className='footerheading'>Portfolios</h3>
                <ul>
                    <li>Sarah Andrews</li>
                    <li>Mathew Higgins</li>
                    <li>Janice Dave</li>
                </ul>
            </div>
        </div>
    </div>
);

export default Footer;