import classes from './UserProfileWrapper.module.css';

const UserProfileWrapper = (props) => (
  <div className={classes.wrapper}>{props.children}</div>
);
export default UserProfileWrapper;
