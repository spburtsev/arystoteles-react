import useLocale from '../../hooks/use-locale';
import classes from './CommonSection.module.css';

const CommonSection = () => {
  const { strings } = useLocale('profilePage');

  return (
    <section className={classes.profile}>
      <h1>{strings.myProfile}</h1>
    </section>
  );
};
export default CommonSection;
