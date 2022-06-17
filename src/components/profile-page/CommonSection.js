import useLocale from '../../hooks/use-locale';
import useAuth from '../../hooks/use-auth';
import { useQuery } from 'react-query';
import LoadingSpinner from '../ui/LoadingSpinner';
import { createGetMeRequest } from '../../lib/api/user';
import classes from './CommonSection.module.css';

const CommonSection = () => {
  const { strings } = useLocale('profilePage');
  const { token } = useAuth();
  const { data, isLoading } = useQuery(
    'self-profile',
    createGetMeRequest(token),
    {
      onError: (err) => {
        alert(err.message);
      },
    },
  );

  const usrData = data ? data.data : {};

  return (
    <section className={classes.profile}>
      <h1>{strings.myProfile}</h1>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className={classes.control}>
          <label>{strings.firstName}</label>
          <p>{usrData.firstName}</p>

          <label>{strings.lastName}</label>
          <p>{usrData.lastName}</p>

          <label>{strings.email}</label>
          <p>{usrData.email}</p>
        </div>
      )}
      <div className={classes.action}>
        <button>{strings.edit}</button>
      </div>
    </section>
  );
};
export default CommonSection;
