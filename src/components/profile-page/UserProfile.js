import CommonSection from './CommonSection';
import ChangePasswordForm from './ChangePasswordForm';
import classes from './UserProfile.module.css';

const UserProfile = () => {
  return (
    <div className={classes.wrapper}>
      <CommonSection />
      <hr />
      <ChangePasswordForm />
    </div>
  );
};
export default UserProfile;
