import { useContext } from 'react';
import LocaleContext from '../../context/locale-context';
import InfoSection from './InfoSection';
import classes from './HomePageContent.module.css';

const HomePageContent = () => {
  const { localizationObj } = useContext(LocaleContext);
  const locale = localizationObj.homePage;

  return (
    <section className={classes.home}>
      <h1>{locale.welcome}</h1>
      {/* <InfoSection
        title={locale.whatIsKuk.title}
        text={locale.whatIsKuk.text}
        bgVariant="dark"
      /> */}
    </section>
  );
};

export default HomePageContent;
