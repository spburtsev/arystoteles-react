import useLocale from '../../../hooks/use-locale';
import mapFrequency from '../../../lib/helpers/map-frequency';
import classes from './FrequencyTag.module.css';

const FrequencyTag = ({ frequency }) => {
  const { strings } = useLocale('activities');
  const mappedFrequency = mapFrequency(frequency);
  return <span className={classes.tag}>{strings[mappedFrequency]}</span>;
};
export default FrequencyTag;
