import React from 'react';

const ItemListPresentation = ({ items, error, loading }) => {
  if (loading) return <p>Đang tải...</p>;
  if (error) return <p>Lỗi: {error}</p>;

  return (
    <div>
      <h1>Danh sách sản phẩm</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListPresentation;
