import useAuth from '../../hooks/use-auth';
import useLocale from '../../hooks/use-locale';
import { useQuery } from 'react-query';
import { getOrganizationSelf } from '../../lib/api/organization';
import LoadingSpinner from '../ui/LoadingSpinner';
import classes from './OrganizationInfo.module.css';

const OrganizationInfo = () => {
  const { token } = useAuth();
  const { strings } = useLocale('profilePage');

  const { isLoading, data } = useQuery(
    ['orgSelf'],
    getOrganizationSelf(token),
    {
      onError: (err) => alert(err.message),
    },
  );
  const { profile } = data ? data : {};
  return (
    <section className={classes.profile}>
      <h1>{strings.yourOrganizationProfile}</h1>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className={classes.control}>
          <label>{strings.title}</label>
          <p>{profile.name}</p>
          <label>{strings.description}</label>
          <p>{profile.description}</p>
          <label>{strings.address}</label>
          <p>{profile.address}</p>
          <label>{strings.phone}</label>
          <p>{profile.phone}</p>
          <label>{strings.email}</label>
          <p>{profile.email}</p>
        </div>
      )}
      <div className={classes.action}>
        <button>{strings.edit}</button>
      </div>
    </section>
  );
};
export default OrganizationInfo;
