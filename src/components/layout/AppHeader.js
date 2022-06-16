import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import LocaleContext from '../../context/locale-context';
import AuthContext from '../../context/auth-context';
import { NavLink } from 'react-router-dom';
import classes from './AppHeader.module.css';
import LocaleButtons from './LocaleButtons';

const AppHeader = () => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();
  const { localizationObj } = useContext(LocaleContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
    history.replace('/auth');
  };

  return (
    <header className={classes.header}>
      <nav>
        <LocaleButtons />
        <ul>
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
export default AppHeader;
