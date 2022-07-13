import useAuth from '../../../hooks/use-auth';
import useLocale from '../../../hooks/use-locale';
import { useHistory } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Fragment } from 'react';
import { getOrganizationMedics } from '../../../lib/api/medic';
import classes from './MedicsTable.module.css';

const MedicsTable = () => {
  const { token } = useAuth();
  const { strings } = useLocale('medics');
  const { push } = useHistory();

  const { data, isLoading } = useQuery(
    ['selfMedics'],
    getOrganizationMedics(token),
    {
      onError: (err) => alert(err.message),
    },
  );

  const { total, medics } = data || {};
  const clickHandler = (id) => () => {
    push(`/medics/${id}`);
  };

  return (
    <Fragment>
      <h4>{`${strings.total}: ${total ? total : '...'}`}</h4>
      <table className={classes.table}>
        <thead>
          <tr>
            <th>{strings.email}</th>
            <th>{strings.firstName}</th>
            <th>{strings.lastName}</th>
            <th>{strings.title}</th>
            <th>{strings.status}</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td>...</td>
              <td>...</td>
              <td>...</td>
              <td>...</td>
              <td>...</td>
            </tr>
          ) : (
            medics.map((medic) => (
              <tr key={medic._id} onClick={clickHandler(medic._id)}>
                <td>{medic.user.email}</td>
                <td>{medic.user.firstName}</td>
                <td>{medic.user.lastName}</td>
                <td>{medic.title}</td>
                <td>
                  {medic.isConfirmed ? strings.confirmed : strings.unconfirmed}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </Fragment>
  );
};
export default MedicsTable;
