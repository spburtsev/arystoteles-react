import { Fragment, useState } from 'react';
import useAuth from '../../../hooks/use-auth';
import useLocale from '../../../hooks/use-locale';
import { useQuery, useMutation } from 'react-query';
import { getQuestion, deleteQuestion } from '../../../lib/api/question';
import { useHistory } from 'react-router-dom';
import AppLocale from '../../../lib/enums/AppLocale';
import Emoji from '../../ui/Emoji';
import LoadingSpinner from '../../ui/LoadingSpinner';
import DeleteQuestion from './DeleteQuestion';
import GoBack from '../../ui/GoBack';
import CategoryLabel from '../common/CategoryLabel';
import AgeGroupExpecation from '../common/AgeGroupExpecation';
import classes from './QuestionDetails.module.css';

const QuestionDetails = ({ questionId }) => {
  const { token } = useAuth();
  const { strings, current } = useLocale('questions');
  const history = useHistory();
  const { data, isLoading } = useQuery(
    ['question', questionId],
    getQuestion(token, questionId),
    {
      onError: () => history.replace('/questions'),
      retry: false,
    },
  );

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const modalToggleHandler = (event) => {
    event.preventDefault();
    setModalIsOpen((modalIsOpen) => !modalIsOpen);
  };

  const editClickHandler = (event) => {
    event.preventDefault();
    history.push(`/edit-question/${questionId}`);
  };

  const deleteMutation = useMutation(deleteQuestion, {
    onError: (err) => alert(err.message),
    onSuccess: () => {
      setModalIsOpen(false);
      history.replace('/questions');
    },
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const item = data.data;

  return (
    <Fragment>
      {modalIsOpen && (
        <DeleteQuestion
          onClose={modalToggleHandler}
          activityId={item._id}
          mutation={deleteMutation}
        />
      )}
      <GoBack route="/questions" />
      <section className={classes.summary}>
        {current === AppLocale.English ? (
          <h1>
            <Emoji label="US" symbol="🇺🇸" />
            <br />
            {item.text[AppLocale.English]}
          </h1>
        ) : (
          <h1>
            <Emoji label="UA" symbol="🇺🇦" />
            <br />
            {item.text[AppLocale.Ukrainian]}
          </h1>
        )}

        <div className={classes.tags}>
          <span>
            <CategoryLabel category={item.category} />
          </span>
        </div>
      </section>
      <section className={classes.options}>
        <h3>{`${strings.options}:`}</h3>
        <ul>
          {item.options.map((option, index) => (
            <li key={index}>{`${option.text[current]} (${option.value})`}</li>
          ))}
        </ul>
      </section>
      <section className={classes.expectations}>
        <h3>{`${strings.expectations}:`}</h3>
        <ul>
          {item.expectations.map((expectation, index) => (
            <li key={index}>
              <AgeGroupExpecation
                ageGroup={expectation.ageGroup}
                value={expectation.value}
              />
            </li>
          ))}
        </ul>
      </section>
      <section className={classes.actions}>
        <button className={classes.btn} onClick={editClickHandler}>
          {strings.edit}
        </button>
        <button className={classes.delete} onClick={modalToggleHandler}>
          {strings.delete}
        </button>
      </section>
    </Fragment>
  );
};
export default QuestionDetails;
