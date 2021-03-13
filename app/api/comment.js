import axiosApi from '../utils/axiosApi';

export function getAllCommentsApi(twitId) {
  const config = {
    method: 'get',
    url: `/comment/${twitId}`,
  };
  return axiosApi(config);
}

export function createCommentApi({ body, media }) {
  const config = {
    method: 'post',
    url: '/comment',
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

export function likeCommentApi(commentId) {
  const config = {
    method: 'get',
    url: `/comment/like/${commentId}`,
  };
  return axiosApi(config);
}

export function unlikeCommentApi(commentId) {
  const config = {
    method: 'get',
    url: `/comment/unlike/${commentId}`,
  };
  return axiosApi(config);
}

export function retwitCommentApi(commentId) {
  const config = {
    method: 'get',
    url: `/comment/retwit/${commentId}`,
  };
  return axiosApi(config);
}

export function unretwitCommentApi(commentId) {
  const config = {
    method: 'get',
    url: `/comment/unretwit/${commentId}`,
  };
  return axiosApi(config);
}

export function reportCommentApi(commentId) {
  const config = {
    method: 'get',
    url: `/comment/report/${commentId}`,
  };
  return axiosApi(config);
}
