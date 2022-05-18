import React, { useState } from 'react';
import localization from '../resources/localization';

const LocaleContext = React.createContext({
  locale: 'uk',
  localizationObj: localization,
  setLocale: (_locale) => {},
});

export const LocaleContextProvider = (props) => {
  const [locale, setLocale] = useState('uk');
  localization.setLanguage(locale);

  const localeChangeHandler = (locale) => {
    setLocale(locale);
  };

  const contextValue = {
    locale,
    localizationObj: localization,
    changeLocale: localeChangeHandler,
  };

  return (
    <LocaleContext.Provider value={contextValue}>
      {props.children}
    </LocaleContext.Provider>
  );
};

export default LocaleContext;
