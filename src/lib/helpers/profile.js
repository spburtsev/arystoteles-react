export const defaultMenuItems = [
  {
    section: 'myProfile',
    selected: true,
  },
  {
    section: 'changePassword',
    selected: false,
  },
];

export const adminMenuItems = [
  {
    section: 'backups',
    selected: false,
  },
];

const menuItems = {
  default: defaultMenuItems,
  admin: adminMenuItems,
};
export default menuItems;
