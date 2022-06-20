import useLocale from '../../hooks/use-locale';
import cn from 'classnames';
import classes from './NotificationItem.module.css';

const NotificationItem = (props) => {
  const { current } = useLocale('notifications');

  return (
    <li className={classes.item}>
      <div className={cn(classes.content, classes[props.category])}>
        <h2>{props.title[current]}</h2>
        <p>{props.text[current]}</p>
      </div>
    </li>
  );
};
export default NotificationItem;
