import { useContext } from 'react';
import LocaleContext from '../context/locale-context';
import AppLocale from '../lib/enums/AppLocale';

const useLocale = (localizationPart) => {
  const localeCtx = useContext(LocaleContext);
  let { locale, localizationObj, setLocale } = localeCtx;
  if (localizationPart) {
    localizationObj = localizationObj[localizationPart];
  }

  return {
    current: locale,
    strings: localizationObj,
    set: setLocale,
    locales: AppLocale,
  };
};
export default useLocale;
