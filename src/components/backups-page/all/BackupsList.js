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

const BackupsList = () => {
  const { token } = useAuth();
  const { strings } = useLocale('backups');
  const [modal, setModal] = useState(null);
  const [selected, setSelected] = useState(null);

  const { data, isLoading, refetch } = useQuery(
    ['backups'],
    getBackupsRequest(token),
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

  return isLoading ? (
    <LoadingSpinner />
  ) : (
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
      <div className={classes.actions}>
        <h1>{`${strings.total}: ${data.total}`}</h1>
        <button onClick={modalHandlerCreator('new')}>
          {strings.createNew}
        </button>
      </div>

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
    </Fragment>
  );
};
export default BackupsList;
