import { useReducer, useCallback } from 'react';
import RequestStatus from '../lib/enums/RequestStatus';

const httpReducer = (state, action) => {
  if (action.type === 'SEND') {
    return {
      data: null,
      error: null,
      status: RequestStatus.Pending,
    };
  }

  if (action.type === 'SUCCESS') {
    return {
      data: action.responseData,
      error: null,
      status: RequestStatus.Completed,
    };
  }

  if (action.type === 'ERROR') {
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
      dispatch({ type: 'SEND' });
      try {
        const responseData = await requestFunction(requestData);
        dispatch({ type: 'SUCCESS', responseData });
      } catch (error) {
        dispatch({
          type: 'ERROR',
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
