import useLocale from '../../../hooks/use-locale';
import useAuth from '../../../hooks/use-auth';
import { useRef } from 'react';
import { createQuestion } from '../../../lib/api/question';
import { useMutation } from 'react-query';
import useSet from '../../../hooks/use-set';
import _ from 'lodash';
import OptionsControls from './OptionsControls';
import classes from './NewQuestionForm.module.css';

const NewQuestionForm = () => {
  const { token } = useAuth();
  const { strings } = useLocale('questions');
  const textUa = useRef(null);
  const textEn = useRef(null);
  const options = useSet([], _.isEqual);

  const mut = useMutation(createQuestion, {
    onError: (err) => alert(err.message),
  });

  const submitHandler = (event) => {
    event.preventDefault();
    const question = {};
    mut.mutate({ token, question });
  };

  return (
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

      <div className={classes.actions}>
        <button>{strings.submit}</button>
      </div>
    </form>
  );
};
export default NewQuestionForm;
