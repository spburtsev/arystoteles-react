import { Fragment } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import UserRole from '../../lib/enums/UserRole';
import useAuth from '../../hooks/use-auth';
import useLocale from '../../hooks/use-locale';
import cn from 'classnames';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const { isLoggedIn, role } = useAuth();
  const { strings } = useLocale('navigation');
  const [isOpen, setIsOpen] = useState(false);

  const toggleHandler = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <Fragment>
      <div className={classes['menu-toggle']} onClick={toggleHandler}>
        <div className={classes.hamburger}>
          <span></span>
        </div>
      </div>

      <aside className={cn(classes.sidebar, isOpen && classes.open)}>
        <h1>Arystoteles</h1>
        <nav className={classes.menu}>
          <NavLink
            to="/"
            className={classes['menu-item']}
            activeClassName={classes.active}
            exact
          >
            {strings.home}
          </NavLink>
          {!isLoggedIn ? (
            <Fragment>
              <NavLink
                to="/auth/login"
                className={classes['menu-item']}
                activeClassName={classes.active}
              >
                {strings.login}
              </NavLink>
              <NavLink
                to="/auth/register"
                className={classes['menu-item']}
                activeClassName={classes.active}
              >
                {strings.register}
              </NavLink>
            </Fragment>
          ) : (
            <Fragment>
              <NavLink
                to="/profile"
                className={classes['menu-item']}
                activeClassName={classes.active}
              >
                {strings.profile}
              </NavLink>
              {[UserRole.Admin, UserRole.Seed].includes(role) && (
                <NavLink
                  to="/backups"
                  className={classes['menu-item']}
                  activeClassName={classes.active}
                >
                  {strings.backups}
                </NavLink>
              )}
            </Fragment>
          )}
        </nav>
      </aside>
    </Fragment>
  );
};
export default MainNavigation;
