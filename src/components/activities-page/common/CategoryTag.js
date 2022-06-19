import useLocale from '../../../hooks/use-locale';
import mapCategory from '../../../lib/helpers/map-category';
import classes from './CategoryTag.module.css';

const CategoryTag = ({ category }) => {
  const { strings } = useLocale('activities');
  const mappedCategory = mapCategory(category);
  return <span className={classes.tag}>{strings[mappedCategory]}</span>;
};
export default CategoryTag;
