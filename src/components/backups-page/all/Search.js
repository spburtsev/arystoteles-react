import { useRef } from 'react';
import useLocale from '../../../hooks/use-locale';
import classes from './Search.module.css';

const Search = ({ onSearch }) => {
  const { strings } = useLocale('organizationsPage');

  const nameInputRef = useRef(null);

  const submitHandler = (event) => {
    event.preventDefault();
    onSearch(nameInputRef.current.value);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="name">{strings.name}</label>
          <input id="name" ref={nameInputRef} />
        </div>
      </div>
      <button className="btn">{strings.find}</button>
    </form>
  );
};
export default Search;
