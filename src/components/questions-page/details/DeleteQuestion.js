import { Fragment } from 'react';
import { createPortal } from 'react-dom';
import useLocale from '../../../hooks/use-locale';
import useAuth from '../../../hooks/use-auth';
import LoadingModal from '../../ui/LoadingModal';
import cn from 'classnames';
import classes from './DeleteQuestion.module.css';

const DeleteQuestion = ({ activityId, onClose, mutation }) => {
  const portalElement = document.getElementById('modal');
  const { strings } = useLocale('activities');
  const { token } = useAuth();

  const submitHandler = (event) => {
    event.preventDefault();
    mutation.mutate({ token, activityId });
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
          <h3>{strings.areYouSureToDelete}</h3>
          <div className={classes.actions}>
            <button
              onClick={submitHandler}
              className={cn(classes.btn, classes.submit)}
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
export default DeleteQuestion;
