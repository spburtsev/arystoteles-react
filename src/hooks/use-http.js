import { useReducer, useCallback } from 'react';
import httpReducer from '../lib/helpers/http';
import RequestStatus from '../lib/enums/RequestStatus';

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
