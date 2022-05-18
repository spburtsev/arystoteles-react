import { useContext } from 'react';
import LocaleContext from '../../context/locale-context';
import AuthContext from '../../context/auth-context';
import { Link } from 'react-router-dom';
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
      <Link to="/">
        <div className={classes.logo}>{localizationObj.navigation.title}</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn && (
            <li>
              <Link to="/auth">{localizationObj.navigation.login}</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to="/profile">{localizationObj.navigation.profile}</Link>
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
