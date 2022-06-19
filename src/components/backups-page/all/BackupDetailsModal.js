import { Fragment } from 'react';
import { createPortal } from 'react-dom';
import useLocale from '../../../hooks/use-locale';
import AdjustmentIcon from '../../icons/AdjustmentIcon';
import classes from './BackupDetailsModal.module.css';

const BackupDetailsModal = ({ onClose, backup }) => {
  const portalElement = document.getElementById('modal');
  const { strings } = useLocale('backups');
  const { system, createdBy, createdAt, method } = backup;

  return (
    <Fragment>
      {createPortal(
        <div className={classes.backdrop} onClick={onClose} />,
        portalElement,
      )}
      {createPortal(
        <div className={classes.modal}>
          {system ? (
            <h1>{strings.createdBySystem}</h1>
          ) : (
            <Fragment>
              <h1>{`${strings.createdBy}:`}</h1>
              <section className={classes.usr}>
                <p>{createdBy.email}</p>
                <p>{`${createdBy.firstName} ${createdBy.lastName}`}</p>
              </section>
            </Fragment>
          )}
          <p>{`${strings.createdAt}: ${new Date(
            createdAt,
          ).toLocaleString()}`}</p>
          <div className={classes.method}>
            <AdjustmentIcon />
            <p>{`${strings.method}: ${method}`}</p>
          </div>
        </div>,
        portalElement,
      )}
    </Fragment>
  );
};
export default BackupDetailsModal;
