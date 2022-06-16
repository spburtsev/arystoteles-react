import { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import useLocale from '../../hooks/use-locale';
import useAuth from '../../hooks/use-auth';
import { useQuery } from 'react-query';
import { createLoginRequest } from '../../lib/api/user';
import classes from './LoginForm.module.css';

const LoginForm = () => {
  const auth = useAuth();
  const { strings } = useLocale('authPage');
  const history = useHistory();
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const [loginData, setLoginData] = useState({});

  const { isLoading, refetch } = useQuery(
    'login',
    createLoginRequest(loginData),
    {
      enabled: false,
      retry: false,
      onError: (err) => {
        alert(err.message);
      },
      onSuccess: (data) => {
        if (!data.token) {
          alert(strings.loginError);
          return;
        }
        auth.login(data.token, data.expires, data.data.user.role);
        history.replace('/');
      },
    },
  );

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    setLoginData({
      email: enteredEmail,
      password: enteredPassword,
    });
    refetch();
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
