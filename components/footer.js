import React from 'react';

const Footer = () => {
    return (
        <footer >
            <div className="container">
                <div className="footer-content">
                    <div className='footer-text'>
                        <a href="/" className='logo'>
                            <img src="../static/img/logo-white.svg" alt="EM capital"/>
                        </a>
                        Մենք ամբիցիոզ թիմ ենք, որը գիտի
                        ինչպես ապահովել լավագույն արդյունք։
                        Մենք կատարում ենք մեր աշխատանքը լավագույն կերպով։
                    </div>
                    <ul className='footer-list'>
                        <li>Մեր մասին</li>
                        <li>Տերյան 69, Երևան</li>
                        <li>+374 10515151</li>
                        <li>emailaddress@company.com</li>
                        <li>9:00-18:00</li>
                    </ul>
                </div>
                <p className="footer-copyright">Copyright {new  Date().getFullYear()} LRT Capital. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
