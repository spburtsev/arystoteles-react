import { Fragment } from 'react';
import { createPortal } from 'react-dom';
import useLocale from '../../../hooks/use-locale';
import useInput from '../../../hooks/use-input';
import AppLocale from '../../../lib/enums/AppLocale';
import cn from 'classnames';
import classes from './EditActivity.module.css';

const EditActivity = ({ activity, onClose }) => {
  const portalElement = document.getElementById('modal');
  const { strings } = useLocale('activities');
  const titleUa = useInput(activity.title[AppLocale.Ukrainian]);
  const titleEn = useInput(activity.title[AppLocale.English]);
  const descUa = useInput(activity.description[AppLocale.Ukrainian]);
  const descEn = useInput(activity.description[AppLocale.English]);

  return (
    <Fragment>
      {createPortal(
        <div className={classes.backdrop} onClick={onClose} />,
        portalElement,
      )}
      {createPortal(
        <div className={classes.modal}>
          <form>
            <h3>UA</h3>
            <div className={classes.control}>
              <label htmlFor="titleUa">{strings.title}</label>
              <input
                type="text"
                id="titleUa"
                value={titleUa.value}
                onChange={titleUa.change}
                onBlur={titleUa.blur}
              />
            </div>
            <div className={classes.control}>
              <label htmlFor="descriptionUa">{strings.description}</label>
              <textarea
                type="text"
                id="descriptionUa"
                value={descUa.value}
                onChange={descUa.change}
                onBlur={descUa.blur}
              />
            </div>
            <h3>EN</h3>
            <div className={classes.control}>
              <label htmlFor="titleEn">{strings.title}</label>
              <input
                type="text"
                id="titleEn"
                value={titleEn.value}
                onChange={titleEn.change}
                onBlur={titleEn.blur}
              />
            </div>
            <div className={classes.control}>
              <label htmlFor="descriptionEn">{strings.description}</label>
              <textarea
                type="text"
                id="descriptionEn"
                value={descEn.value}
                onChange={descEn.change}
                onBlur={descEn.blur}
              />
            </div>
            <div className={classes.controls}>
              <div>
                <label htmlFor="category">{strings.category}</label>
                <select id="category"></select>
              </div>
              <div>
                <label htmlFor="frequency">{strings.frequency}</label>
                <select id="frequency"></select>
              </div>
            </div>
            <div className={classes.triple}>
              <div>
                <label htmlFor="duration">{strings.durationMinutes}</label>
                <input type="number" id="duration" />
              </div>
              <div>
                <label htmlFor="ageLowerBound">
                  {strings.ageLowerBoundMounths}
                </label>
                <input type="number" id="ageLowerBound" />
              </div>
              <div>
                <label htmlFor="ageUpperBound">
                  {strings.ageUpperBoundMounths}
                </label>
                <input type="number" id="ageUpperBound" />
              </div>
            </div>
          </form>
          <div className={classes.actions}>
            <button
              className={cn(classes.btn, classes.submit)}
              onClick={onClose}
            >
              {strings.submit}
            </button>
            <button
              onClick={onClose}
              className={cn(classes.btn, classes.cancel)}
            >
              {strings.cancel}
            </button>
          </div>
        </div>,
        portalElement,
      )}
    </Fragment>
  );
};
export default EditActivity;
