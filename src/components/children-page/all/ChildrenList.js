import { useQuery } from 'react-query';
import useAuth from '../../../hooks/use-auth';
import useLocale from '../../../hooks/use-locale';
import { getChildren } from '../../../lib/api/child';
import { Fragment } from 'react';
import LoadingSpinner from '../../ui/LoadingSpinner';
import ChildItem from './ChildItem';
import classes from './ChildrenList.module.css';

const ChildrenList = () => {
  const { token } = useAuth();
  const { strings } = useLocale('children');
  const { data, isLoading } = useQuery('children', getChildren(token), {
    onError: (err) => alert(err.message),
  });
  const items = isLoading ? null : data.data;
  const totalItems = isLoading ? '...' : data.results;

  console.log(items);

  return (
    <Fragment>
      <div className={classes.actions}>
        <h4>{`${strings.total}: ${totalItems}`}</h4>
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
