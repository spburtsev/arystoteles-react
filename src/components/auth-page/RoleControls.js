import useLocale from '../../hooks/use-locale';
import ParentsIcon from '../icons/ParentsIcon';
import OrganizationIcon from '../icons/OrganizationIcon';
import UserRole from '../../lib/enums/UserRole';
import cn from 'classnames';
import classes from './RoleControls.module.css';

const RoleControls = (props) => {
  const { selectedRole, onSelectRole } = props;
  const { strings: locale } = useLocale('authPage');

  const roleChangeHandlerCreator = (role) => {
    return (event) => {
      event.preventDefault();
      onSelectRole(role);
    };
  };

  return (
    <section className={classes.controls}>
      <div
        className={cn(
          classes.control,
          selectedRole === UserRole.OrganizationProxy && classes.active,
        )}
      >
        <OrganizationIcon />
        <button onClick={roleChangeHandlerCreator(UserRole.OrganizationProxy)}>
          {locale.forPublicHealthOrgnizations}
        </button>
      </div>
      <div
        className={cn(
          classes.control,
          selectedRole === UserRole.Parent && classes.active,
        )}
      >
        <ParentsIcon />
        <button onClick={roleChangeHandlerCreator(UserRole.Parent)}>
          {locale.forParents}
        </button>
      </div>
    </section>
  );
};
export default RoleControls;
