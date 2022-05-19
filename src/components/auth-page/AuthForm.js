import { useState, useRef, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useHttp from '../../hooks/use-http';
import { sendLoginRequest } from '../../lib/api/user';
import LocaleContext from '../../context/locale-context';
import AuthContext from '../../context/auth-context';
import classes from './AuthForm.module.css';

const AuthForm = (props) => {
  const { selectedRole } = props;
  const history = useHistory();
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const roleSelectionRef = useRef(null);
  const {
    sendRequest: sendLogin,
    status: loginStatus,
    data: loginData,
    error: loginError,
  } = useHttp(sendLoginRequest);

  const authCtx = useContext(AuthContext);
  const localeCtx = useContext(LocaleContext);

  const [isLogin, setIsLogin] = useState(true);
  const isRegister = !isLogin;
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  useEffect(() => {
    if (loginStatus === 'pending') {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
    if (loginStatus === 'completed' && !loginError) {
      authCtx.login(
        loginData.token,
        loginData.expires,
        loginData.data?.user?.role,
      );
      history.replace('/');
    } else if (loginError) {
      alert(loginError.message);
    }
  }, [loginStatus, loginData, loginError, authCtx, history]);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // optional: Add validation
    if (isLogin) {
      sendLogin({ email: enteredEmail, password: enteredPassword });
    }
  };

  const locale = localeCtx.localizationObj.authPage;

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? locale.login : locale.register}</h1>
      <form onSubmit={submitHandler}>
        {isRegister && selectedRole === 'organization' && (
          <div className={classes.control}>
            <label htmlFor="orgRole">{locale.yourRole}</label>
            <select ref={roleSelectionRef}>
              <option value="medic">{locale.medic}</option>
              <option value="administrator">{locale.administrator}</option>
            </select>
          </div>
        )}
        <div className={classes.control}>
          <label htmlFor="email">{locale.email}</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">{locale.password}</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? locale.login : locale.register}</button>
          )}
          {isLoading && <p>{locale.sendingRequest}</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? locale.createProfile : locale.alreadyHaveAccount}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
