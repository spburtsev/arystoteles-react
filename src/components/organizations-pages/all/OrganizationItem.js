import useLocale from '../../../hooks/use-locale';
import { Link } from 'react-router-dom';
import ArrowRightIcon from '../../icons/ArrowRightIcon';
import AddressIcon from '../../icons/AddressIcon';
import MailIcon from '../../icons/MailIcon';
import classes from './OrganizationItem.module.css';

const OrganizationItem = ({ name, description, address, email, id }) => {
  const { strings } = useLocale('organizationsPage');
  const exploreLink = `/organizations/${id}`;

  return (
    <li className={classes.item}>
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{name}</h2>
          <p>{description}</p>
          <div className={classes.address}>
            <AddressIcon />
            <address>{address}</address>
          </div>
          <div className={classes.address}>
            <MailIcon />
            <address>{email}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Link className="btn" to={exploreLink}>
            <span>{strings.explore}</span>
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
