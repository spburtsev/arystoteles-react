import { Fragment, createPortal } from 'react';
import LoadingSpinner from './LoadingSpinner';
import classes from './LoadingModal.module.css';

const LoadingModal = () => {
  const portalElement = document.getElementById('modal');

  return (
    <Fragment>
      {createPortal(<div className={classes.backdrop} />, portalElement)}
      {createPortal(
        <div className={classes.modal}>
          <LoadingSpinner />
        </div>,
        portalElement,
      )}
    </Fragment>
  );
};
export default LoadingModal;
