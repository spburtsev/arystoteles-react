import { Fragment, useState } from 'react';
import useAuth from '../../../hooks/use-auth';
import { useQuery, useMutation } from 'react-query';
import { getQuestion, deleteQuestion } from '../../../lib/api/question';
import { useHistory } from 'react-router-dom';
import AppLocale from '../../../lib/enums/AppLocale';
import Emoji from '../../ui/Emoji';
import LoadingSpinner from '../../ui/LoadingSpinner';
import DeleteQuestion from './DeleteQuestion';
import GoBack from '../../ui/GoBack';
import classes from './QuestionDetails.module.css';

const QuestionDetails = ({ questionId }) => {
  const { token } = useAuth();
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

  return (
    <Fragment>
      {modalIsOpen && (
        <DeleteQuestion
          onClose={modalToggleHandler}
          activityId={data.data._id}
          mutation={deleteMutation}
        />
      )}
      <GoBack route="questions" />
      <section className={classes.summary}>
        <h1>
          <Emoji label="UA" symbol="🇺🇦" />
          <br />
          {data.data.text[AppLocale.Ukrainian]}
        </h1>
        <h1>
          <Emoji label="UA" symbol="🇺🇸" />
          <br />
          {data.data.text[AppLocale.English]}
        </h1>
        <div className={classes.tags}>
          <span>TAG</span>
        </div>
      </section>
      <section className={classes.actions}>
        <button className={classes.btn} onClick={editClickHandler}>
          Edit
        </button>
        <button className={classes.delete} onClick={modalToggleHandler}>
          Delete
        </button>
      </section>
    </Fragment>
  );
};
export default QuestionDetails;
