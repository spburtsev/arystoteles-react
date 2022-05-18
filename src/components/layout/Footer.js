import { useContext } from 'react';
import LocaleContext from '../../context/locale-context';
import classes from './Footer.module.css';

const Footer = () => {
  const localeCtx = useContext(LocaleContext);

  const localeChangeHandlerCreator = (locale) => {
    return (event) => {
      event.preventDefault();
      localeCtx.changeLocale(locale);
    };
  };

  return (
    <footer className={classes.footer}>
      <p>&copy; 2022, Kuk</p>
      <div className={classes.locales}>
        <button onClick={localeChangeHandlerCreator('en')}>en</button>
        <button onClick={localeChangeHandlerCreator('uk')}>uk</button>
      </div>
    </footer>
  );
};
export default Footer;
