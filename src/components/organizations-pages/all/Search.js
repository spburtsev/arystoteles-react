import { useRef, useContext } from 'react';
import LocaleContext from '../../../context/locale-context';
import classes from './Search.module.css';

const Search = (props) => {
  const { localizationObj } = useContext(LocaleContext);
  const locale = localizationObj.organizationsPage;

  const countryInputRef = useRef(null);
  const cityInputRef = useRef(null);
  const nameInputRef = useRef(null);

  const submitHandler = (event) => {
    event.preventDefault();

    const country = countryInputRef.current.value;
    const city = cityInputRef.current.value;
    const name = nameInputRef.current.value;

    props.onSearch({
      country,
      city,
      name,
    });
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="country">{locale.country}</label>
          <input id="country" />
        </div>
        <div className={classes.control}>
          <label htmlFor="city">{locale.city}</label>
          <input id="city" />
        </div>
        <div className={classes.control}>
          <label htmlFor="name">{locale.name}</label>
          <input id="name" />
        </div>
      </div>
      <button className="btn">{locale.find}</button>
    </form>
  );
};
export default Search;
