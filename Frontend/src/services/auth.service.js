import api from '../api';

const register = (name, email, password) =>
  api.post('/auth/register', { name, email, password });

const login = (email, password) =>
  api.post('/auth/login', { email, password })
    .then(res => {
      if (res.data.token) {
        localStorage.setItem('user', JSON.stringify(res.data));
      }
      return res.data;
    });

const logout = () => {
  localStorage.removeItem('user');
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

export default { register, login, logout, getCurrentUser };
