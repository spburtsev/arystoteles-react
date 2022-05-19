import { Fragment, useEffect, useContext } from 'react';
import LocaleContext from '../context/locale-context';
import { useParams } from 'react-router-dom';
import useHttp from '../hooks/use-http';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import AboutSection from '../components/organizations-pages/details/AboutSection';
import CommonInfo from '../components/organizations-pages/details/CommonInfo';
import Description from '../components/organizations-pages/details/Description';

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
      <Description title={data.title} />
      <CommonInfo
        country={data.country}
        city={data.city}
        address={data.address}
        image={data.image}
        imageAlt={data.title}
      />
      <AboutSection>
        <p>{data.about ? data.about : locale.noInfo}</p>
      </AboutSection>
    </Fragment>
  );
};
export default OrganizationDetailsPage;
