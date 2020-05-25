import React from "react";
import Layout from "../../components/Layout";
import animationData from "../../static/json/data";
import Lottie from "react-lottie";
import Link from "next/link";
import {useRouter} from "next/router";
import {LocalizationContext} from "../../components/Localization";

const Index = () => {
    const { t } = React.useContext(LocalizationContext);
    const router = useRouter();
    const  { locale } = router.query;
    return (
        <Layout cls="">
            <section id="home" className="banner">
                <div className="banner-content">
                    <div className="container">
                        <h1>
              <span>
                <em>{t('emcapital')}</em>{" "}
              </span>
                            <span>{t('fond')}</span>
                        </h1>
                    </div>
                </div>
            </section>
            <section className="up-box grey-bg">
                <div className="container">
                    <div className="box">
                        <div>
                            <img src="../../static/img/benifits-1.png" alt="Increasing value" />
                            <h3>{t('professionalism')}</h3>
                            <p>
                                {t('arzheqiMetsatsum')}
                            </p>
                        </div>
                        <div>
                            <img src="../../static/img/benifits-2.png" alt="Optimal vision" />
                            <h3>{t('vision')}</h3>
                            <p>
                                {t('visionText')}
                            </p>
                        </div>
                        <div>
                            <img src="../../static/img/benifits-3.png" alt="Optimal vision" />
                            <h3>{t('attraction')}</h3>
                            <p>
                                {t('attractionText')}
                            </p>
                        </div>
                        <Link href={`/${locale}/contact-us`}>
                            <button className="btn primary">{t('contact')}</button>
                        </Link>
                    </div>
                </div>
            </section>
            <section id="offers" className="offer grey-bg">
                <div className="container">
                    <div className="section-title text-center">
                        <h2>{t('specialization')}</h2>
                    </div>
                    <ul className="card-wrap">
                        <li className="card">
                            <h3>{t('allocation')}</h3>
                            <p>
                                {t('allocationText')}
                            </p>
                            <img src="../../static/img/undraw_folder_39kl.jpg" alt="Finances" />
                        </li>
                        <li className="card">
                            <h3>{t('instruments')}</h3>
                            <p>
                                {t('instrumentsText')}
                            </p>
                            <img src="../../static/img/we-offer-2-1.png" alt="Consulting" />
                        </li>
                        <li className="card">
                            <h3>{t('reliable')}</h3>
                            <p>
                                {t('reliableText')}
                            </p>
                            <img src="../../static/img/insurance.jpg" alt="Insurance" />
                        </li>
                    </ul>
                </div>
            </section>
            <section id="news" className="about-fund">
                <div className="container">
                    <div className="about-content">
                        <h2 className="text-center">
                        {t('about1')} <em>{t('fund')}</em>
                        </h2>
                        <p className="text-center">
                        {t('aboutText')}
                        </p>
                    </div>
                </div>
            </section>
            <section className="section-with-img">
                <div className="container">
                    <div className="section-with-img-content">
                        <div className="left">
                            <div className="section-title">
                                <h2 className="secondary">{t('priorities')}</h2>
                            </div>
                            <ul className="benefits">
                                <li>
                                    <div>
                                        <img
                                            className="icon"
                                            src="../../static/img/icons/search.svg"
                                            alt="Transparency"
                                        />
                                        <div>
                                            <h4>{t('transparency')}</h4>
                                            <p>
                                                {t('transparencyТехт')}
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <img
                                            className="icon"
                                            src="../../static/img/icons/shield.svg"
                                            alt="Protection"
                                        />
                                        <div>
                                            <h4>{t('protection')}</h4>
                                            <p>
                                                {t('protectionText')}
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <img
                                            className="icon"
                                            src="../../static/img/icons/report.svg"
                                            alt="Compliance"
                                        />
                                        <div>
                                            <h4>{t('compliance')}</h4>
                                            <p>
                                                {t('complianceТехт')}
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="right">
                            {/*<img src="../static/img/driven-to-deliver.gif" alt=""/>*/}
                            <Lottie
                                options={{
                                    loop: true,
                                    autoplay: true,
                                    animationData,
                                    rendererSettings: {
                                        preserveAspectRatio: "xMidYMid slice"
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section id="news" className="subscribe">
                <div className="container">
                    <div className="subscribe-content">
                        <h2 className="text-center">
                            {t('subscribeto')} <em>{t('newslatter')}</em>
                        </h2>
                        <p className="text-center">
                            {t('newslatterText')}
                        </p>
                        <div className="subscribe-field textfield">
                            <input type="text" placeholder={t('email')} />
                            <button className="btn secondary">{t('send')}</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact">
                <div className="container">
                    <div className="contact-content">
                        <h2>
                            <em>{t('contacte')} </em>{t('contactText1')}<br />
                            {t('contactText')}
                        </h2>
                        <Link href={`/${locale}/contact-us`}>
                            <button className="btn primary">{t('contact')}</button>
                        </Link>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Index;
