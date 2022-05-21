import RequestStatus from '../enums/RequestStatus';

const httpReducer = (state, action) => {
  if (action.type === 'send') {
    return {
      data: null,
      error: null,
      status: RequestStatus.Pending,
    };
  }

  if (action.type === 'success') {
    return {
      data: action.responseData,
      error: null,
      status: RequestStatus.Completed,
    };
  }

  if (action.type === 'error') {
    return {
      data: null,
      error: action.errorMessage,
      status: RequestStatus.Completed,
    };
  }

  return state;
};
export default httpReducer;
