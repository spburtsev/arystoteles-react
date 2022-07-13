import useLocale from '../../../hooks/use-locale';
import classes from './BackupItem.module.css';

const BackupItem = ({
  fileName,
  createdAt,
  onDetailsClick,
  onRestoreClick,
}) => {
  const { strings, current } = useLocale('backups');
  const creationDate = new Date(createdAt);
  const displayedCreationDate = `${creationDate.toLocaleDateString(
    current,
  )}, ${creationDate.toLocaleTimeString(current)}`;

  return (
    <li className={classes.item}>
      <div className={classes.content}>
        <div className={classes.summary}>
          <h3>{`${fileName}`}</h3>
          <small>{`${strings.createdAt}: ${displayedCreationDate}`}</small>
        </div>
        <div className={classes.actions}>
          <button onClick={onDetailsClick}>{strings.details}</button>
          <button onClick={onRestoreClick}>{strings.restore}</button>
        </div>
      </div>
    </li>
  );
};
export default BackupItem;
