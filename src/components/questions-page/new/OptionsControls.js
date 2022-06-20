import { useState, useRef, Fragment } from 'react';
import ChervonDownIcon from '../../icons/ChervonDownIcon';
import RemoveIcon from '../../icons/RemoveIcon';
import ArrowRightIcon from '../../icons/ArrowRightIcon';
import useLocale from '../../../hooks/use-locale';
import cn from 'classnames';
import classes from './OptionsControls.module.css';
import AppLocale from '../../../lib/enums/AppLocale';

const OptionsControls = ({ options }) => {
  const { strings } = useLocale('questions');
  const [insertionIsOpen, setInsertionIsOpen] = useState(false);
  const textEn = useRef(null);
  const textUa = useRef(null);
  const value = useRef(null);
  const { items, add, remove, reset } = options;

  const insertionToggleHandler = () => {
    setInsertionIsOpen((prev) => !prev);
  };

  const submitHandler = () => {
    const textEnValue = textEn.current?.value;
    const textUaValue = textUa.current?.value;
    const valueValue = value.current?.value;

    add({
      text: {
        [AppLocale.English]: textEnValue,
        [AppLocale.Ukrainian]: textUaValue,
      },
      value: valueValue,
    });
    textEn.current.value = '';
    textUa.current.value = '';
    value.current.value = '';
  };

  console.log(items);
  return (
    <Fragment>
      <div className={classes['tags-control']}>
        <ul className={classes.tags}>
          {items.map((x) => (
            <li key={x.value} className={classes.tag}>
              <div
                className={classes['tag-label']}
              >{`${x.text.en}, ${x.text.uk} (${x.value})`}</div>
              <div
                className={classes['remove-tag']}
                onClick={remove.bind(null, x)}
              >
                <RemoveIcon />
              </div>
            </li>
          ))}
        </ul>
        <div className={classes['tags-actions']}>
          <div className={classes['tags-action']} onClick={reset}>
            <RemoveIcon />
          </div>
          <span className={classes['tags-actions-separator']} />
          <div
            className={classes['tags-action']}
            onClick={insertionToggleHandler}
          >
            <ChervonDownIcon />
          </div>
        </div>
      </div>
      <div
        className={cn(
          classes['tags-control'],
          insertionIsOpen && 'g__display-none',
        )}
      >
        <div className={classes.tags}>
          <label htmlFor="textUa">UA</label>
          <input
            type="text"
            id="textUa"
            className={classes['tag-insert']}
            ref={textUa}
          />
          <label htmlFor="textEn">EN</label>
          <input
            type="text"
            id="textEn"
            className={classes['tag-insert']}
            ref={textEn}
          />
          <label htmlFor="value">{strings.value}</label>
          <input
            id="textEn"
            type="number"
            className={classes['tag-insert']}
            ref={value}
          />
        </div>
        <div className={classes['tags-actions']}>
          <div className={classes['tags-action']} onClick={submitHandler}>
            <ArrowRightIcon />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default OptionsControls;
