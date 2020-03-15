import React from "react";
import Layout from "../components/Layout";
import animationData from "../static/json/data";
import Lottie from "react-lottie";
import Link from "next/link";
// import {
//   LocalizationProvider,
//   LocalizationContext
// } from "../components/Localization";

const Index = () => {
  // const { t } = React.useContext(LocalizationContext);

  return (
    <Layout cls="">
      <section id="home" className="banner">
        <div className="banner-content">
          <div className="container">
            <h1>
              {/*{t("Welcome to React")}*/}
              <span>
                Բարձրորակ ներդրումային <em>լուծումներ</em>{" "}
              </span>
              <span>և կայուն անվտանգություն</span>
            </h1>
          </div>
        </div>
      </section>
      <section className="up-box grey-bg">
        <div className="container">
          <div className="box">
            <div>
              <h3>
                Ապահովում ենք ձեր հարստության ավելացումը և օգնում կազմակերպել
                ձեր ֆինանսները
              </h3>
            </div>
            <div>
              <img src="../static/img/benifits-1.png" alt="Increasing value" />
              <h3>Արժեքի մեծացում</h3>
              <p>
                Մեր պրոֆեսիոնալ մասնագետները հոգ կտանեն ձեր միջոցների օպտիմալ
                տեղաբաշխանը, որը կբերի ձեր ունեցվածքի կայուն աճին։
              </p>
            </div>
            <div>
              <img src="../static/img/benifits-2.png" alt="Optimal vision" />
              <h3>Օպտիմալ տեսողություն</h3>
              <p>
                Մենք անընդհատ հետեւում ենք շուկայում տեղի ունեցող վերջին
                զարգացումներին եւ կատարում ենք կանխատեսումներ, որպեսզի հասնենք
                լավագույն արդյունքին։
              </p>
            </div>
            <Link href="/contact-us">
              <button className="btn primary">Հետադարձ կապ</button>
            </Link>
          </div>
        </div>
      </section>
      <section id="offers" className="offer grey-bg">
        <div className="container">
          <div className="section-title text-center">
            <h2>Մեր առաջարկները</h2>
          </div>
          <ul className="card-wrap">
            <li className="card">
              <h3>Միջոցների տեղաբաշխում</h3>
              <p>
                Մտածելով ձեր միջոցների օպտիմալ բաշխման մասին՝ մենք անընդմեջ
                ուսումնասիրում ենք շուկան և փնտրում լավագույն տարբրակները
                ներդրումների կատարելու համար։
              </p>
              <img src="../static/img/undraw_folder_39kl.jpg" alt="Finances" />
            </li>
            <li className="card">
              <h3>Խորհրդատվություն</h3>
              <p>
                Մեր գործընկերներին մենք տրմադրում ենք բարձրակարգ
                խորհրդավություն, տրամադրում ենք հուսալի և արդիական
                տեղեկատվություն՝ ընդունելու ճիշտ և արդյունավետ որոշումներ։
              </p>
              <img src="../static/img/we-offer-2-1.png" alt="Consulting" />
            </li>
            <li className="card">
              <h3>Հուսալիություն</h3>
              <p>
                Մեր առաջարկած լուծումները հետապնդում են ոչ միայն բարձր
                եկամտաբերության ապահովում,այլ նաև հուսալիություն, ռիսկի
                կառավարելի մակարդակ։ Ներդրումները կատարվում են՝ գնահատելով դրանց
                հետ կապված բոլոր ռիսկերը։
              </p>
              <img src="../static/img/insurance.jpg" alt="Insurance" />
            </li>
          </ul>
        </div>
      </section>
      <section className="section-with-img">
        <div className="container">
          <div className="section-with-img-content">
            <div className="left">
              <div className="section-title">
                <h2>Ուղղված է ապահովելու</h2>
                <h2 className="secondary">Ամբողջական համագործակցություն</h2>
              </div>
              <ul className="benefits">
                <li>
                  <div>
                    <img
                      className="icon"
                      src="../static/img/icons/search.svg"
                      alt="Transparency"
                    />
                    <div>
                      <h4>Թափանցիկություն</h4>
                      <p>
                        Մեր գործունեության մեջ մենք ապահովում ենք
                        թափանցիկությունը և հուսալիությունը
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div>
                    <img
                      className="icon"
                      src="../static/img/icons/shield.svg"
                      alt="Protection"
                    />
                    <div>
                      <h4>Պաշտպանություն</h4>
                      <p>
                        Մենք հոգ ենք տանում ձեր ներդումների պաշտպանվածության
                        մասին՝ ձեռնարկելով դրա համա անհրաժեշտ քայլերը
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div>
                    <img
                      className="icon"
                      src="../static/img/icons/report.svg"
                      alt="Compliance"
                    />
                    <div>
                      <h4>Համապատասխանություն</h4>
                      <p>
                        Մեր գործըթացները համապատասխանում են ոլորտի բարձրագույն
                        ստանդարտներին՝ ապահովելով որակ և որոշումների ընդունման
                        արդյունավետություն
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
              Բաժանորդագրվեք մեր <em>տեղեկագրին</em>
            </h2>
            <p className="text-center">
              Դուք կստանաք ամենաթարմ տեղեկատվությունը մեր ծրագրերի,
              ներդրումների, գործընկերների և այլ կարևոր տեղեկատվության
              վերաբերյալ:
            </p>
            <div className="subscribe-field textfield">
              <input type="text" placeholder="Էլ․ հասցե" />
              <button className="btn secondary">Ուղարկել</button>
            </div>
          </div>
        </div>
      </section>
      <section className="contact">
        <div className="container">
          <div className="contact-content">
            <h2>
              <em>Կապվեք </em>մեզ հետ ստանալու <br />
              լրացուցիչ տեղեկատվություն
            </h2>
            <Link href="/contact-us">
              <button className="btn primary">Հետադարձ կապ</button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
