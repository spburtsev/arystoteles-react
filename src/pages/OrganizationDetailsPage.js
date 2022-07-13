import { useParams } from 'react-router-dom';

import OrganizationDetails from '../components/organizations-pages/details/OrganizationDetails';

const OrganizationDetailsPage = () => {
  const { organizationId } = useParams();
  return <OrganizationDetails organizationId={organizationId} />;
};
export default OrganizationDetailsPage;
