import { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useHttp from '../../hooks/use-http';
import useLocale from '../../hooks/use-locale';
import useAuth from '../../hooks/use-auth';
import { sendLoginRequest, sendRegisterRequest } from '../../lib/api/user';
import UserRole from '../../lib/enums/UserRole';
import RequestStatus from '../../lib/enums/RequestStatus';
import classes from './AuthForm.module.css';

const AuthForm = (props) => {
  const { selectedRole } = props;
  const history = useHistory();
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const organizationRoleSelectionRef = useRef(null);
  const {
    sendRequest: sendLogin,
    status: loginStatus,
    data: loginData,
    error: loginError,
  } = useHttp(sendLoginRequest);
  const {
    sendRequest: sendRegister,
    status: registerStatus,
    data: registerData,
    error: registerError,
  } = useHttp(sendRegisterRequest);

  const auth = useAuth();
  const { strings: locale } = useLocale('authPage');

  const [isLogin, setIsLogin] = useState(true);
  const isRegister = !isLogin;
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  useEffect(() => {
    if (loginStatus === RequestStatus.Pending) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
    if (loginStatus === RequestStatus.Completed && !loginError) {
      auth.login(
        loginData.token,
        loginData.expires,
        loginData.data?.user?.role,
      );
      history.replace('/');
    } else if (loginError) {
      alert(loginError.message);
    }
  }, [loginStatus, loginData, loginError, auth, history]);

  useEffect(() => {
    if (registerStatus === RequestStatus.Pending) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
    if (registerStatus === RequestStatus.Completed && !registerError) {
      console.log('registerData: ', registerData);
      auth.login(
        registerData.token,
        registerData.expires,
        registerData.data?.user?.role,
      );
      history.replace('/');
    } else if (registerError) {
      alert(registerError.message);
    }
  }, [registerStatus, registerData, registerError, auth, history]);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (isLogin) {
      sendLogin({ email: enteredEmail, password: enteredPassword });
    } else {
      let role = UserRole.Parent;
      if (selectedRole === UserRole.OrganizationProxy) {
        role = organizationRoleSelectionRef.current.value;
      }
      sendRegister({
        email: enteredEmail,
        password: enteredPassword,
        role,
      });
    }
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? locale.login : locale.register}</h1>
      <form onSubmit={submitHandler}>
        {isRegister && selectedRole === UserRole.OrganizationProxy && (
          <div className={classes.control}>
            <label htmlFor="orgRole">{locale.yourRole}</label>
            <select id="orgRole" ref={organizationRoleSelectionRef}>
              <option value={UserRole.Medic}>{locale.medic}</option>
              <option value={UserRole.OrganizationAdministrator}>
                {locale.administrator}
              </option>
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
