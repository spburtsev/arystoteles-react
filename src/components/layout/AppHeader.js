import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import LocaleContext from '../../context/locale-context';
import AuthContext from '../../context/auth-context';
import classes from './AppHeader.module.css';
import LocaleButtons from './LocaleButtons';

const AppHeader = () => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();
  const { localizationObj } = useContext(LocaleContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
    history.replace('/auth/login');
  };

  return (
    <header className={classes.header}>
      <nav>
        <LocaleButtons />
      </nav>
      {isLoggedIn && (
        <button onClick={logoutHandler}>
          {localizationObj.navigation.logout}
        </button>
      )}
    </header>
  );
};
export default AppHeader;
