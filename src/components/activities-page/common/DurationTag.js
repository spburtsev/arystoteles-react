import useLocale from '../../../hooks/use-locale';
import classes from './DurationTag.module.css';

const DurationTag = ({ duration }) => {
  const { strings } = useLocale('activities');
  return <span className={classes.tag}>{`${duration} ${strings.min}`}</span>;
};
export default DurationTag;
