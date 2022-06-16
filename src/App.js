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

const App = () => {
  const authCtx = useAuth();

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
        {!authCtx.isLoggedIn && (
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
          {authCtx.isLoggedIn && <ProfilePage />}
          {!authCtx.isLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
