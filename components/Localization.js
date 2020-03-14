import React from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";

const configTranslations = require("../config/translations");

export const LocalizationContext = React.createContext();

export const LocalizationProvider = ({ children }) => {
  const [locale, setLocale] = React.useState("hy");

  const router = useRouter();

  React.useEffect(() => {
    if (router.asPath.includes("ru")) {
      setLocale("ru");
    } else if (router.asPath.includes("en")) {
      setLocale("en");
    } else {
      setLocale("hy");
    }
  }, [router.asPath]);

  //   console.log(locale);

  const t = label => configTranslations[locale][label] || label;

  return (
    <LocalizationContext.Provider value={{ locale, t }}>
      {children}
    </LocalizationContext.Provider>
  );
};

LocalizationProvider.getInitialProps = ({ query }) => {
  console.log({ query });
  return { query };
};
LocalizationProvider.propTypes = {
  children: PropTypes.any,
  locale: PropTypes.string
};

LocalizationProvider.defaultProps = {
  children: null,
  locale: null
};
