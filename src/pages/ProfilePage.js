import useSelect from '../hooks/use-select';
import useAuth from '../hooks/use-auth';
import menuItems from '../lib/helpers/profile';
import { isAdmin } from '../lib/helpers/auth';
import UserProfile from '../components/profile-page/UserProfile';

const ProfilePage = () => {
  const auth = useAuth();

  let currentMenuItems = menuItems.default;
  if (isAdmin(auth.role)) {
    currentMenuItems = [...currentMenuItems, ...menuItems.admin];
  }
  const menu = useSelect(currentMenuItems);

  return <UserProfile menu={menu} />;
};

export default ProfilePage;
