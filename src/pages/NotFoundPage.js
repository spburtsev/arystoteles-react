import { useContext } from 'react';
import LocaleContext from '../context/locale-context';

const NotFound = () => {
  const { localizationObj } = useContext(LocaleContext);

  return (
    <div className="centered">
      <h1>{localizationObj.notFoundPage.title}</h1>
      <p>{localizationObj.notFoundPage.message}</p>
    </div>
  );
};

export default NotFound;
