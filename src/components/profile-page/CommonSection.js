import useAuth from '../../hooks/use-auth';
import classes from './CommonSection.module.css';

const CommonSection = () => {
  const authCtx = useAuth();

  return (
    <section className={classes.profile}>
      <h1>My Profile</h1>
      <h2>{`Role is: ${authCtx.role}`}</h2>
    </section>
  );
};
export default CommonSection;
