import { Fragment } from 'react';
import useLocale from '../../../hooks/use-locale';
import useAuth from '../../../hooks/use-auth';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { getOrganization } from '../../../lib/api/organization';
import { medicGetSelf, medicUpdateSelf } from '../../../lib/api/medic';
import AboutSection from './AboutSection';
import CommonInfo from './CommonInfo';
import Description from './Description';
import LoadingSpinner from '../../ui/LoadingSpinner';
import UserRole from '../../../lib/enums/UserRole';

const OrganizationDetails = ({ organizationId }) => {
  const { strings } = useLocale('organizationDetailsPage');
  const { token, role } = useAuth();
  const queryClient = useQueryClient();
  const { data, isLoading, error } = useQuery(
    ['organization', organizationId],
    getOrganization(token, organizationId),
    {
      onError: (err) => alert(err.message),
    },
  );
  const medicQuery = useQuery(['medicSelf'], medicGetSelf(token), {
    onError: (err) => alert(err.message),
    enabled: role === UserRole.Medic,
  });
  const medicMut = useMutation(medicUpdateSelf, {
    onSuccess: (data) => {
      queryClient.setQueryData(['medicSelf'], data);
    },
  });

  if (isLoading) {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!data.data) {
    return <p>{strings.notFound}</p>;
  }

  const { data: org } = data;

  const assignHandler = () => {
    const id =
      medicQuery.data?.data?.organization === organizationId
        ? organizationId
        : null;
    medicMut.mutate({
      token,
      body: {
        organization: id,
      },
    });
  };

  return (
    <Fragment>
      <Description title={org.name} />
      <CommonInfo phone={org.phone} address={org.address} email={org.email} />
      <AboutSection>
        <p>{org.description ? org.description : strings.noInfo}</p>
      </AboutSection>
      {role === UserRole.Medic && medicQuery.isLoading ? (
        <p>...</p>
      ) : role === UserRole.Medic && medicQuery.isLoading ? (
        <button className="btn" onClick={assignHandler}>
          {medicQuery.data.data.organization === organizationId
            ? 'assign'
            : 'unassign'}
        </button>
      ) : null}
    </Fragment>
  );
};
export default OrganizationDetails;
