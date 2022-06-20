import useLocale from '../../../hooks/use-locale';
import useAuth from '../../../hooks/use-auth';
import { Fragment, useRef } from 'react';
import { createQuestion } from '../../../lib/api/question';
import { useMutation } from 'react-query';
import useSet from '../../../hooks/use-set';
import _ from 'lodash';
import ExpectationsControls from './ExpectationsControls';
import OptionsControls from './OptionsControls';
import LoadingModal from '../../ui/LoadingModal';
import classes from './NewQuestionForm.module.css';

const NewQuestionForm = () => {
  const { token } = useAuth();
  const { strings } = useLocale('questions');
  const textUa = useRef(null);
  const textEn = useRef(null);
  const options = useSet([], _.isEqual);
  const expectations = useSet([], _.isEqual);

  const mut = useMutation(createQuestion, {
    onError: (err) => alert(err.message),
  });

  const submitHandler = (event) => {
    event.preventDefault();
    const question = {};
    mut.mutate({ token, question });
  };

  return (
    <Fragment>
      {mut.isLoading && <LoadingModal />}
      <form onSubmit={submitHandler}>
        <div className={classes.controls}>
          <div>
            <label htmlFor="textUa">{strings.textUa}</label>
            <input id="textUa" ref={textUa} />
          </div>
          <div>
            <label htmlFor="textEn">{strings.textEn}</label>
            <input id="textEn" ref={textEn} />
          </div>
        </div>
        <h3>{strings.options}</h3>
        <OptionsControls options={options} />
        <h3>{strings.expectations}</h3>
        <ExpectationsControls expectations={expectations} />

        <div className={classes.actions}>
          <button>{strings.submit}</button>
        </div>
      </form>
    </Fragment>
  );
};
export default NewQuestionForm;
