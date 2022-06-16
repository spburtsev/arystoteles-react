import CommonSection from './CommonSection';
import ChangePasswordForm from './ChangePasswordForm';
import useAuth from '../../hooks/use-auth';
import { useQuery } from 'react-query';
import { createGetMeRequest } from '../../lib/api/user';
import classes from './UserProfile.module.css';

const UserProfile = () => {
  const auth = useAuth();
  useQuery('self-profile', createGetMeRequest(auth.token), {
    onError: (err) => {
      alert(err.message);
    },
    onSuccess: (data) => {
      console.log(data);
    },
  });

  return (
    <div className={classes.wrapper}>
      <CommonSection />
      <hr />
      <ChangePasswordForm />
    </div>
  );
};

export default UserProfile;
