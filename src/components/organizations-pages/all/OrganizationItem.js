import { useContext } from 'react';
import LocaleContext from '../../../context/locale-context';
import { Link } from 'react-router-dom';
import ArrowRightIcon from '../../icons/ArrowRightIcon';
import AddressIcon from '../../icons/AddressIcon';
import MailIcon from '../../icons/MailIcon';
import classes from './OrganizationItem.module.css';

const OrganizationItem = (props) => {
  const { name, image, location, address, email, id } = props;
  const { localizationObj } = useContext(LocaleContext);
  const locale = localizationObj.organizationsPage;

  const formattedLocation =
    location.replace(', ', '\n') + '\n' + address.replace(', ', '\n');

  const exploreLink = `/organizations/${id}`;

  return (
    <li className={classes.item}>
      <img src={image} alt={name} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{name}</h2>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedLocation}</address>
          </div>
          <div className={classes.address}>
            <MailIcon />
            <address>{email}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Link className="btn" to={exploreLink}>
            <span>{locale.explore}</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Link>
        </div>
      </div>
    </li>
  );
};
export default OrganizationItem;
