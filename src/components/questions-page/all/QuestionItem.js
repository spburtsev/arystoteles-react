import useLocale from '../../../hooks/use-locale';
import { Link } from 'react-router-dom';
import CategoryLabel from '../common/CategoryLabel';
import classes from './QuestionItem.module.css';

const QuestionItem = (props) => {
  const { current } = useLocale('questions');

  return (
    <li className={classes.item}>
      <div className={classes.content}>
        <Link to={`questions/${props._id}`}>
          <p>{props.text[current]}</p>
        </Link>
        <span>
          <CategoryLabel category={props.category} />
        </span>
      </div>
    </li>
  );
};
export default QuestionItem;
