import { useReducer, useCallback } from 'react';
import RequestStatus from '../lib/enums/RequestStatus';

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

const useHttp = (requestFunction, startWithPending = false) => {
  const [httpState, dispatch] = useReducer(httpReducer, {
    status: startWithPending ? RequestStatus.Pending : RequestStatus.Unsent,
    data: null,
    error: null,
  });

  const sendRequest = useCallback(
    async (requestData) => {
      dispatch({ type: 'send' });
      try {
        const responseData = await requestFunction(requestData);
        dispatch({ type: 'success', responseData });
      } catch (error) {
        dispatch({
          type: 'error',
          errorMessage: error.message,
        });
      }
    },
    [requestFunction],
  );

  return {
    sendRequest,
    ...httpState,
  };
};

export default useHttp;
