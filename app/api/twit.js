import axiosApi from '../utils/axiosApi';

export function getAllTwitsApi() {
  const config = {
    method: 'get',
    url: '/twit',
  };

  return axiosApi(config);
}

export function searchTwitApi(searchText) {
  const config = {
    method: 'get',
    url: `/twit/search/${searchText}`,
  };

  return axiosApi(config);
}

export function createTwitApi({ body, media }) {
  const config = {
    method: 'post',
    url: '/twit',
    data: {
      body,
      media,
    },
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };
  return axiosApi(config);
}

export function likeTwitApi(twitId) {
  const config = {
    method: 'get',
    url: `/twit/like/${twitId}`,
  };
  return axiosApi(config);
}

export function unlikeTwitApi(twitId) {
  const config = {
    method: 'get',
    url: `/twit/unlike/${twitId}`,
  };
  return axiosApi(config);
}

export function retwitTwitApi(twitId) {
  const config = {
    method: 'get',
    url: `/twit/retwit/${twitId}`,
  };
  return axiosApi(config);
}

export function unretwitTwitApi(twitId) {
  const config = {
    method: 'get',
    url: `/twit/unretwit/${twitId}`,
  };
  return axiosApi(config);
}

export function getReportTwitTypesApi() {
  const config = {
    method: 'get',
    url: '/twit/report/types',
  };
  return axiosApi(config);
}

export function reportTwitApi({ twitId, reasonId }) {
  const config = {
    method: 'get',
    url: `/twit/report/${twitId}`,
    data: {
      reasonId,
    },
  };
  return axiosApi(config);
}
