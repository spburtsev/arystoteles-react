import { useQuery } from 'react-query';
import { useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/use-auth';
import useLocale from '../../../hooks/use-locale';
import { getChildren, fetchMyChildren } from '../../../lib/api/child';
import { Fragment } from 'react';
import LoadingSpinner from '../../ui/LoadingSpinner';
import ChildItem from './ChildItem';
import UserRole from '../../../lib/enums/UserRole';
import classes from './ChildrenList.module.css';

const ChildrenList = () => {
  const { token, role } = useAuth();
  const { strings } = useLocale('children');
  const { push } = useHistory();
  const fetchFn = role === UserRole.Caregiver ? fetchMyChildren : getChildren;
  const { data, isLoading } = useQuery('children', fetchFn(token), {
    onError: (err) => alert(err.message),
  });
  const items = isLoading ? null : data.data || data.children;
  const totalItems = isLoading ? '...' : data.results || data.total;

  console.log(data);

  const newClickHandler = (event) => {
    event.preventDefault();
    push('/children/new');
  };

  return (
    <Fragment>
      <div className={classes.actions}>
        <h4>{`${strings.total}: ${totalItems}`}</h4>
        {role === UserRole.Caregiver && (
          <button onClick={newClickHandler}>{strings.createNew}</button>
        )}
      </div>
      <ul className={classes.list}>
        {isLoading ? (
          <LoadingSpinner />
        ) : totalItems ? (
          items.map((item) => {
            if (role === UserRole.Caregiver) {
              item = item.child;
            }
            return <ChildItem key={item._id} id={item._id} {...item} />;
          })
        ) : null}
      </ul>
    </Fragment>
  );
};
export default ChildrenList;
