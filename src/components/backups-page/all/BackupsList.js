import useLocale from '../../../hooks/use-locale';
import { useQuery, useMutation } from 'react-query';
import useAuth from '../../../hooks/use-auth';
import BackupItem from './BackupItem';
import { Fragment, useState } from 'react';
import LoadingSpinner from '../../ui/LoadingSpinner';
import {
  getBackupsRequest,
  createBackupRequest,
  restoreRequest,
} from '../../../lib/api/backup';
import NewBackup from './NewBackup';
import BackupDetailsModal from './BackupDetailsModal';
import RestoreModal from './RestoreModal';
import classes from './BackupsList.module.css';
import Search from './Search';

const BackupsList = () => {
  const { token } = useAuth();
  const { strings } = useLocale('backups');
  const [sortAsc, setSortAsc] = useState(false);
  const [search, setSearch] = useState(false);
  const [modal, setModal] = useState(null);
  const [selected, setSelected] = useState(null);

  const { data, isLoading, refetch } = useQuery(
    ['backups', sortAsc, search],
    getBackupsRequest(token, sortAsc, search),
  );
  const newBackupMutation = useMutation(createBackupRequest, {
    onSuccess: () => {
      setModal(null);
      refetch();
    },
    onError: (err) => alert(err.message),
  });
  const restoreMutation = useMutation(restoreRequest, {
    onSuccess: () => {
      setModal(null);
      refetch();
    },
    onError: (err) => alert(err.message),
  });

  const modalHandlerCreator = (val) => (event) => {
    event.preventDefault();
    setModal(val);
  };

  const detailsHandlerCreator = (backup) => (event) => {
    event.preventDefault();
    setSelected(backup);
    setModal('details');
  };

  const restoreHandlerCreator = (backup) => (event) => {
    event.preventDefault();
    setSelected(backup);
    setModal('restore');
  };

  const sortToggleHandler = (event) => {
    event.preventDefault();
    setSortAsc((prev) => !prev);
  };

  const searchHandler = (val) => {
    setSearch(val);
  };

  console.log(data);
  return (
    <Fragment>
      {modal === 'new' && (
        <NewBackup
          onClose={modalHandlerCreator(null)}
          mutation={newBackupMutation}
        />
      )}
      {modal === 'details' && (
        <BackupDetailsModal
          onClose={modalHandlerCreator(null)}
          backup={selected}
        />
      )}
      {modal === 'restore' && (
        <RestoreModal
          fileName={selected.fileName}
          onClose={modalHandlerCreator(null)}
          mutation={restoreMutation}
        />
      )}
      <Search onSearch={searchHandler} />
      <div className={classes.actions}>
        <h4>{`${strings.total}: ${isLoading ? '...' : data.total}`}</h4>
        <button onClick={sortToggleHandler}>{strings.toggleSort}</button>
        <button onClick={modalHandlerCreator('new')}>
          {strings.createNew}
        </button>
      </div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <ul className={classes.list}>
          {data.backups.map((item) => (
            <BackupItem
              key={item._id}
              id={item._id}
              {...item}
              onDetailsClick={detailsHandlerCreator(item)}
              onRestoreClick={restoreHandlerCreator(item)}
            />
          ))}
        </ul>
      )}
    </Fragment>
  );
};
export default BackupsList;
