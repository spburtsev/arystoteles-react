import { useState } from 'react';

const useSet = (initialValues, compare) => {
  const [items, setItems] = useState(initialValues);

  const add = (item) => {
    const itemAlreadyThere = items.includes((x) => compare(x, item));
    console.log(itemAlreadyThere);
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
