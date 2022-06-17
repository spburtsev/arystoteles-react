import useLocale from '../../../hooks/use-locale';
import classes from './BackupItem.module.css';

const BackupItem = ({ fileName, createdAt, method, system, createdBy }) => {
  const { strings } = useLocale('backups');

  return (
    <li className={classes.item}>
      <div className={classes.content}>
        <div className={classes.summary}>
          <h3>{`${fileName}`}</h3>
          <small>{`${strings.createdAt}: ${createdAt}`}</small>
        </div>
        <div className={classes.actions}>
          <button>{strings.details}</button>
          <button>{strings.restore}</button>
        </div>
      </div>
    </li>
  );
};
export default BackupItem;
