import axiosApi from '../utils/axiosApi';

export function registerApi({ email }) {
  const config = {
    method: 'post',
    url: '/auth/register',
    data: { email: email },
  };
  return axiosApi(config);
}

export function sendCodeApi({ code }) {
  const config = {
    method: 'post',
    url: '/auth/authenticate',
    data: {
      code,
      client_id: 2,
      client_secret: 'eIH9ZSe7qNTQgkKsHUlXpb0bLgnJu5IEyvy4ICy9',
    },
  };
  return axiosApi(config);
}

export function loginApi({ username, password }) {
  const config = {
    method: 'post',
    url: '/auth/login',
    data: {
      username,
      password,
      client_id: 2,
      client_secret: 'eIH9ZSe7qNTQgkKsHUlXpb0bLgnJu5IEyvy4ICy9',
    },
  };
  return axiosApi(config);
}
