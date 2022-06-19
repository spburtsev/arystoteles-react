import { useQuery, useMutation } from 'react-query';
import useAuth from '../../../hooks/use-auth';
import useLocale from '../../../hooks/use-locale';
import {
  getActvitiesRequest,
  createActvityRequest,
} from '../../../lib/api/activity';
import { Fragment, useState } from 'react';
import LoadingSpinner from '../../ui/LoadingSpinner';
import ActivityItem from './ActivityItem';
import NewActivity from './NewActivity';
import classes from './ActivitiesList.module.css';

const ActivitiesList = () => {
  const { token } = useAuth();
  const { strings } = useLocale('activities');
  const [modal, setModal] = useState(false);
  const { data, isLoading, refetch } = useQuery(
    'activities',
    getActvitiesRequest(token),
    {
      onError: (err) => {
        alert(err.message);
      },
    },
  );
  const newActivityMutation = useMutation(createActvityRequest, {
    onError: (err) => alert(err.message),
    onSuccess: () => {
      setModal(false);
      refetch();
    },
  });
  if (isLoading) {
    return <LoadingSpinner />;
  }
  const items = data.data;

  const modalHandler = (event) => {
    event.preventDefault();
    setModal((prevState) => !prevState);
  };

  return (
    <Fragment>
      {modal && (
        <NewActivity onClose={modalHandler} mutation={newActivityMutation} />
      )}
      <div className={classes.actions}>
        <h1>{`${strings.total}: ${data.results}`}</h1>
        <button onClick={modalHandler}>{strings.createNew}</button>
      </div>
      <ul className={classes.list}>
        {items.map((item) => (
          <ActivityItem key={item._id} id={item._id} {...item} />
        ))}
      </ul>
    </Fragment>
  );
};
export default ActivitiesList;
