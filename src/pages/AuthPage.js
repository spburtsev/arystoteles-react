import { Fragment, useState } from 'react';
import UserRole from '../lib/enums/UserRole';
import AuthForm from '../components/auth-page/AuthForm';
import RoleControls from '../components/auth-page/RoleControls';
import withWrapper from '../components/HOC/with-wrapper';

const Controls = withWrapper(RoleControls);

const AuthPage = () => {
  const [role, setRole] = useState(UserRole.Parent);
  const [isLogin, setIsLogin] = useState(true);

  const formSwitchHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const roleChangeHandler = (selected) => {
    setRole(selected);
  };

  return (
    <Fragment>
      {!isLogin && (
        <Controls selectedRole={role} onSelectRole={roleChangeHandler} />
      )}
      <AuthForm
        selectedRole={role}
        isLogin={isLogin}
        onFormSwitch={formSwitchHandler}
      />
    </Fragment>
  );
};

export default AuthPage;
