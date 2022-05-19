import { useContext } from 'react';
import AuthContext from '../context/auth-context';

const useAuth = () => {
  const authCtx = useContext(AuthContext);

  return authCtx;
};
export default useAuth;
