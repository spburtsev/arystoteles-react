import CommonSection from './CommonSection';
import ChangePasswordForm from './ChangePasswordForm';
import SidePanelMenu from './SidePanelMenu';
import classes from './UserProfile.module.css';

const UserProfile = (props) => {
  const { menu } = props;

  let DisplayedSection;
  switch (menu.selected.section) {
    case 'profile':
      DisplayedSection = CommonSection;
      break;
    case 'changePassword':
      DisplayedSection = ChangePasswordForm;
      break;
    default:
      DisplayedSection = CommonSection;
  }

  return (
    <div className={classes.wrapper}>
      <SidePanelMenu menuItems={menu.items} />
      <DisplayedSection />
    </div>
  );
};

export default UserProfile;
