import { Fragment, useState } from 'react';
import useAuth from '../../../hooks/use-auth';
import { useQuery } from 'react-query';
import { createActivityRequest } from '../../../lib/api/activity';
import AppLocale from '../../../lib/enums/AppLocale';
import Emoji from '../../ui/Emoji';
import LoadingSpinner from '../../ui/LoadingSpinner';
import CategoryTag from '../common/CategoryTag';
import DurationTag from '../common/DurationTag';
import FrequencyTag from '../common/FrequencyTag';
import EditActivity from './EditActivity';
import classes from './ActivityDetails.module.css';

const ActivityDetails = ({ activityId }) => {
  const { token } = useAuth();
  const { data, isLoading } = useQuery(
    ['activity', activityId],
    createActivityRequest(token, activityId),
  );
  const [modal, setModal] = useState(null);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const modalHandlerCreator = (modal) => (event) => {
    event.preventDefault();
    setModal(modal);
  };

  return (
    <Fragment>
      {modal === 'edit' && (
        <EditActivity
          onClose={modalHandlerCreator(null)}
          activity={data.data}
        />
      )}
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
          Edit
        </button>
        <button
          className={classes.delete}
          onClick={modalHandlerCreator('delete')}
        >
          Delete
        </button>
      </section>
    </Fragment>
  );
};
export default ActivityDetails;
