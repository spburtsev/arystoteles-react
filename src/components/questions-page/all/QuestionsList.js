import { useQuery } from 'react-query';
import { useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/use-auth';
import useLocale from '../../../hooks/use-locale';
import { getQuestions } from '../../../lib/api/question';
import { Fragment } from 'react';
import LoadingSpinner from '../../ui/LoadingSpinner';
import QuestionItem from './QuestionItem';
import classes from './QuestionsList.module.css';

const QuestionsList = () => {
  const { token } = useAuth();
  const { strings } = useLocale('questions');
  const { push } = useHistory();
  const { data, isLoading } = useQuery('questions', getQuestions(token), {
    onError: (err) => {
      alert(err.message);
    },
  });
  const items = isLoading ? null : data.data;
  const totalItems = isLoading ? '...' : data.results;

  const newClickHandler = (event) => {
    event.preventDefault();
    push('/questions/new');
  };

  return (
    <Fragment>
      <div className={classes.actions}>
        <h1>{`${strings.total}: ${totalItems}`}</h1>
        <button onClick={newClickHandler}>{strings.createNew}</button>
      </div>
      <ul className={classes.list}>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          items.map((item) => (
            <QuestionItem key={item._id} id={item._id} {...item} />
          ))
        )}
      </ul>
    </Fragment>
  );
};
export default QuestionsList;
