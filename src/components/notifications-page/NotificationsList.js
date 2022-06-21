import { useQuery } from 'react-query';
import useAuth from '../../hooks/use-auth';
import useLocale from '../../hooks/use-locale';
import { getNotifications } from '../../lib/api/notification';
import { Fragment } from 'react';
import LoadingSpinner from '../ui/LoadingSpinner';
import NotificationItem from './NotificationItem';
import classes from './NotificationsList.module.css';

const NotificationsList = () => {
  const { token } = useAuth();
  const { strings } = useLocale('notifications');
  const { data, isLoading } = useQuery(
    'notifications',
    getNotifications(token),
    {
      onError: (err) => {
        alert(err.message);
      },
    },
  );
  const items = isLoading ? null : data.data.notifications;
  const totalItems = isLoading ? '...' : data.data.total;
  console.log(data);
  console.log(items);

  return (
    <Fragment>
      <div className={classes.actions}>
        <h3>{`${strings.total}: ${totalItems}`}</h3>
      </div>
      <ul className={classes.list}>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          items.map((item) => (
            <NotificationItem key={item._id} id={item._id} {...item} />
          ))
        )}
      </ul>
    </Fragment>
  );
};
export default NotificationsList;
