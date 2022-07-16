import useAuth from '../../../hooks/use-auth';
import { useRef } from 'react';
import { useQuery, useMutation } from 'react-query';
import { updateChild } from '../../../lib/api/child';
import LoadingSpinner from '../../ui/LoadingSpinner';
import { fetchMyChildren } from '../../../lib/api/child';
import { Fragment } from 'react';
import LoadingModal from '../../ui/LoadingModal';

const AssignedChildren = ({ medicId }) => {
  const { token } = useAuth();
  const childRef = useRef();
  const { data, isLoading, refetch } = useQuery(
    'children',
    fetchMyChildren(token),
    {
      onError: (err) => alert(err.message),
    },
  );
  const mutChild = useMutation(updateChild, {
    onSuccess: refetch,
    onError: (err) => alert(err.message),
  });

  const assignHandler = (event) => {
    event.preventDefault();
    const selectedChild = childRef.current.value;
    if (selectedChild) {
      mutChild.mutate({
        token,
        childId: selectedChild,
        childData: {
          medic: medicId,
        },
      });
    }
  };

  const unassignHandler = (childId) => (event) => {
    event.preventDefault();
    mutChild.mutate({
      token,
      childId,
      childData: {
        medic: null,
      },
    });
  };

  if (isLoading) {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  const fetchedChildren = data.children.map((child) => child.child);
  console.log(fetchedChildren);
  const assignedChildren = fetchedChildren
    ? fetchedChildren.filter((child) => child.medic === medicId)
    : [];
  const unassignedChildren = fetchedChildren
    ? fetchedChildren.filter((child) => !child.medic || child.medic !== medicId)
    : [];

  return (
    <Fragment>
      {mutChild.isLoading ? <LoadingModal /> : null}
      {assignedChildren ? (
        <ul>
          {assignedChildren.map((child) => {
            return (
              <li
                key={child._id}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                }}
              >
                <p
                  style={{
                    marginRight: '8px',
                  }}
                >
                  {child.firstName}
                </p>
                <button className="btn" onClick={unassignHandler(child._id)}>
                  Unassign
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No children assigned</p>
      )}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '8px',
        }}
      >
        <select
          ref={childRef}
          className="form-control"
          style={{
            marginBottom: '8px',
            width: '500px',
          }}
        >
          {unassignedChildren.map((child) => {
            return (
              <option key={child._id} value={child._id}>
                {child.firstName}
              </option>
            );
          })}
        </select>
        <button className="btn" onClick={assignHandler}>
          Assign
        </button>
      </div>
    </Fragment>
  );
};
export default AssignedChildren;
