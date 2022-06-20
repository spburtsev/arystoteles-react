import { Fragment, useState } from 'react';
import useAuth from '../../../hooks/use-auth';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import useLocale from '../../../hooks/use-locale';
import {
  getActivityRequest,
  updateActivityRequest,
  deleteActivityRequest,
} from '../../../lib/api/activity';
import { useHistory } from 'react-router-dom';
import AppLocale from '../../../lib/enums/AppLocale';
import Emoji from '../../ui/Emoji';
import LoadingSpinner from '../../ui/LoadingSpinner';
import CategoryTag from '../common/CategoryTag';
import DurationTag from '../common/DurationTag';
import FrequencyTag from '../common/FrequencyTag';
import EditActivity from './EditActivity';
import DeleteActivity from './DeleteActivity';
import GoBack from '../../ui/GoBack';
import classes from './ActivityDetails.module.css';

const ActivityDetails = ({ activityId }) => {
  const { token } = useAuth();
  const { strings } = useLocale('activities');
  const queryClient = useQueryClient();
  const history = useHistory();
  const { data, isLoading } = useQuery(
    ['activity', activityId],
    getActivityRequest(token, activityId),
    {
      onError: () => history.replace('/activities'),
      retry: false,
    },
  );
  const modalHandlerCreator = (modal) => (event) => {
    event.preventDefault && event.preventDefault();
    setModal(modal);
  };

  const updateMutation = useMutation(updateActivityRequest, {
    onSuccess: (data) => {
      setModal(null);
      queryClient.setQueryData(['activity', activityId], data);
    },
    onError: (err) => alert(err.message),
  });
  const deleteMutation = useMutation(deleteActivityRequest, {
    onError: (err) => alert(err.message),
    onSuccess: () => {
      setModal(null);
      history.replace('/activities');
    },
  });

  const [modal, setModal] = useState(null);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Fragment>
      {modal === 'edit' && (
        <EditActivity
          mutation={updateMutation}
          onClose={modalHandlerCreator(null)}
          activity={data.data}
        />
      )}
      {modal === 'delete' && (
        <DeleteActivity
          onClose={modalHandlerCreator(null)}
          activityId={data.data._id}
          mutation={deleteMutation}
        />
      )}
      <GoBack route="/activities" />
      <section className={classes.summary}>
        <h1>
          <Emoji label="UA" symbol="🇺🇦" />
          <br />
          {data.data.title[AppLocale.Ukrainian]}
        </h1>
        <h1>
          <Emoji label="UA" symbol="🇺🇸" />
          <br />
          {data.data.title[AppLocale.English]}
        </h1>
        <div className={classes.tags}>
          <span>
            <CategoryTag category={data.data.category} />
            <FrequencyTag frequency={data.data.frequency} />
            <DurationTag duration={data.data.duration} />
          </span>
        </div>
      </section>
      <section className={classes.description}>
        <div>
          {data.data.description[AppLocale.English]}
          <hr />
          {data.data.description[AppLocale.Ukrainian]}
        </div>
      </section>
      <section className={classes.actions}>
        <button className={classes.btn} onClick={modalHandlerCreator('edit')}>
          {strings.edit}
        </button>
        <button
          className={classes.delete}
          onClick={modalHandlerCreator('delete')}
        >
          {strings.delete}
        </button>
      </section>
    </Fragment>
  );
};
export default ActivityDetails;
