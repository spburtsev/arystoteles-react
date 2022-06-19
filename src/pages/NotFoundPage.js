import useLocale from '../hooks/use-locale';

const NotFound = () => {
  const { strings } = useLocale('notFoundPage');

  return (
    <div className="centered">
      <h1>{strings.title}</h1>
      <p>{strings.message}</p>
    </div>
  );
};

export default NotFound;
