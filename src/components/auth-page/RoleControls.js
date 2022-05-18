import { useContext } from 'react';
import LocaleContext from '../../context/locale-context';
import ParentsIcon from '../icons/ParentsIcon';
import OrganizationIcon from '../icons/OrganizationIcon';
import cn from 'classnames';
import classes from './RoleControls.module.css';

const RoleControls = (props) => {
  const { selectedRole, onSelectRole } = props;
  const { localizationObj } = useContext(LocaleContext);
  const locale = localizationObj.authPage;

  const roleChangeHandlerCreator = (role) => {
    return (event) => {
      event.preventDefault();
      onSelectRole(role);
    };
  };

  return (
    <>
      <section className={classes.controls}>
        <div
          className={cn(
            classes.control,
            selectedRole === 'organization' && classes.active,
          )}
        >
          <OrganizationIcon />
          <button onClick={roleChangeHandlerCreator('organization')}>
            {locale.forPublicHealthOrgnizations}
          </button>
        </div>
        <div
          className={cn(
            classes.control,
            selectedRole === 'parent' && classes.active,
          )}
        >
          <ParentsIcon />
          <button onClick={roleChangeHandlerCreator('parent')}>
            {locale.forParents}
          </button>
        </div>
      </section>
    </>
  );
};
export default RoleControls;
