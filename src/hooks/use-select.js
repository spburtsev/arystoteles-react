import { useState } from 'react';

const useSelect = (initialItems, multiple = false) => {
  if (!initialItems.some((item) => item.selected)) {
    initialItems[0].selected = true;
  }

  const [items, setItems] = useState(initialItems);

  const selectItem = (item) => {
    if (multiple) {
      item.selected = !item.selected;
    } else {
      items.forEach((i) => {
        i.selected = i === item;
      });
    }
    setItems([...items]);
  };

  const allItems = items.map((item) => ({
    ...item,
    onSelect: selectItem.bind(null, item),
  }));
  let selected;
  if (multiple) {
    selected = items.filter((item) => item.selected);
  } else {
    selected = items.find((item) => item.selected);
  }

  return {
    items: allItems,
    selected,
  };
};
export default useSelect;
