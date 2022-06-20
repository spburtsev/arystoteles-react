import useLocale from '../../hooks/use-locale';
import cn from 'classnames';
import classes from './NotificationItem.module.css';

const NotificationItem = (props) => {
  const { current } = useLocale('notifications');
  const { title, text, type } = props;
  return (
    <li className={cn(classes.item, classes[type])}>
      <div className={classes.content}>
        <h2>{title[current]}</h2>
        <p>{text[current]}</p>
      </div>
    </li>
  );
};
export default NotificationItem;
