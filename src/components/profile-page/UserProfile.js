import CommonSection from './CommonSection';
import ChangePasswordForm from './ChangePasswordForm';
import useAuth from '../../hooks/use-auth';
import UserRole from '../../lib/enums/UserRole';
import classes from './UserProfile.module.css';
import { Fragment } from 'react';
import MedicInfo from './MedicInfo';

const UserProfile = () => {
  const { role } = useAuth();
  return (
    <div className={classes.wrapper}>
      <CommonSection />
      <hr />
      {role === UserRole.Medic && (
        <Fragment>
          <MedicInfo />
          <hr />
        </Fragment>
      )}
      <ChangePasswordForm />
    </div>
  );
};
export default UserProfile;
