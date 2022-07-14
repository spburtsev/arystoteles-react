import { Fragment } from 'react';
import useLocale from '../../../hooks/use-locale';
import useAuth from '../../../hooks/use-auth';
import { useQuery } from 'react-query';
import { getOrganization } from '../../../lib/api/organization';
import AboutSection from '../details/AboutSection';
import CommonInfo from '../details/CommonInfo';
import Description from '../details/Description';
import LoadingSpinner from '../../ui/LoadingSpinner';
import MedicsTable from './MedicsTable';

const OrganizationDetails = ({ organizationId }) => {
  const { strings } = useLocale('organizationDetailsPage');
  const { token } = useAuth();
  const { data, isLoading, error } = useQuery(
    ['organization', organizationId],
    getOrganization(token, organizationId),
    {
      onError: (err) => alert(err.message),
    },
  );

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

  return (
    <Fragment>
      <Description title={org.name} />
      <CommonInfo phone={org.phone} address={org.address} email={org.email} />
      <AboutSection>
        <p>{org.description ? org.description : strings.noInfo}</p>
      </AboutSection>
      <MedicsTable medics={org.medics} />
    </Fragment>
  );
};
export default OrganizationDetails;
