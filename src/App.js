import { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from './components/layout/Layout';
import ProfilePage from './pages/ProfilePage';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import OrganizationsPage from './pages/OrganizationsPage';
import OrganizationDetailsPage from './pages/OrganizationDetailsPage';
import NotFoundPage from './pages/NotFoundPage';
import AuthContext from './context/auth-context';

const App = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/organizations/all">
          <OrganizationsPage />
        </Route>
        <Route path="/organizations" exact>
          <Redirect to="/organizations/all" />
        </Route>
        <Route path="/organizations/:id">
          <OrganizationDetailsPage />
        </Route>
        {!isLoggedIn && (
          <Route path="/auth">
            <AuthPage />
          </Route>
        )}
        <Route path="/profile">
          {isLoggedIn && <ProfilePage />}
          {!isLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
