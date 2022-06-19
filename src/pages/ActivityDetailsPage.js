import { useParams } from 'react-router-dom';
import ActivityDetails from '../components/activities-page/details/ActivityDetails';

const ActivityDetailsPage = () => {
  const { activityId } = useParams();

  return <ActivityDetails activityId={activityId} />;
};
export default ActivityDetailsPage;
