import { Fragment } from 'react';
import { createPortal } from 'react-dom';
import useAuth from '../../../hooks/use-auth';
import useLocale from '../../../hooks/use-locale';
import useInput from '../../../hooks/use-input';
import LoadingModal from '../../ui/LoadingModal';
import cn from 'classnames';
import classes from './NewBackup.module.css';

const NewBackup = ({ onClose, mutation }) => {
  const portalElement = document.getElementById('modal');

  const { token } = useAuth();
  const { strings } = useLocale('backups');
  const fileName = useInput(Date.now());

  const submitHandler = (event) => {
    event.preventDefault();
    mutation.mutate({ token, fileName: fileName.value });
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
          <form>
            <div className={classes.control}>
              <label htmlFor="fileName">{strings.fileName}</label>
              <input
                type="text"
                id="fileName"
                value={fileName.value}
                onChange={fileName.change}
                onBlur={fileName.blur}
              />
            </div>
          </form>
          <div className={classes.actions}>
            <button
              className={cn(classes.btn, classes.submit)}
              onClick={submitHandler}
            >
              {strings.submit}
            </button>
            <button
              onClick={onClose}
              className={cn(classes.btn, classes.cancel)}
            >
              {strings.cancel}
            </button>
          </div>
        </div>,
        portalElement,
      )}
    </Fragment>
  );
};
export default NewBackup;
