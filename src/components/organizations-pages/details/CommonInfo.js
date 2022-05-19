import AddressIcon from '../../icons/AddressIcon';
import OrganizationIcon from '../../icons/OrganizationIcon';
import InfoItem from './InfoItem';
import classes from './CommonInfo.module.css';

const CommonInfo = (props) => {
  const { country, city, address, image, imageAlt } = props;
  const locationText = `${city}, ${country}`;
  const addressText = address.replace(', ', '\n');

  return (
    <section className={classes.info}>
      <div className={classes.image}>
        <img src={image} alt={imageAlt} />
      </div>
      <ul className={classes.list}>
        <InfoItem icon={OrganizationIcon}>
          <address>{locationText}</address>
        </InfoItem>
        <InfoItem icon={AddressIcon}>
          <address>{addressText}</address>
        </InfoItem>
      </ul>
    </section>
  );
};
export default CommonInfo;
