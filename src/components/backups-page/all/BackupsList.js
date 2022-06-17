import useLocale from '../../../hooks/use-locale';
import { useQuery } from 'react-query';
import { useAuth } from './hooks/use-auth';
import BackupItem from './BackupItem';
import { Fragment } from 'react';
import LoadingSpinner from '../../ui/LoadingSpinner';
import classes from './BackupsList.module.css';

const BackupsList = () => {
  const { token } = useAuth();
  const { strings } = useLocale('backups');
  const { data, isLoading } = useQuery(['backups'], () => {});
  const items = data ? data.data : [];

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <Fragment>
      <h1>{`${strings.total}: ${data.total}`}</h1>
      <ul className={classes.list}>
        {items.map((item) => (
          <BackupItem key={item._id} id={item._id} {...item} />
        ))}
      </ul>
    </Fragment>
  );
};
export default BackupsList;
