import useAuth from '../../hooks/use-auth';
import useLocale from '../../hooks/use-locale';
import { useHistory } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Fragment } from 'react';
import { fetchAllUsers } from '../../lib/api/user';
import classes from './UsersTable.module.css';

const UsersTable = () => {
  const { token } = useAuth();
  const { strings } = useLocale('medics');
  const { push } = useHistory();
  const fetchReq = useQuery(['users'], fetchAllUsers(token), {
    onError: (err) => alert(err.message),
  });

  const { results, data } = fetchReq.data || {};
  const isLoading = fetchReq.isLoading;
  const clickHandler = (id) => () => {
    push(`/users/${id}`);
  };

  return (
    <Fragment>
      <h4>{`${strings.total}: ${results ? results : '...'}`}</h4>
      <table className={classes.table}>
        <thead>
          <tr>
            <th>{strings.email}</th>
            <th>{strings.firstName}</th>
            <th>{strings.lastName}</th>
            <th>{strings.role}</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td>...</td>
              <td>...</td>
              <td>...</td>
              <td>...</td>
            </tr>
          ) : (
            data.map((usr) => (
              <tr key={usr._id} onClick={clickHandler(usr._id)}>
                <td>{usr.email}</td>
                <td>{usr.firstName}</td>
                <td>{usr.lastName}</td>
                <td>{strings[usr.role]}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </Fragment>
  );
};
export default UsersTable;
