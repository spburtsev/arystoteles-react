import useLocale from '../../../hooks/use-locale';
import { useHistory } from 'react-router-dom';
import classes from './MedicsTable.module.css';

const MedicsTable = ({ medics }) => {
  const { strings } = useLocale('medics');
  const { push } = useHistory();

  const clickHandler = (id) => () => {
    push(`/medics/${id}`);
  };
  medics = medics.filter((medic) => medic.isConfirmed);
  return (
    <table className={classes.table}>
      <thead>
        <tr>
          <th>{strings.email}</th>
          <th>{strings.firstName}</th>
          <th>{strings.lastName}</th>
          <th>{strings.title}</th>
        </tr>
      </thead>
      <tbody>
        {medics.map((medic) => (
          <tr key={medic._id} onClick={clickHandler(medic._id)}>
            <td>{medic.user.email}</td>
            <td>{medic.user.firstName}</td>
            <td>{medic.user.lastName}</td>
            <td>{medic.title}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default MedicsTable;
