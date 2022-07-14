import { useState } from 'react';
import useLocale from '../../hooks/use-locale';
import useInput from '../../hooks/use-input';
import useAuth from '../../hooks/use-auth';
import { useQuery } from 'react-query';
import LoadingSpinner from '../ui/LoadingSpinner';
import { createGetMeRequest } from '../../lib/api/user';
import classes from './CommonSection.module.css';

const CommonSection = () => {
  const { strings } = useLocale('profilePage');
  const { token } = useAuth();
  const [editMode, setEditMode] = useState(false);
  const firstName = useInput('');
  const lastName = useInput('');
  const email = useInput('');
  const { data, isLoading } = useQuery(
    'self-profile',
    createGetMeRequest(token),
    {
      onError: (err) => {
        alert(err.message);
      },
      onSuccess: (data) => {
        const usr = data.data;
        firstName.force(usr.firstName);
        lastName.force(usr.lastName);
        email.force(usr.email);
      },
    },
  );

  const editHandler = (event) => {
    event.preventDefault();
    setEditMode((prev) => !prev);
  };

  const usrData = data ? data.data : {};

  return (
    <section className={classes.profile}>
      <h1>{strings.myProfile}</h1>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className={classes.control}>
          <label>{strings.firstName}</label>
          {editMode ? (
            <input
              type="text"
              value={firstName.value}
              onChange={firstName.change}
              onBlur={firstName.blur}
            />
          ) : (
            <p>{usrData.firstName}</p>
          )}

          <label>{strings.lastName}</label>
          {editMode ? (
            <input
              type="text"
              value={lastName.value}
              onChange={lastName.change}
              onBlur={lastName.blur}
            />
          ) : (
            <p>{usrData.lastName}</p>
          )}

          <label>{strings.email}</label>
          {editMode ? (
            <input
              type="text"
              value={email.value}
              onChange={email.change}
              onBlur={email.blur}
            />
          ) : (
            <p>{usrData.email}</p>
          )}
        </div>
      )}
      <div className={classes.action}>
        <button onClick={editHandler}>{strings.edit}</button>
      </div>
    </section>
  );
};
export default CommonSection;
