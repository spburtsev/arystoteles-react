import { Switch, Route, Redirect } from 'react-router-dom';
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
import NotificationsPage from './pages/NotificationsPage';
import ActivitiesPage from './pages/ActivitiesPage';
import ActivityDetailsPage from './pages/ActivityDetailsPage';
import TipsPage from './pages/TipsPage';
import QuestionsPage from './pages/QuestionsPage';
import QuestionDetailsPage from './pages/QuestionDetailsPage';
import NewQuestionPage from './pages/NewQuestionPage';
import MedicsPage from './pages/MedicsPage';
import MedicDetailsPage from './pages/MedicDetailsPage';
import ChildDetailsPage from './pages/ChildDetailsPage';
import ChildrenPage from './pages/ChildrenPage';
import UsersPage from './pages/UsersPage';

const App = () => {
  const { isLoggedIn, role } = useAuth();

  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/organizations/all">
          <OrganizationsPage />
        </Route>
        <Route exact path="/organizations">
          <Redirect to="/organizations/all" />
        </Route>
        <Route path="/organizations/:organizationId">
          <OrganizationDetailsPage />
        </Route>
        {!isLoggedIn && (
          <Switch>
            <Route exact path="/auth/register">
              <RegisterPage />
            </Route>
            <Route exact path="/auth/login">
              <LoginPage />
            </Route>
          </Switch>
        )}
        <Route path="/profile" exact>
          {isLoggedIn && <ProfilePage />}
          {!isLoggedIn && <Redirect to="/auth/login" />}
        </Route>
        {isLoggedIn && (
          <Route exact path="/notifications">
            <NotificationsPage />
          </Route>
        )}
        {role === UserRole.OrganizationAdministrator && (
          <Switch>
            <Route exact path="/medics">
              <MedicsPage />
            </Route>
            <Route path="/medics/:medicId">
              <MedicDetailsPage />
            </Route>
          </Switch>
        )}
        {role === UserRole.Medic && (
          <Switch>
            <Route exact path="/children">
              <ChildrenPage />
            </Route>
            <Route path="/children/:childId">
              <ChildDetailsPage />
            </Route>
          </Switch>
        )}
        {[UserRole.Seed, UserRole.Admin].includes(role) && (
          <Switch>
            <Route exact path="/backups">
              <BackupsPage />
            </Route>
            <Route exact path="/activities">
              <ActivitiesPage />
            </Route>
            <Route path="/activities/:activityId">
              <ActivityDetailsPage />
            </Route>
            <Route exact path="/questions">
              <QuestionsPage />
            </Route>
            <Route exact path="/questions/new">
              <NewQuestionPage />
            </Route>

            <Route path="/questions/:questionId">
              <QuestionDetailsPage />
            </Route>
            <Route exact path="/tips">
              <TipsPage />
            </Route>
            <Route exact path="/users">
              <UsersPage />
            </Route>
          </Switch>
        )}
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
