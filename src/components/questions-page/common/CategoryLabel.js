import useLocale from '../../../hooks/use-locale';
import classes from './CategoryLabel.module.css';

const CategoryLabel = ({ category }) => {
  const { strings } = useLocale('questions');
  return <span className={classes.tag}>{strings[category]}</span>;
};
export default CategoryLabel;
