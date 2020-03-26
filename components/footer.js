import React from 'react';
import { LocalizationContext } from "./Localization";

const Footer = () => {
    const { t } = React.useContext(LocalizationContext);
    return (
        <footer >
            <div className="container">
                <div className="footer-content">
                    <div className='footer-text'>
                        <a href="/" className='logo'>
                            <img src="../static/img/logo-white.svg" alt="EM capital"/>
                        </a>
                        {t('footerText')}
                    </div>
                    <ul className='footer-list'>
                        <li>{t('about')}</li>
                        <li>{t('address')}</li>
                        <li>+374 10515151</li>
                        <li>emcapitalfund@gmail.com</li>
                        <li>9:00-18:00</li>
                    </ul>
                </div>
                <p className="footer-copyright">Copyright {new  Date().getFullYear()} LRT Capital. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
