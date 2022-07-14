import useAuth from '../../../hooks/use-auth';
import { useRef } from 'react';
import { useQuery } from 'react-query';
import LoadingSpinner from '../../ui/LoadingSpinner';
import { fetchMyChildren } from '../../../lib/api/child';
import { Fragment } from 'react';

const AssignedChildren = ({ medicId }) => {
  const { token } = useAuth();
  const childRef = useRef();
  const { data, isLoading } = useQuery('children', fetchMyChildren(token), {
    onError: (err) => alert(err.message),
  });

  const assignHandler = (event) => {
    event.preventDefault();
    const selectedChild = childRef.current.value;
    if (selectedChild) {
      console.log(selectedChild);
    }
  };

  if (isLoading) {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  console.log(data);
  const fetchedChildren = data.data;
  const children = fetchedChildren
    ? fetchedChildren.filter((child) => child.medicId === medicId)
    : [];
  return (
    <Fragment>
      {data.data ? (
        <ul>
          {children.map((child) => (
            <li key={child._id}>{child.name}</li>
          ))}
        </ul>
      ) : (
        <p>No children assigned</p>
      )}
      <select ref={childRef}>
        <option value="">Select child</option>
        {children.map((child) => (
          <option key={child._id} value={child._id}>
            {child.firstName}
          </option>
        ))}
      </select>
      <button className="btn" onClick={assignHandler}>
        Assign
      </button>
    </Fragment>
  );
};
export default AssignedChildren;
