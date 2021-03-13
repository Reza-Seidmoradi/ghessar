import axiosApi from '../utils/axiosApi';

export function getUserInfoApi(id) {
  const config = {
    method: 'get',
    url: id ? `/user/${id}` : '/user',
  };
  return axiosApi(config);
}

export function reportUserApi({ userId, reasonId }) {
  const config = {
    method: 'get',
    url: `/user/report/${userId}`,
    data: {
      reasonId,
    },
  };
  return axiosApi(config);
}

export function changeProfileApi({ params }) {
  const config = {
    method: 'put',
    url: '/user',
    data: params,
  };
  return axiosApi(config);
}

export function changeUserPhotoApi(photo) {
  const config = {
    method: 'post',
    url: '/user/profile',
    data: { photo },
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };
  return axiosApi(config);
}
