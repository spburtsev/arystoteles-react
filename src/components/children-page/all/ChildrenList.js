import { useQuery } from 'react-query';
import { useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/use-auth';
import useLocale from '../../../hooks/use-locale';
import { getQuestions } from '../../../lib/api/question';
import { Fragment } from 'react';
import LoadingSpinner from '../../ui/LoadingSpinner';
import ChildItem from './ChildItem';
import classes from './ChildrenList.module.css';

const ChildrenList = () => {
  const { token } = useAuth();
  const { strings } = useLocale('children');
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
  console.log(items);

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
            <ChildItem key={item._id} id={item._id} {...item} />
          ))
        )}
      </ul>
    </Fragment>
  );
};
export default ChildrenList;
