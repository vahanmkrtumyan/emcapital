import React from "react";
import Layout from '../../components/Layout';
import Link from "next/link";
import { LocalizationContext } from "../../components/Localization";
import {useRouter} from "next/router";


const ContactUs = () => {
    const { t } = React.useContext(LocalizationContext);
    const router = useRouter();
    const  { locale } = router.query;
    return (
        <Layout cls={'invert-header'}>
            <section className='secondary-banner'>
                <div className="container">
                    <div className="secondary-banner-content">
                        <h3>Հետադարձ կապ</h3>
                        <ul className="breadcrumbs">
                            <li>
                                <Link href={`/${locale}`}><a>Գլխավոր</a></Link>
                            </li>
                            <li>
                                <Link href={`/${locale}/contact-us`}><a>Հետադարձ կապ</a></Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </section>
            <section className='contact-section'>
                <div className="container-sm">
                    <h1 className='secondary text-center'>Ինչպես  կարող ենք<br/> ձեզ <em>օգնել</em></h1>
                    <form>
                        <div className='child-half'>
                            <div className='textfield'>
                                <label htmlFor="name">Անուն</label>
                                <input id='name' type="text"/>
                            </div>
                            <div className='textfield'>
                                <label htmlFor="surname">Ազգանուն</label>
                                <input id='surname' type="text"/>
                            </div>
                        </div>
                        <div className='textfield'>
                            <label htmlFor="email">Էլ․ հասցե</label>
                            <input id='email' type="email"/>
                        </div>
                        <div className='textfield'>
                            <label htmlFor="message">Հաղորդագրություն</label>
                            <textarea id='message'></textarea>
                        </div>
                        <button className='btn primary'>Ուղարկել</button>
                    </form>
                </div>

            </section>
            <section className='contact-map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.021526642514!2d44.51623891564395!3d40.186334377542835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abce19fef5f71%3A0x307635d599d60cc!2s69%20Teryan%20St%2C%20Yerevan%200009%2C%20Armenia!5e0!3m2!1sen!2s!4v1583694385237!5m2!1sen!2s" frameBorder="0"></iframe>
            </section>
        </Layout>
    );
};

export default ContactUs;
