import { useContext } from 'react';
import LocaleContext from '../../context/locale-context';
import AuthContext from '../../context/auth-context';
import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);
  const { localizationObj } = useContext(LocaleContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
    // optional: redirect the user
  };

  return (
    <header className={classes.header}>
      <NavLink to="/" activeClassName={classes.active}>
        <div className={classes.logo}>{localizationObj.navigation.title}</div>
      </NavLink>
      <nav>
        <ul>
          <li>
            <NavLink to="/organizations/all" activeClassName={classes.active}>
              {localizationObj.navigation.organizations}
            </NavLink>
          </li>
          {!isLoggedIn && (
            <li>
              <NavLink to="/auth" activeClassName={classes.active}>
                {localizationObj.navigation.login}
              </NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <NavLink to="/profile" activeClassName={classes.active}>
                {localizationObj.navigation.profile}
              </NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button onClick={logoutHandler}>
                {localizationObj.navigation.logout}
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
