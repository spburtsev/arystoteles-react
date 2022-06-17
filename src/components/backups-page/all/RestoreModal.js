import { Fragment } from 'react';
import { createPortal } from 'react-dom';
import useLocale from '../../../hooks/use-locale';
import classes from './RestoreModal.module.css';

const RestoreModal = ({ name, onClose }) => {
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
          <h1>{strings.areYouSure}</h1>
          <div className={classes.actions}>
            <button onClick={onClose}>{strings.submit}</button>
            <button onClick={onClose}>{strings.cancel}</button>
          </div>
        </div>,
        portalElement,
      )}
    </Fragment>
  );
};
export default RestoreModal;
