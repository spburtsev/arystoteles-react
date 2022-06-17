import { Switch, Route, Redirect } from 'react-router-dom';
import { Fragment } from 'react';
import useAuth from './hooks/use-auth';
import Layout from './components/layout/Layout';
import ProfilePage from './pages/ProfilePage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import OrganizationsPage from './pages/OrganizationsPage';
import OrganizationDetailsPage from './pages/OrganizationDetailsPage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
import UserRole from './lib/enums/UserRole';
import BackupsPage from './pages/BackupsPage';

const App = () => {
  const { isLoggedIn, role } = useAuth();

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
          <Fragment>
            <Route path="/auth/register">
              <RegisterPage />
            </Route>
            <Route path="/auth/login">
              <LoginPage />
            </Route>
          </Fragment>
        )}
        <Route path="/profile">
          {isLoggedIn && <ProfilePage />}
          {!isLoggedIn && <Redirect to="/auth" />}
        </Route>
        {(role === UserRole.Seed || role === UserRole.Admin) && (
          <Route path="/backups">
            <BackupsPage />
          </Route>
        )}
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
