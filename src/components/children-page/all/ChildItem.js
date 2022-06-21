import useLocale from '../../../hooks/use-locale';
import { Link } from 'react-router-dom';
import classes from './ChildItem.module.css';

const ChildItem = (props) => {
  const { current } = useLocale('children');

  return (
    <li className={classes.item}>
      <div className={classes.content}>
        <Link to={`children/${props._id}`}>
          <p>{props.text[current]}</p>
        </Link>
      </div>
    </li>
  );
};
export default ChildItem;
