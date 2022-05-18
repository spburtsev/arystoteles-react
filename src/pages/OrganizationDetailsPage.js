import { Fragment, useEffect, useContext } from 'react';
import LocaleContext from '../context/locale-context';
import { useParams } from 'react-router-dom';
import useHttp from '../hooks/use-http';
import LoadingSpinner from '../components/ui/LoadingSpinner';

const OrganizationDetailsPage = () => {
  const { localizationObj } = useContext(LocaleContext);
  const locale = localizationObj.organizationDetailsPage;
  const { organizationId } = useParams();

  const { sendRequest, status, data, error } = useHttp(() => {}, true);

  useEffect(() => {
    // (organizationId);
  }, [sendRequest, organizationId]);

  if (status === 'pending') {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!data || !data.text) {
    return <p>{locale.notFound}</p>;
  }

  return (
    <Fragment>
      <div className="centered">Details</div>
    </Fragment>
  );
};
export default OrganizationDetailsPage;
