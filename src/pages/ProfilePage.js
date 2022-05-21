import { Fragment } from 'react';
import useSelect from '../hooks/use-select';
import useAuth from '../hooks/use-auth';
import menuItems from '../lib/helpers/profile';
import { isAdmin } from '../lib/helpers/auth';
import UserProfile from '../components/profile-page/UserProfile';
import SidePanelMenu from '../components/profile-page/SidePanelMenu';
import ChangePasswordForm from '../components/profile-page/ChangePasswordForm';
import UserProfileWrapper from '../components/profile-page/UserProfileWrapper';

const ProfilePage = () => {
  const auth = useAuth();

  let currentMenuItems = menuItems.default;
  if (isAdmin(auth.role)) {
    currentMenuItems = [...currentMenuItems, ...menuItems.admin];
  }
  const { items, selected } = useSelect(currentMenuItems);

  let section;
  switch (selected.section) {
    case 'profile':
      section = <UserProfile />;
      break;
    case 'changePassword':
      section = <ChangePasswordForm />;
      break;
    default:
      section = <UserProfile />;
  }

  return (
    <Fragment>
      <SidePanelMenu selection={items} />
      <UserProfileWrapper>{section}</UserProfileWrapper>
    </Fragment>
  );
};

export default ProfilePage;
