import { useState } from 'react';
import _ from 'lodash';

const useSet = (initialValues, compare = _.isEqual) => {
  const [items, setItems] = useState(initialValues);

  const add = (item) => {
    const itemAlreadyThere = items.includes((x) => compare(x, item));
    if (itemAlreadyThere) {
      return;
    }
    setItems([...items, item]);
  };

  const remove = (item) => {
    setItems(items.filter((x) => !compare(x, item)));
  };

  const reset = () => {
    setItems([]);
  };

  return {
    items,
    add,
    remove,
    reset,
  };
};
export default useSet;
