import { Fragment } from 'react';
import { createPortal } from 'react-dom';
import useLocale from '../../../hooks/use-locale';
import useAuth from '../../../hooks/use-auth';
import LoadingModal from '../../ui/LoadingModal';
import classes from './RestoreModal.module.css';

const RestoreModal = ({ fileName, onClose, mutation }) => {
  const portalElement = document.getElementById('modal');
  const { strings } = useLocale('backups');
  const { token } = useAuth();

  const submitHandler = (event) => {
    event.preventDefault();
    mutation.mutate({ token, fileName });
  };

  return (
    <Fragment>
      {mutation.isLoading && <LoadingModal />}
      {createPortal(
        <div className={classes.backdrop} onClick={onClose} />,
        portalElement,
      )}
      {createPortal(
        <div className={classes.modal}>
          <h1>{strings.areYouSure}</h1>
          <div className={classes.actions}>
            <button className={classes.submit} onClick={submitHandler}>
              {strings.submit}
            </button>
            <button className={classes.cancel} onClick={onClose}>
              {strings.cancel}
            </button>
          </div>
        </div>,
        portalElement,
      )}
    </Fragment>
  );
};
export default RestoreModal;
