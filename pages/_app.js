// import App from 'next/app'
import React from "react";
import {
  LocalizationContext,
  LocalizationProvider,
} from "../components/Localization";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <LocalizationProvider>
        <Component {...pageProps} />
      </LocalizationProvider>
    </div>
  );
}

export default MyApp;
