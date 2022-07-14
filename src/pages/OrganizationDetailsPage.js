import useAuth from '../hooks/use-auth';
import { useParams } from 'react-router-dom';
import OrganizationDetails from '../components/organizations-pages/details/OrganizationDetails';
import OrganizationCaregiverView from '../components/organizations-pages/caregiver-view/OrganizationDetails';
import UserRole from '../lib/enums/UserRole';

const OrganizationDetailsPage = () => {
  const { organizationId } = useParams();
  const { role } = useAuth();
  return role === UserRole.Medic ? (
    <OrganizationDetails organizationId={organizationId} />
  ) : (
    <OrganizationCaregiverView organizationId={organizationId} />
  );
};
export default OrganizationDetailsPage;
