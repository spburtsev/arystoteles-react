import { useContext } from 'react';
import LocaleContext from '../../context/locale-context';
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
    <section className={classes.controls}>
      <button
        onClick={roleChangeHandlerCreator('medic')}
        className={cn(selectedRole === 'medic' && classes.active)}
      >
        {locale.forPublicHealthOrgnizations}
      </button>
      <button
        onClick={roleChangeHandlerCreator('parent')}
        className={cn(selectedRole === 'parent' && classes.active)}
      >
        {locale.forParents}
      </button>
    </section>
  );
};
export default RoleControls;
