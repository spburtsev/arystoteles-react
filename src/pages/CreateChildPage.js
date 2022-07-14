import { Fragment, useRef } from 'react';
import { useMutation } from 'react-query';
import { useHistory } from 'react-router-dom';
import useAuth from '../hooks/use-auth';
import { createChild } from '../lib/api/child';
import GoBack from '../components/ui/GoBack';
import LoadingModal from '../components/ui/LoadingModal';

const CreateChildPage = () => {
  const { token } = useAuth();
  const { replace } = useHistory();
  const firstNameRef = useRef(null);
  const birthDateRef = useRef(null);
  const genderRef = useRef(null);
  const weightPrimaryRef = useRef(null);
  const weightSecondaryRef = useRef(null);
  const relationRef = useRef(null);
  const req = useMutation(createChild, {
    onError: (err) => alert(err.message),
    onSuccess: () => {
      replace('/children');
    },
  });

  const submitHandler = (event) => {
    event.preventDefault();

    const childData = {
      firstName: firstNameRef.current?.value,
      birthDate: birthDateRef.current?.value,
      gender: genderRef.current?.value,
      birthWeightPrimary: weightPrimaryRef.current?.value,
      birthWeightSecondary: weightSecondaryRef.current?.value,
      relation: relationRef.current?.value,
    };
    console.log(childData);
    req.mutate({ token, childData });
  };

  return (
    <Fragment>
      {req.isLoading ? <LoadingModal /> : null}
      <GoBack route="/children" />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '20px',
        }}
      >
        <h1>Add Child Profile</h1>
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              ref={firstNameRef}
            />
            <label htmlFor="birthDate">Birth Date</label>
            <input
              type="date"
              className="form-control"
              id="birthDate"
              ref={birthDateRef}
            />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select id="gender" className="form-control" ref={genderRef}>
              <option value={'Male'}>Male</option>
              <option value={'Female'}>Female</option>
            </select>
          </div>
          <hr />
          <h4>Birth Weight</h4>
          <div className="form-group">
            <label htmlFor="weightPrimary">Weight, kg</label>
            <input
              type="number"
              className="form-control"
              id="weightPrimary"
              ref={weightPrimaryRef}
            />
            <label htmlFor="weightSecondary">Weight, g</label>
            <input
              type="number"
              className="form-control"
              id="weightSecondary"
              ref={weightSecondaryRef}
            />
          </div>
          <hr />
          <div className="form-group">
            <label htmlFor="relation">Your relation</label>
            <select id="relation" className="form-control" ref={relationRef}>
              <option value={'Mother'}>Mother</option>
              <option value={'Father'}>Father</option>
              <option value={'Sister'}>Sister</option>
              <option value={'Brother'}>Brother</option>
              <option value={'Nanny'}>Nanny</option>
              <option value={'Other'}>Other</option>
            </select>
          </div>
          <button
            style={{
              marginTop: '12px',
              width: '100%',
            }}
            type="submit"
            className="btn"
          >
            Submit
          </button>
        </form>
      </div>
    </Fragment>
  );
};
export default CreateChildPage;
