import { Fragment } from 'react';
import useLocale from '../../../hooks/use-locale';
import OrganizationItem from './OrganizationItem';
import classes from './OrganizationList.module.css';

const OrganizationList = ({ items }) => {
  const { strings } = useLocale('organizationsPage');

  return (
    <Fragment>
      <h3 className={classes.total}>{`${strings.total}: ${items.length}`}</h3>
      <ul className={classes.list}>
        {items.map((org) => (
          <OrganizationItem
            key={org._id}
            id={org._id}
            name={org.name}
            description={org.description}
            address={org.address}
            email={org.email}
          />
        ))}
      </ul>
    </Fragment>
  );
};
export default OrganizationList;
