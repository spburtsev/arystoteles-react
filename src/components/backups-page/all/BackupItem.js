import { Fragment } from 'react';
import { useState } from 'react';
import useLocale from '../../../hooks/use-locale';
import BackupDetailsModal from './BackupDetailsModal';
import classes from './BackupItem.module.css';

const BackupItem = ({ fileName, createdAt, method, system, createdBy }) => {
  const { strings } = useLocale('backups');
  const [modal, setModal] = useState(null);

  const createModalHandler = (modal) => (event) => {
    event.preventDefault();
    setModal(modal);
  };

  const modalCloseHandler = () => {
    setModal(null);
  };

  return (
    <Fragment>
      {modal === 'details' && (
        <BackupDetailsModal
          onClose={modalCloseHandler}
          backup={{
            method,
            system,
            createdBy,
            createdAt,
          }}
        />
      )}
      <li className={classes.item}>
        <div className={classes.content}>
          <div className={classes.summary}>
            <h3>{`${fileName}`}</h3>
            <small>{`${strings.createdAt}: ${createdAt}`}</small>
          </div>
          <div className={classes.actions}>
            <button onClick={createModalHandler('details')}>
              {strings.details}
            </button>
            <button>{strings.restore}</button>
          </div>
        </div>
      </li>
    </Fragment>
  );
};
export default BackupItem;
