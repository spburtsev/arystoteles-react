import useLocale from '../../../hooks/use-locale';
import { useQuery } from 'react-query';
import useAuth from '../../../hooks/use-auth';
import BackupItem from './BackupItem';
import { Fragment } from 'react';
import LoadingSpinner from '../../ui/LoadingSpinner';
import { createGetBackupsRequest } from '../../../lib/api/backup';
import classes from './BackupsList.module.css';

const BackupsList = () => {
  const { token } = useAuth();
  const { strings } = useLocale('backups');
  const { data, isLoading } = useQuery(
    ['backups'],
    createGetBackupsRequest(token),
  );

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <Fragment>
      <div className={classes.actions}>
        <h1>{`${strings.total}: ${data.total}`}</h1>
        <button>{strings.createNew}</button>
      </div>

      <ul className={classes.list}>
        {data.backups.map((item) => (
          <BackupItem key={item._id} id={item._id} {...item} />
        ))}
      </ul>
    </Fragment>
  );
};
export default BackupsList;
