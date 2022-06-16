import CommonSection from './CommonSection';
import ChangePasswordForm from './ChangePasswordForm';
import useAuth from '../../hooks/use-auth';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { setProfile } from '../../context/profile-slice';
import { createGetMeRequest } from '../../lib/api/user';
import classes from './UserProfile.module.css';

const UserProfile = () => {
  const auth = useAuth();
  const dispatch = useDispatch();

  const { isLoading } = useQuery(
    'self-profile',
    createGetMeRequest(auth.token),
    {
      onError: (err) => {
        alert(err.message);
      },
      onSuccess: (data) => {
        dispatch(setProfile(data.data));
      },
    },
  );

  return (
    <div className={classes.wrapper}>
      <CommonSection isLoading={isLoading} />
      <hr />
      <ChangePasswordForm />
    </div>
  );
};
export default UserProfile;
