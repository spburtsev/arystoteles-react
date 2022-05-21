import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import useAuth from '../../hooks/use-auth';
import useLocale from '../../hooks/use-locale';
import classes from './ChangePasswordForm.module.css';

const ChangePasswordForm = () => {
  const history = useHistory();
  const auth = useAuth();
  const { strings: locale } = useLocale('profilePage');
  const newPasswordInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;

    // TODO:
    // add validation
    // add request handling
    console.log(enteredNewPassword);
    console.log(auth);
    console.log(history);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">{locale.newPassword}</label>
        <input
          type="password"
          id="new-password"
          minLength="7"
          ref={newPasswordInputRef}
        />
      </div>
      <div className={classes.action}>
        <button>{locale.changePassword}</button>
      </div>
    </form>
  );
};
export default ChangePasswordForm;
