import useAuth from '../hooks/use-auth';
import useLocale from '../hooks/use-locale';
import { useQuery, useMutation } from 'react-query';
import { useParams } from 'react-router-dom';
import { fetchChild, checkForNewScreening } from '../lib/api/child';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import ageInMonths from '../lib/helpers/age-in-months';
import { Fragment } from 'react';
import GoBack from '../components/ui/GoBack';

const ChildDetailsPage = () => {
  const { token } = useAuth();
  const { current, strings } = useLocale('childDetails');
  const { childId } = useParams();
  const { data, isLoading, refetch } = useQuery(
    ['child', childId],
    fetchChild(token, childId),
    {
      onError: (err) => alert(err.message),
    },
  );
  const mutScreenings = useMutation(checkForNewScreening, {
    onSuccess: refetch,
    onError: (_err) => alert(strings['noScreeningsAvailable']),
    retry: false,
  });
  const newScreeningHandler = (event) => {
    event.preventDefault();
    mutScreenings.mutate({
      token,
      childId,
    });
  };

  if (isLoading) {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  const childData = data?.data?.child || null;
  const screenings = [];
  for (const rel of childData?.relations || []) {
    for (const screen of rel.screenings || []) {
      screenings.push(screen);
    }
  }
  if (!childData) {
    return <p>Child not found</p>;
  }
  console.log(screenings);
  return (
    <Fragment>
      <GoBack route="/children" />
      <h4
        style={{
          marginTop: '12px',
        }}
      >{`${childData.firstName}, ${ageInMonths(childData.birthDate)(null)} ${
        strings['months']
      }`}</h4>
      <hr />
      <h4>{strings['screenings']}</h4>
      <button className="btn" onClick={newScreeningHandler}>
        {strings['checkIfNewScreeningAvailable']}
      </button>
      <hr />
      <ul>
        {screenings
          .sort((a, b) => new Date(a.createdAt) < new Date(b.createdAt))
          .map((screening) => (
            <li
              key={screening._id}
              className="g__wrapper"
              style={{
                backgroundColor: '#1a1a1a',
                color: screening.result ? '#fff' : '#ee3',
                padding: '10px',
                margin: '10px',
                borderRadius: '8px',
                maxWidth: '500px',
              }}
            >
              {new Date(screening.createdAt).toLocaleDateString(current)}
              {' - '}
              {screening.result
                ? strings[screening.result]
                : strings['NoResults']}
              <button className="btn">{strings['edit']}</button>
            </li>
          ))}
      </ul>
    </Fragment>
  );
};
export default ChildDetailsPage;
