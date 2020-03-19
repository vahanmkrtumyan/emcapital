import React, {useEffect, useState} from 'react';
import Link from "next/link";
import navigateTo from "./navigateTo";
import {useRouter} from "next/router";
import Modal from 'react-modal';
import { LocalizationContext } from "./Localization";

let header = [
    {
        href: "home",
        name: "main",
    }, {
        href: "offers",
        name: "specialization",
    }, {
        href: "news",
        name: "subscribe",
    },
];

const Header = ({cls}) => {

    const router = useRouter();
    let [contact, setContact] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    let [isSticky, setIsSticky] = useState(false);
    const [modalIsOpen,setIsOpen] = React.useState(false);
    const [validation,setValidation] = React.useState(false);

    const { t } = React.useContext(LocalizationContext);
    const { locale } = router.query;

    function openModal() {
        setIsOpen(true);
    }

    function closeModal(){
        setIsOpen(false);
        setValidation(false)

    }

    const openBurger = () => {
        setOpenMenu(!openMenu);
    };

    const signInUser = (e) => {
        e.preventDefault();
        setTimeout(()=>{
            setValidation(true)
        }, 400)

    };



    useEffect(() => {
        let isStickyHeader = window.scrollY > 0;
        setIsSticky(isStickyHeader);
        window.addEventListener("scroll", onScroll);

    }, []);

    useEffect(() => {
        if (router.asPath.includes("contact")) {
            setContact(true)
        } else {
            setContact(false)
        }
    }, [router]);

    function onScroll(e) {
        let isStickyHeader = window.scrollY > 0;
        setIsSticky(isStickyHeader)
    }


    return (
        <>
            <header className={`${openMenu ? "opened" : cls} ${isSticky && !openMenu ? "sticky" : ""}`}>
                <div className="container">
                    <div className="header-content">
                        <a href={`/${locale}`} className='logo'>
                            <img className='white-logo' src="../static/img/logo-white.svg" alt="EM capital"/>
                            <img className='purple-logo' src="../static/img/logo.svg" alt="EM capital"/>
                        </a>
                        <nav>
                            <button onClick={openBurger} className='burger no-style'>
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                            </button>
                            <ul className='menu'>
                                {
                                    header.map((el, ind) => {
                                        if (contact) {
                                            return <li key={ind}><Link href={`/${locale}/#${el.href}`}><a>{t(el.name)}</a></Link></li>
                                        } else {
                                            return <li key={ind}><a onClick={navigate}
                                                                    href={`${locale}/#${el.href}`}>{t(el.name)}</a></li>
                                        }
                                    })
                                }
                                <li><Link href={`/${locale}/contact-us`}><a>{t('contact')}</a></Link></li>
                                <li><a onClick={openModal}>{t('login')}</a></li>
                            </ul>
                        </nav>

                    </div>
                </div>

                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Example Modal"
                    ariaHideApp={false}
                >
                    <div>
                        <h2 className='text-center'>Մուտք գործել</h2>
                        <button className='close' onClick={closeModal}><img src="/static/img/icons/close.svg" alt=""/></button>
                        <form>
                            <div className={`${validation ? 'error' : ''} textfield`}>
                                <label htmlFor="surname">Էլ․ հասցե</label>
                                <input id='surname' type="text"/>
                            </div>
                            <div className={`${validation ? 'error' : ''} textfield`}>
                                <label htmlFor="email">Գաղտնաբառ</label>
                                <input id='email' type="email"/>
                                {validation && <p className='error-msg'>սխալ Էլ․ հասցե կամ գաղտնաբառ</p>}
                            </div>
                            <button onClick={signInUser} className='btn primary'>Մուտք</button>
                        </form>
                    </div>

                </Modal>

            </header>
            <a onClick={() => window.scrollTo({top: 0, behavior: "smooth"})} 
                href="#banner" className={`scroll-to-top ${isSticky ? "show" : ""}`}>
                <img src="../static/img/icons/up-arrow.svg" alt="scroll top"/>
            </a>
        </>
    );

    function navigate(e) {
        if (openMenu) {
            setOpenMenu(false);
        }
        navigateTo(e)
    }
};

export default Header;
