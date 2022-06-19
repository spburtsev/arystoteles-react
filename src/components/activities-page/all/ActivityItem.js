import useLocale from '../../../hooks/use-locale';
import { Link } from 'react-router-dom';
import ArrowRightIcon from '../../icons/ArrowRightIcon';
import CategoryTag from '../common/CategoryTag';
import FrequencyTag from '../common/FrequencyTag';
import DurationTag from '../common/DurationTag';
import classes from './ActivityItem.module.css';

const ActivityItem = (props) => {
  const { strings, current } = useLocale('activities');
  const exploreLink = `/activities/${props._id}`;

  return (
    <li className={classes.item}>
      <div className={classes.content}>
        <span>
          <p>{props.title[current]}</p>
          <section>
            <CategoryTag category={props.category} />
            <FrequencyTag frequency={props.frequency} />
            <DurationTag duration={props.duration} />
          </section>
        </span>
      </div>
      <div className={classes.actions}>
        <Link className="btn" to={exploreLink}>
          <span>{strings.explore}</span>
          <span className={classes.icon}>
            <ArrowRightIcon />
          </span>
        </Link>
      </div>
    </li>
  );
};
export default ActivityItem;
