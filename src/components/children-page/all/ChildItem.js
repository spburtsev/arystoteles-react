import { Link } from 'react-router-dom';
import ageInMonths from '../../../lib/helpers/age-in-months';
import classes from './ChildItem.module.css';

const ChildItem = (props) => {
  console.log(props);
  return (
    <li className={classes.item}>
      <div className={classes.content}>
        <Link to={`children/${props._id}`}>
          <p>{`${props.firstName}, ${ageInMonths(props.birthDate)(null)}`}</p>
        </Link>
      </div>
    </li>
  );
};
export default ChildItem;
