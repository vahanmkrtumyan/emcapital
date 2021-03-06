import React, { useEffect, useState } from "react";
import Link from "next/link";
import navigateTo from "./navigateTo";
import { useRouter } from "next/router";
import Modal from "react-modal";
import { LocalizationContext } from "./Localization";

let header = [
  {
    href: "home",
    name: "main",
  },
  {
    href: "offers",
    name: "specialization",
  },
  {
    href: "news",
    name: "subscribe",
  },
];
const _languages = ["hy", "ru", "en"];

const Header = ({ cls }) => {
  const router = useRouter();
  let [subPage, setSubPage] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  let [isSticky, setIsSticky] = useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [validation, setValidation] = React.useState(false);
  let [changeLocale, setChangeLocale] = React.useState("");
  let [toggle, setToggle] = React.useState(false);
  const { t, setLocale } = React.useContext(LocalizationContext);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setValidation(false);
  }

  const openBurger = () => {
    setOpenMenu(!openMenu);
  };

  const signInUser = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setValidation(true);
    }, 400);
  };

  useEffect(() => {
    setChangeLocale(window.location.pathname.slice(1, 3) || "en");
    let isStickyHeader = window.scrollY > 0;
    setIsSticky(isStickyHeader);
    window.addEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (
      router.asPath.includes("contact") ||
      router.asPath.includes("settings")
    ) {
      setSubPage(true);
    } else {
      setSubPage(false);
    }
  }, [router]);

  function onScroll(e) {
    let isStickyHeader = window.scrollY > 0;
    setIsSticky(isStickyHeader);
  }

  function onLocaleChange(e) {
    let value = e.currentTarget.id;
    if (value !== changeLocale) {
      setChangeLocale(value);
      setLocale(value);
    }
  }

  return (
    <>
      <header
        className={`${openMenu ? "opened" : cls} ${
          isSticky && !openMenu ? "sticky" : ""
        }`}
      >
        <div className="container">
          <div className="header-content">
            <a href={`/${changeLocale}`} className="logo">
              <img
                className="white-logo"
                src="../static/img/logo-white.svg"
                alt="EM capital"
              />
              <img
                className="purple-logo"
                src="../static/img/logo.svg"
                alt="EM capital"
              />
            </a>
            <nav>
              <button onClick={openBurger} className="burger no-style">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </button>
              <ul className="menu">
                {header.map((el, ind) => {
                  if (subPage) {
                    return (
                      <li key={ind}>
                        <Link href={`/${changeLocale}/#${el.href}`}>
                          {t(el.name)}
                        </Link>
                      </li>
                    );
                  } else {
                    return (
                      <li key={ind}>
                        <Link
                          onClick={navigate}
                          href={`${changeLocale}/#${el.href}`}
                        >
                          {t(el.name)}
                        </Link>
                      </li>
                    );
                  }
                })}
                <li>
                  <Link href={`/${changeLocale}/contact-us`}>
                    {t("contact")}
                  </Link>
                </li>
                <li>
                  <Link href={`/${changeLocale}/settings`}>
                    {t("settings")}
                  </Link>
                </li>
                <li style={{ cursor: "pointer" }}>
                  <a onClick={openModal}>{t("login")}</a>
                </li>
                <li
                  onClick={() => setToggle(!toggle)}
                  className={`locale-container ${
                    toggle ? "locale-container-open" : ""
                  }`}
                >
                  <ul>
                    <li>
                      <img src={`/static/img/${changeLocale}.svg`} alt="" />
                    </li>
                    {_languages.map(
                      (el, i) =>
                        el !== changeLocale && (
                          <li id={el} key={i} onClick={onLocaleChange}>
                            <img src={`/static/img/${el}.svg`} alt="" />
                          </li>
                        )
                    )}
                  </ul>
                </li>
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
            <h2 className="text-center">{t("signIn")}</h2>
            <button className="close" onClick={closeModal}>
              <img src="/static/img/icons/close.svg" alt="" />
            </button>
            <form>
              <div className={`${validation ? "error" : ""} textfield`}>
                <label htmlFor="surname">{t("emailUp")}</label>
                <input id="surname" type="text" />
              </div>
              <div className={`${validation ? "error" : ""} textfield`}>
                <label htmlFor="email">{t("password")}</label>
                <input id="email" type="email" />
                {validation && <p className="error-msg">{t("wrong")}</p>}
              </div>
              <button onClick={signInUser} className="btn primary">
                {t("signInButton")}
              </button>
            </form>
          </div>
        </Modal>
      </header>
      <a
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        href="#banner"
        className={`scroll-to-top ${isSticky ? "show" : ""}`}
      >
        <img src="../static/img/icons/up-arrow.svg" alt="scroll top" />
      </a>
    </>
  );

  function navigate(e) {
    if (openMenu) {
      setOpenMenu(false);
    }
    navigateTo(e);
  }
};

export default Header;
