import { Link } from 'react-router-dom';
import useLocale from '../../hooks/use-locale';
import classes from './GoBack.module.css';

const GoBack = ({ route }) => {
  const { strings } = useLocale('common');

  return (
    <Link className={classes.link} to={route}>
      <span>{strings.back}</span>
    </Link>
  );
};
export default GoBack;
