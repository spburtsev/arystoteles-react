import { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useHttp from '../../hooks/use-http';
import useLocale from '../../hooks/use-locale';
import useAuth from '../../hooks/use-auth';
import { sendRegisterRequest } from '../../lib/api/user';
import RequestStatus from '../../lib/enums/RequestStatus';
import UserRole from '../../lib/enums/UserRole';
import classes from './LoginForm.module.css';

const LoginForm = () => {
  const auth = useAuth();
  const history = useHistory();
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const repeatedPasswordInputRef = useRef(null);
  const nameInputRef = useRef(null);
  const surnameInputRef = useRef(null);
  const countryInputRef = useRef(null);
  const roleInputRef = useRef(null);
  const {
    sendRequest: sendRegister,
    status: registerStatus,
    data: registerData,
    error: registerError,
  } = useHttp(sendRegisterRequest);

  const { strings: locale } = useLocale('authPage');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (registerStatus === RequestStatus.Pending) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
    if (registerStatus === RequestStatus.Completed && !registerError) {
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

    sendRegister({
      email: enteredEmail,
      password: enteredPassword,
    });
  };

  return (
    <section className={classes.auth}>
      <h1>{locale.register}</h1>
      <hr />
      <form onSubmit={submitHandler} className={classes.grid}>
        <div className={classes.col}>
          <div className={classes.control}>
            <label htmlFor="name">{locale.name}</label>
            <input type="text" id="name" required ref={nameInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="surname">{locale.surname}</label>
            <input type="text" id="surname" required ref={surnameInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="country">{locale.country}</label>
            <input type="text" id="name" required ref={countryInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="role">{locale.youAre}</label>
            <select id="role" required ref={roleInputRef}>
              <option value={UserRole.OrganizationAdministrator}>
                {locale.organizationAdministrator}
              </option>
              <option value={UserRole.Medic}>{locale.medic}</option>
              <option value={UserRole.Caregiver}>{locale.caregiver}</option>
            </select>
          </div>
        </div>
        <div className={classes.col}>
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
          <div className={classes.control}>
            <label htmlFor="repeatPassword">{locale.repeatPassword}</label>
            <input
              type="password"
              id="repeatPassword"
              required
              ref={repeatedPasswordInputRef}
            />
          </div>
        </div>

        <div className={classes.actions}>
          {!isLoading && <button>{locale.submit}</button>}
          {isLoading && <p>{locale.sendingRequest}</p>}
        </div>
      </form>
    </section>
  );
};
export default LoginForm;
