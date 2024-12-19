const BASE_URL = 'https://reqres.in/api'; // Đổi URL này thành API của bạn

// Lấy danh sách
export const getList = async (endpoint) => {
  const response = await fetch(`${BASE_URL}/${endpoint}`);
  if (!response.ok) {
    throw new Error(`Lỗi: ${response.status}`);
  }
  return response.json();
};

// Lấy chi tiết theo ID
export const getById = async (endpoint, id) => {
  const response = await fetch(`${BASE_URL}/${endpoint}/${id}`);
  if (!response.ok) {
    throw new Error(`Lỗi: ${response.status}`);
  }
  return response.json();
};

// Tạo mới
export const createItem = async (endpoint, data) => {
  const response = await fetch(`${BASE_URL}/${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error(`Lỗi: ${response.status}`);
  }
  return response.json();
};

// Cập nhật
export const updateItem = async (endpoint, id, data) => {
  const response = await fetch(`${BASE_URL}/${endpoint}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error(`Lỗi: ${response.status}`);
  }
  return response.json();
};

// Xóa
export const deleteItem = async (endpoint, id) => {
  const response = await fetch(`${BASE_URL}/${endpoint}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error(`Lỗi: ${response.status}`);
  }
  return response.json();
};

// Đăng nhập
export const login = async (data) => {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error(`Lỗi: ${response.status}`);
  }
  return response.json();
};

// Đăng ký
export const register = async (data) => {
  const response = await fetch(`${BASE_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error(`Lỗi: ${response.status}`);
  }
  return response.json();
};
