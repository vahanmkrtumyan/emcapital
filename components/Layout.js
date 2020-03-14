import React from  'react';
import Head from 'next/head';
import Header from "./header";
import Footer from "./footer";
import "../assets/styles/style.scss"


const Layout = (props) => {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/static/img/logo.jpg" />
                <title>EM capital</title>
            </Head>
            <Header cls={props.cls} />
            {props.children}
            <Footer/>
        </>
        )

};

export default Layout;
