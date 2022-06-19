import QuestionDetails from '../components/questions-page/details/QuestionDetails';
import { useParams } from 'react-router-dom';

const QuestionDetailsPage = () => {
  const { questionId } = useParams();

  return <QuestionDetails questionId={questionId} />;
};
export default QuestionDetailsPage;
