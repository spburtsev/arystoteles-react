import { useReducer } from 'react';

const initialInputState = {
  value: '',
  isTouched: false,
};

const valueIsNotEmpty = (value) => value.length !== 0;

const inputStateReducer = (state, action) => {
  if (action.type === 'INPUT') {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === 'BLUR') {
    return { value: state.value, isTouched: true };
  }
  if (action.type === 'RESET') {
    return { value: '', isTouched: false };
  }

  return initialInputState;
};

const useInput = (initialValue = '', validateFunction = valueIsNotEmpty) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, {
    ...initialInputState,
    value: initialValue,
  });

  const valueIsValid = validateFunction(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({ type: 'INPUT', value: event.target.value });
  };

  const inputBlurHandler = () => {
    dispatch({ type: 'BLUR' });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  const force = (value) => {
    dispatch({ type: 'INPUT', value });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    change: valueChangeHandler,
    blur: inputBlurHandler,
    reset,
    force,
  };
};

export default useInput;
