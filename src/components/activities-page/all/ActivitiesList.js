import { useQuery } from 'react-query';
import useAuth from '../../../hooks/use-auth';
import { createActvitiesRequest } from '../../../lib/api/activity';
import LoadingSpinner from '../../ui/LoadingSpinner';
import ActivityItem from './ActivityItem';
import classes from './ActivitiesList.module.css';

const ActivitiesList = () => {
  const { token } = useAuth();
  const { data, isLoading } = useQuery(
    'activities',
    createActvitiesRequest(token),
    {
      onError: (err) => {
        alert(err.message);
      },
    },
  );
  if (isLoading) {
    return <LoadingSpinner />;
  }

  const items = data.data;
  console.log(items);

  return (
    <ul className={classes.list}>
      {items.map((item) => (
        <ActivityItem key={item._id} id={item._id} {...item} />
      ))}
    </ul>
  );
};
export default ActivitiesList;
