import React from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";

const configTranslations = require("../config/translations");

export const LocalizationContext = React.createContext();

export const LocalizationProvider = ({ children }) => {
  const [locale, setLocale] = React.useState("ru");
  const router = useRouter();

  React.useEffect(() => {
    if (router && router.query && router.query.locale) {
      setLocale(router.query.locale);
    }
  }, [router.query.locale]);

  const t = label => configTranslations[locale][label] || label;

  return (
    <LocalizationContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocalizationContext.Provider>
  );
};

LocalizationProvider.getInitialProps = ({ query }) => {
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
