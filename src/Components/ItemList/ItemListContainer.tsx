import React, { useEffect, useState } from 'react';

import ItemListPresentation from './ItemListPresentation';
import { getList } from '../../Api/api';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
console.log(items);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await getList('users?page=1&per_page=10');
        setItems(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  return (
    <ItemListPresentation
      items={items}
      error={error}
      loading={loading}
    />
  );
};

export default ItemListContainer;
