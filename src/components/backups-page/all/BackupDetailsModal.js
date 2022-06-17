import { Fragment } from 'react';
import { createPortal } from 'react-dom';
import useLocale from '../../../hooks/use-locale';
import classes from './BackupDetailsModal.module.css';

const BackupDetailsModal = ({ onClose, backup }) => {
  const portalElement = document.getElementById('modal');
  const { strings } = useLocale('backups');

  return (
    <Fragment>
      {createPortal(
        <div className={classes.backdrop} onClick={onClose} />,
        portalElement,
      )}
      {createPortal(
        <div className={classes.modal}>
          {backup.system ? <h1>{strings.system}</h1> : <p>usr</p>}
        </div>,
        portalElement,
      )}
    </Fragment>
  );
};
export default BackupDetailsModal;
