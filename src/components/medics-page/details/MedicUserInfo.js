import useLocale from '../../../hooks/use-locale';
import classes from './MedicUserInfo.module.css';

const MedicUserInfo = ({ user }) => {
  const { strings } = useLocale('medics');
  const fullName = `${user.firstName} ${user.lastName}`;

  return (
    <section className={classes.user}>
      <h4>{strings.fullName}</h4>
      <p>{fullName}</p>
      <h4>{strings.email}</h4>
      <p>{user.email}</p>
      <h4>{strings.country}</h4>
      <p>{user.country}</p>
    </section>
  );
};
export default MedicUserInfo;
