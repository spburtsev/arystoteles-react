import { useContext } from 'react';
import LocaleContext from '../../context/locale-context';
import classes from './HomePageContent.module.css';

const HomePageContent = () => {
  const { localizationObj } = useContext(LocaleContext);
  const locale = localizationObj.homePage;

  return (
    <section className={classes.home}>
      <h1>{locale.welcome}</h1>
    </section>
  );
};

export default HomePageContent;
