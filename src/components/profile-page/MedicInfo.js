import useAuth from '../../hooks/use-auth';
import useLocale from '../../hooks/use-locale';
import { useQuery } from 'react-query';
import { medicGetSelf } from '../../lib/api/medic';
import { getOrganization } from '../../lib/api/organization';
import LoadingSpinner from '../ui/LoadingSpinner';
import classes from './MedicInfo.module.css';
import { Fragment } from 'react';
import ConfirmationStatus from './ConfirmationStatus';

const MedicInfo = () => {
  const { token } = useAuth();
  const { strings } = useLocale('profilePage');

  const { isLoading, data } = useQuery(['medicSelf'], medicGetSelf(token), {
    onError: (err) => alert(err.message),
  });
  const orgId = data?.profile?.organization;
  const organizationQuery = useQuery(
    ['organization'],
    getOrganization(orgId, token),
    {
      enabled: !!orgId,
      onError: (err) => alert(err.message),
      useErrorBoundary: true,
    },
  );
  if (organizationQuery.data) {
    console.log(organizationQuery.data);
  }

  return (
    <Fragment>
      <section className={classes.profile}>
        <h1>{strings.yourMedicProfile}</h1>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div className={classes.control}>
            <label>{`${strings.medicalTitle}:`}</label>
            <p>{data.profile.title}</p>
          </div>
        )}
        <div className={classes.action}>
          <button>{strings.edit}</button>
        </div>
      </section>
      {orgId && organizationQuery.isLoading ? (
        <section className={classes.profile}>
          <h1>{strings.yourOrganization}</h1>
          <LoadingSpinner />
        </section>
      ) : orgId && organizationQuery.data ? (
        <section className={classes.profile}>
          <h1>{strings.yourOrganization}</h1>
          <div className={classes.control}>
            <label>{`${strings.title}:`}</label>
            <p>{organizationQuery.data.data.name}</p>
            <ConfirmationStatus confirmed={data.profile.confirmed} />
          </div>
        </section>
      ) : null}
    </Fragment>
  );
};
export default MedicInfo;
