import { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useHttp from '../../hooks/use-http';
import useAuth from '../../hooks/use-auth';
import useLocale from '../../hooks/use-locale';
import { updatePassword } from '../../lib/api/user';
import RequestStatus from '../../lib/enums/RequestStatus';
import LoadingModal from '../../components/ui/LoadingModal';
import classes from './ChangePasswordForm.module.css';

const ChangePasswordForm = () => {
  const auth = useAuth();
  const history = useHistory();
  const { strings: locale } = useLocale('profilePage');
  const newPasswordInputRef = useRef();
  const changePasswordRequest = useHttp(updatePassword(auth.token), false);

  useEffect(() => {
    if (changePasswordRequest.status === RequestStatus.Completed) {
      if (changePasswordRequest.error !== null) {
        alert(changePasswordRequest.error);
      } else {
        auth.logout();
        history.push('/');
      }
    }
  }, [
    changePasswordRequest.status,
    changePasswordRequest.error,
    history,
    auth,
  ]);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;
    // TODO: add validation
    changePasswordRequest.sendRequest(enteredNewPassword);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      {changePasswordRequest.status === 'pending' && <LoadingModal />}
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
