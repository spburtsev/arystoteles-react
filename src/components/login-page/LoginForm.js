import { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useHttp from '../../hooks/use-http';
import useLocale from '../../hooks/use-locale';
import useAuth from '../../hooks/use-auth';
import { sendLoginRequest } from '../../lib/api/user';
import RequestStatus from '../../lib/enums/RequestStatus';
import classes from './LoginForm.module.css';

const LoginForm = () => {
  const auth = useAuth();
  const history = useHistory();
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const {
    sendRequest: sendLogin,
    status: loginStatus,
    data: loginData,
    error: loginError,
  } = useHttp(sendLoginRequest);

  const { strings } = useLocale('authPage');
  const [isLoading, setIsLoading] = useState(false);

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

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    sendLogin({
      email: enteredEmail,
      password: enteredPassword,
    });
  };

  return (
    <section className={classes.auth}>
      <h1>{strings.login}</h1>
      <hr />
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">{strings.email}</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="password">{strings.password}</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>

        <div className={classes.actions}>
          {!isLoading && <button>{strings.submit}</button>}
          {isLoading && <p>{strings.sendingRequest}</p>}
        </div>
      </form>
    </section>
  );
};
export default LoginForm;
