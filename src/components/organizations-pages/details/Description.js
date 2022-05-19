import classes from './Description.module.css';

const Description = (props) => (
  <section className={classes.description}>
    <h1>{props.title}</h1>
  </section>
);
export default Description;
