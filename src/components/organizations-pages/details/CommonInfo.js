import AddressIcon from '../../icons/AddressIcon';
import OrganizationIcon from '../../icons/OrganizationIcon';
import InfoItem from './InfoItem';
import MailIcon from '../../icons/MailIcon';
import classes from './CommonInfo.module.css';

const CommonInfo = ({ phone, address, email }) => {
  const addressText = address.replace(', ', '\n');

  return (
    <section className={classes.info}>
      <ul className={classes.list}>
        <InfoItem icon={OrganizationIcon}>
          <address>{phone}</address>
        </InfoItem>
        <InfoItem icon={MailIcon}>
          <address>{email}</address>
        </InfoItem>
        <InfoItem icon={AddressIcon}>
          <address>{addressText}</address>
        </InfoItem>
      </ul>
    </section>
  );
};
export default CommonInfo;
