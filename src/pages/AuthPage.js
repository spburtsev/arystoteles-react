import { Fragment, useState } from 'react';
import AuthForm from '../components/auth-page/AuthForm';
import RoleControls from '../components/auth-page/RoleControls';

const AuthPage = () => {
  const [role, setRole] = useState('parent');

  const roleChangeHandler = (selected) => {
    setRole(selected);
  };

  return (
    <Fragment>
      <RoleControls selectedRole={role} onSelectRole={roleChangeHandler} />
      <AuthForm />
    </Fragment>
  );
};

export default AuthPage;
