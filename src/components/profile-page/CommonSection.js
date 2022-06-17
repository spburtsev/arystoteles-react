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
        <table>
          <tbody>
            <tr>
              <td>{strings.firstName}</td>
              <td>{usrData.firstName}</td>
            </tr>
            <tr>
              <td>{strings.lastName}</td>
              <td>{usrData.lastName}</td>
            </tr>
            <tr>
              <td>{strings.email}</td>
              <td>{usrData.email}</td>
            </tr>
          </tbody>
        </table>
      )}
    </section>
  );
};
export default CommonSection;
