import classes from './AboutSection.module.css';

const AboutSection = (props) => (
  <section className={classes.about}>{props.children}</section>
);
export default AboutSection;
