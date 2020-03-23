import React, {useReducer, useState} from "react";
import Layout from '../../components/Layout';
import Link from "next/link";
import { LocalizationContext } from "../../components/Localization";
import {useRouter} from "next/router";


const ContactUs = () => {

    const [userInput, setUserInput] = useReducer(
        (state, newState) => ({...state, ...newState}),
        {
            name: '',
            surname: '',
            email: '',
            message: ''
        }
    );
    const [validation, setValidation] = useState(undefined);

    const handleChange = evt => {
        const { name, value} = evt.target;

        setUserInput({[name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(userInput.name && userInput.surname && userInput.email && userInput.message) {
            console.log('success');
            setValidation(1)
        } else {
            console.log('failed');
            setValidation(2)
        }

    };

    const { t } = React.useContext(LocalizationContext);
    const router = useRouter();
    const  { locale } = router.query;
    return (
        <Layout cls={'invert-header'}>
            <section className='secondary-banner'>
                <div className="container">
                    <div className="secondary-banner-content">
                        <h3>{t('contact')}</h3>
                        <ul className="breadcrumbs">
                            <li>
                                <Link href={`/${locale}`}><a>{t('main')}</a></Link>
                            </li>
                            <li>
                                <Link href={`/${locale}/contact-us`}><a>{t('contact')}</a></Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </section>
            <section className='contact-section'>
                <div className="container-sm">
                    <h1 className='secondary text-center'>{t('how')}<br/> {t('help')} <em> {t('you')} </em></h1>
                    <form onSubmit={handleSubmit}>
                        <div className='child-half'>
                            <div className={`${validation === 2 ? 'error' : ''}  textfield`}>
                                <label htmlFor="name">{t('name')}</label>
                                <input id='name' type="text" name='name' value={userInput.name} onChange={handleChange}/>
                            </div>
                            <div className={`${validation === 2 ? 'error' : ''} textfield`}>
                                <label htmlFor="surname">{t('surname')}</label>
                                <input id='surname' type="text" name='surname' value={userInput.surname} onChange={handleChange}/>
                            </div>
                        </div>
                        <div className={`${validation === 2 ? 'error' : ''} textfield`}>
                            <label htmlFor="email">{t('email')}</label>
                            <input id='email' type="email" name='email' value={userInput.email} onChange={handleChange}/>
                        </div>
                        <div className={`${validation === 2 ? 'error' : ''} ${validation === 1 ? 'success' : ''} textfield`}>
                            <label htmlFor="message">{t('message')}</label>
                            <textarea id='message' name='message' value={userInput.message} onChange={handleChange}></textarea>
                            {validation === 2 && <p className='error-msg'>All fields are required!</p> }
                            {validation === 1 && <p className='success-msg'>Your message successfully has been sent!</p> }
                        </div>


                        <button className='btn primary'>{t('send')}</button>
                    </form>
                    <handleChange />
                </div>

            </section>
            <section className='contact-map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.021526642514!2d44.51623891564395!3d40.186334377542835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abce19fef5f71%3A0x307635d599d60cc!2s69%20Teryan%20St%2C%20Yerevan%200009%2C%20Armenia!5e0!3m2!1sen!2s!4v1583694385237!5m2!1sen!2s" frameBorder="0"></iframe>
            </section>
        </Layout>
    );
};

export default ContactUs;
