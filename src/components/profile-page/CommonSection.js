import useLocale from '../../hooks/use-locale';
import { useSelector } from 'react-redux';
import { selectProfile } from '../../context/profile-slice';
import classes from './CommonSection.module.css';
import LoadingSpinner from '../ui/LoadingSpinner';

const CommonSection = ({ isLoading }) => {
  const { strings } = useLocale('profilePage');
  const profile = useSelector(selectProfile);
  console.log(profile);

  return (
    <section className={classes.profile}>
      <h1>{strings.myProfile}</h1>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <table>
          <tbody>
            <tr>
              <td>{strings.firstName}</td>
              <td>{profile.firstName}</td>
            </tr>
            <tr>
              <td>{strings.lastName}</td>
              <td>{profile.lastName}</td>
            </tr>
            <tr>
              <td>{strings.email}</td>
              <td>{profile.email}</td>
            </tr>
          </tbody>
        </table>
      )}
    </section>
  );
};
export default CommonSection;
