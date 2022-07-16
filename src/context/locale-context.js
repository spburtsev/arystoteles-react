import React, { useState } from 'react';
import localization from '../resources/localization';
import AppLocale from '../lib/enums/AppLocale';

const LocaleContext = React.createContext({
  locale: AppLocale.English,
  localizationObj: localization,
  setLocale: (_locale) => {},
});

export const LocaleContextProvider = (props) => {
  const [locale, setLocale] = useState(AppLocale.English);
  localization.setLanguage(locale);

  const localeChangeHandler = (locale) => {
    setLocale(locale);
  };

  const contextValue = {
    locale,
    localizationObj: localization,
    setLocale: localeChangeHandler,
  };

  return (
    <LocaleContext.Provider value={contextValue}>
      {props.children}
    </LocaleContext.Provider>
  );
};

export default LocaleContext;
