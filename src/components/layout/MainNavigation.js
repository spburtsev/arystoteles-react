import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/use-auth';
import useLocale from '../../hooks/use-locale';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const { isLoggedIn } = useAuth();
  const { strings } = useLocale('navigation');

  return (
    <Fragment>
      <div class={classes['menu-toggle']}>
        <div class={classes.hamburger}>
          <span></span>
        </div>
      </div>

      <aside class={classes.sidebar}>
        <h1>Arystoteles</h1>
        <nav class={classes.menu}>
          <NavLink
            to="/"
            className={classes['menu-item']}
            activeClassName={classes.active}
            exact
          >
            {strings.home}
          </NavLink>
          {!isLoggedIn && (
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
          )}
        </nav>
      </aside>
    </Fragment>
  );
};
export default MainNavigation;
