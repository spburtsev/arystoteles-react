import { useState, useRef, Fragment } from 'react';
import ChervonDownIcon from '../../icons/ChervonDownIcon';
import RemoveIcon from '../../icons/RemoveIcon';
import ArrowRightIcon from '../../icons/ArrowRightIcon';
import useLocale from '../../../hooks/use-locale';
import cn from 'classnames';
import classes from './OptionsControls.module.css';
import AgeGroup from '../../../lib/enums/AgeGroup';

const OptionsControls = ({ expectations }) => {
  const { strings } = useLocale('questions');
  const [insertionIsOpen, setInsertionIsOpen] = useState(false);
  const ageGroup = useRef(null);
  const value = useRef(null);
  const { items, add, remove, reset } = expectations;

  const insertionToggleHandler = () => {
    setInsertionIsOpen((prev) => !prev);
  };

  const submitHandler = () => {
    const ageGroupValue = ageGroup.current?.value;
    const valueValue = value.current?.value;

    add({
      ageGroup: ageGroupValue,
      value: valueValue,
    });
    ageGroup.current.value = '';
    value.current.value = '';
  };

  const ageGroupOptions = Object.values(AgeGroup).filter(
    (x) => x !== AgeGroup.None,
  );

  return (
    <Fragment>
      <div className={classes['tags-control']}>
        <ul className={classes.tags}>
          {items.map((x) => (
            <li key={x.value} className={classes.tag}>
              <div className={classes['tag-label']}>{`${
                strings[x.ageGroup]
              } - ${x.value}`}</div>
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
          <label htmlFor="ageGroup">{strings.ageGroup}</label>
          <select
            id="ageGroup"
            className={classes['tag-insert']}
            ref={ageGroup}
          >
            {ageGroupOptions.map((x) => (
              <option key={x} value={x}>
                {strings[x]}
              </option>
            ))}
          </select>
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
