import useLocale from '../../hooks/use-locale';
import classes from './LocaleButtons.module.css';

const LocaleButtons = () => {
  const { set: setLocale, locales } = useLocale();

  const localeChangeHandlerCreator = (locale) => {
    return (event) => {
      event.preventDefault();
      setLocale(locale);
    };
  };

  return (
    <div className={classes.locales}>
      <button onClick={localeChangeHandlerCreator(locales.English)}>en</button>
      <button onClick={localeChangeHandlerCreator(locales.Ukrainian)}>
        uk
      </button>
    </div>
  );
};
export default LocaleButtons;
