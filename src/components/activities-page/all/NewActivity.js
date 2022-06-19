import { Fragment, useRef } from 'react';
import { createPortal } from 'react-dom';
import useAuth from '../../../hooks/use-auth';
import useLocale from '../../../hooks/use-locale';
import useInput from '../../../hooks/use-input';
import cn from 'classnames';
import mapFrequency from '../../../lib/helpers/map-frequency';
import mapCategory from '../../../lib/helpers/map-category';
import ActivityFrequency from '../../../lib/enums/ActivityFrequency';
import ActivityCategory from '../../../lib/enums/ActivityCategory';
import LoadingModal from '../../ui/LoadingModal';
import classes from './NewActivity.module.css';

const NewActivity = ({ onClose, mutation }) => {
  const portalElement = document.getElementById('modal');
  const { token } = useAuth();
  const { strings } = useLocale('activities');
  const titleUa = useInput('');
  const titleEn = useInput('');
  const descUa = useInput('');
  const descEn = useInput('');
  const ageLowerBound = useInput('0');
  const ageUpperBound = useInput('0');
  const duration = useInput('15');
  const categoryRef = useRef(null);
  const frequencyRef = useRef(null);

  const submitHandler = (event) => {
    event.preventDefault();
    const values = {
      titleUa: titleUa.value,
      titleEn: titleEn.value,
      descUa: descUa.value,
      descEn: descEn.value,
      ageGroupLowerBound: ageLowerBound.value,
      ageGroupUpperBound: ageUpperBound.value,
      duration: duration.value,
      category: categoryRef.current.value,
      frequency: frequencyRef.current.value,
    };
    mutation.mutate({ token, activity: values });
  };

  return (
    <Fragment>
      {mutation.isLoading && <LoadingModal />}
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
                <select id="category" ref={categoryRef}>
                  {Object.values(ActivityCategory).map((cat) => (
                    <option key={cat} value={cat}>
                      {strings[mapCategory(cat)]}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="frequency">{strings.frequency}</label>
                <select id="frequency" ref={frequencyRef}>
                  {Object.values(ActivityFrequency).map((frequency) => (
                    <option key={frequency} value={frequency}>
                      {strings[mapFrequency(frequency)]}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className={classes.triple}>
              <div>
                <label htmlFor="duration">{strings.durationMinutes}</label>
                <input
                  type="number"
                  id="duration"
                  value={duration.value}
                  onChange={duration.change}
                  onBlur={duration.blur}
                />
              </div>
              <div>
                <label htmlFor="ageLowerBound">
                  {strings.ageLowerBoundMounths}
                </label>
                <input
                  type="number"
                  id="ageLowerBound"
                  value={ageLowerBound.value}
                  onChange={ageLowerBound.change}
                  onBlur={ageLowerBound.blur}
                />
              </div>
              <div>
                <label htmlFor="ageUpperBound">
                  {strings.ageUpperBoundMounths}
                </label>
                <input
                  type="number"
                  id="ageUpperBound"
                  value={ageUpperBound.value}
                  onChange={ageUpperBound.change}
                  onBlur={ageUpperBound.blur}
                />
              </div>
            </div>
          </form>
          <div className={classes.actions}>
            <button
              className={cn(classes.btn, classes.submit)}
              onClick={submitHandler}
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
export default NewActivity;
