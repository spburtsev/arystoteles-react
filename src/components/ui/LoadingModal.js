import { Fragment } from 'react';
import { createPortal } from 'react-dom';
import LoadingSpinner from './LoadingSpinner';
import classes from './LoadingModal.module.css';

const LoadingModal = () => {
  const portalElement = document.getElementById('blocker');

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
