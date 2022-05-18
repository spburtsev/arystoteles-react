import OrganizationItem from './OrganizationItem';
import classes from './OrganizationList.module.css';

function OrganizationList(props) {
  const { items } = props;

  return (
    <ul className={classes.list}>
      {items.map((org) => (
        <OrganizationItem
          key={org.id}
          id={org.id}
          name={org.name}
          location={org.location}
          address={org.address}
          image={org.image}
          email={org.email}
        />
      ))}
    </ul>
  );
}
export default OrganizationList;
