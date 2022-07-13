import { Fragment, useState } from 'react';
import useAuth from '../hooks/use-auth';
import { useQuery } from 'react-query';
import { getOrganizations } from '../lib/api/organization';
import OrganizationList from '../components/organizations-pages/all/OrganizationList';
import Search from '../components/organizations-pages/all/Search';
import LoadingSpinner from '../components/ui/LoadingSpinner';

const OrganizationsPage = () => {
  const { token } = useAuth();
  const [search, setSearch] = useState(null);

  const { data, isLoading } = useQuery(
    ['organizations', search],
    getOrganizations(token, search),
    {
      onError: (err) => alert(err.message),
      useErrorBoundary: true,
    },
  );
  console.log(data);

  const searchHandler = (value) => {
    setSearch(value);
  };

  return (
    <Fragment>
      <Search onSearch={searchHandler} />
      {isLoading ? <LoadingSpinner /> : <OrganizationList items={data.data} />}
    </Fragment>
  );
};
export default OrganizationsPage;
