import useLocale from '../../hooks/use-locale';
import cn from 'classnames';
import classes from './ConfirmationStatus.module.css';

const ConfirmationStatus = ({ confirmed }) => {
  const { strings } = useLocale('profilePage');
  return (
    <span
      className={cn(
        classes.status,
        confirmed ? classes.confirmed : classes.unconfirmed,
      )}
    >
      {strings[confirmed ? 'confirmed' : 'unconfirmed']}
    </span>
  );
};
export default ConfirmationStatus;
