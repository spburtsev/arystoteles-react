import useAuth from '../../../hooks/use-auth';
import useLocale from '../../../hooks/use-locale';
import { useQuery, useMutation } from 'react-query';
import { getMedic, confirmMedic } from '../../../lib/api/medic';
import { Fragment } from 'react';
import GoBack from '../../ui/GoBack';
import LoadingSpinner from '../../ui/LoadingSpinner';
import MedicUserInfo from './MedicUserInfo';
import ConfirmationStatus from './ConfirmationStatus';
import classes from './MedicDetails.module.css';

const MedicDetails = ({ medicId }) => {
  const { token } = useAuth();
  const { strings } = useLocale('medics');
  const { data, isLoading, refetch } = useQuery(
    ['medic', medicId],
    getMedic(token, medicId),
    {
      onError: (err) => alert(err.message),
    },
  );
  const confirmMutation = useMutation(confirmMedic, {
    onSuccess: () => refetch(),
    onError: (err) => alert(err.message),
  });

  const confirmHandler = (event) => {
    event.preventDefault();
    confirmMutation.mutate({
      token,
      medicId,
    });
  };

  console.log(data);
  const { data: medic } = data || {};

  return (
    <Fragment>
      <GoBack route="/medics" />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <section className={classes.info}>
          <MedicUserInfo user={medic.user} />
          <h4>{strings.title}</h4>
          <p>{medic.title}</p>
          <ConfirmationStatus confirmed={medic.isConfirmed} />
          {!medic.isConfirmed && (
            <button className={classes.btn} onClick={confirmHandler}>
              {strings.confirm}
            </button>
          )}
        </section>
      )}
    </Fragment>
  );
};
export default MedicDetails;
