import { call, put, select, takeLatest } from 'redux-saga/effects';

import { registerApi } from '../../api/auth';
import { makeSelectEmail } from './selectors';
import { setAuth } from '../../utils/auth';
import { Actions } from 'react-native-router-flux';
import axiosApi from '../../utils/axiosApi';
import { changeProfileApi, changeUserPhotoApi, getUserInfoApi, reportUserApi } from '../../api/user';
import {
  getAllTwitsApi,
  likeTwitApi,
  retwitTwitApi,
  reportTwitApi,
  unlikeTwitApi,
  unretwitTwitApi,
  getReportTwitTypesApi,
  searchTwitApi,
} from '../../api/twit';
import {
  getAllCommentsApi,
  likeCommentApi,
  reportCommentApi,
  retwitCommentApi,
  unlikeCommentApi,
  unretwitCommentApi,
} from '../../api/comment';

import {
  USER_REGISTER_ACTION,
  SEND_CODE_ACTION,
  GET_USER_INFO_ACTION,
  REPORT_USER_ACTION,
  GET_TWITS_ACTION,
  CREATE_TWIT_ACTION,
  LIKE_TWIT_ACTION,
  RETWIT_TWIT_ACTION,
  REPORT_TWIT_ACTION,
  CREATE_COMMENT_ACTION,
  LIKE_COMMENT_ACTION,
  RETWIT_COMMENT_ACTION,
  REPORT_COMMENT_ACTION,
  UNLIKE_TWIT_ACTION,
  UNRETWIT_TWIT_ACTION,
  UNLIKE_COMMENT_ACTION,
  UNRETWIT_COMMENT_ACTION,
  GET_REPORT_TWIT_TYPES_ACTION,
  SEARCH_TWIT_ACTION,
  CHANGE_PROFILE_ACTION,
  CHANGE_USER_PHOTO_ACTION,
  GET_COMMENTS_ACTION,
} from './constants';
import {
  getUserInfoFailAction,
  getUserInfoSuccessAction,
  registerUserFailAction,
  registerUserSuccessAction,
  sendCodeFailAction,
  sendCodeSuccessAction,
  reportUserSuccessAction,
  reportUserFailAction,
  getTwitsFailAction,
  getTwitsSuccessAction,
  createTwitFailAction,
  createTwitSuccessAction,
  likeTwitFailAction,
  likeTwitSuccessAction,
  retwitTwitSuccessAction,
  retwitTwitFailAction,
  reportTwitSuccessAction,
  reportTwitFailAction,
  createCommentSuccessAction,
  createCommentFailAction,
  likeCommentSuccessAction,
  likeCommentFailAction,
  retwitCommentSuccessAction,
  retwitCommentFailAction,
  reportCommentSuccessAction,
  reportCommentFailAction,
  unlikeTwitSuccessAction,
  unlikeTwitFailAction,
  unretwitTwitSuccessAction,
  unretwitTwitFailAction,
  unlikeCommentSuccessAction,
  unlikeCommentFailAction,
  unretwitCommentSuccessAction,
  unretwitCommentFailAction,
  getReportTwitTypesFailAction,
  getReportTwitTypesSuccessAction,
  searchTwitSuccessAction,
  searchTwitFailAction,
  changeProfileFailAction,
  changeProfileSuccessAction,
  changeUserPhotoFailAction,
  changeUserPhotoSuccessAction,
  getCommentsFailAction,
  getCommentsSuccessAction,
} from './actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

//#region USER

function* registerUser({ email }) {
  try {
    yield call(registerApi, { email: email });
    Actions.push('sendCode');
    yield put(registerUserSuccessAction({ email: email }));
  } catch (error) {
    console.log(error);
    yield put(registerUserFailAction(error));
  }
}

function* sendCode({ code }) {
  try {
    const { register } = yield select(makeSelectEmail());
    const { email } = register;
    const response = yield axiosApi.post('/auth/authenticate', {
      email: email.email,
      code: code,
      client_id: 2,
      client_secret: 'eIH9ZSe7qNTQgkKsHUlXpb0bLgnJu5IEyvy4ICy9',
    });
    setAuth(response.data);
    Actions.push('login');
    yield put(sendCodeSuccessAction(response.data));
  } catch (error) {
    console.log('ERROR', error);
    yield put(sendCodeFailAction(error));
  }
}

function* getUserInfo({ id }) {
  try {
    const response = yield call(getUserInfoApi, id);
    yield AsyncStorage.setItem('me', JSON.stringify(response.data));
    yield put(getUserInfoSuccessAction(response.data));
  } catch (error) {
    yield put(getUserInfoFailAction(error.response));
  }
}

function* reportUser({ userId, reasonId }) {
  try {
    const response = yield call(reportUserApi, { userId, reasonId });
    yield put(reportUserSuccessAction(response.data));
  } catch (error) {
    yield put(reportUserFailAction(error.response));
  }
}

function* changeProfile({ params }) {
  try {
    const response = yield call(changeProfileApi, { params });
    yield put(changeProfileSuccessAction(response.data));
  } catch (error) {
    yield put(changeProfileFailAction(error));
  }
}

function* changeUserPhoto({ photo }) {
  try {
    const formData = new FormData();
    formData.append('photo', {
      uri: photo.uri,
      name: `profile.${photo.uri.substr(-3, 3)}`,
      type: `image/${photo.uri.substr(-3, 3)}`,
    });
    const response = yield axiosApi.post('/user/profile', formData);
    yield put(changeUserPhotoSuccessAction(response.data));
  } catch (error) {
    yield put(changeUserPhotoFailAction(error));
  }
}

//#endregion USER

//#region TWIT

function* getAllTwits() {
  try {
    const response = yield call(getAllTwitsApi);
    yield put(getTwitsSuccessAction(response.data));
  } catch (error) {
    yield put(getTwitsFailAction(error));
  }
}

function* searchTwit({ searchText }) {
  try {
    const response = yield call(searchTwitApi, searchText);
    yield put(searchTwitSuccessAction(response.data));
  } catch (error) {
    yield put(searchTwitFailAction(error));
  }
}

function* createTwit({ body, media }) {
  try {
    let formData = new FormData();
    if (body) formData.append('body', body);
    if (media) {
      formData.append('media', {
        uri: media.uri,
        name: `new.${media.uri.substr(-3, 3)}`,
        type: `image/${media.uri.substr(-3, 3)}`,
      });
    }
    const response = yield axiosApi.post('/twit', formData);
    yield put(createTwitSuccessAction(response.data));
  } catch (error) {
    console.log(error);
    yield put(createTwitFailAction(error));
  }
}

function* likeTwit({ twitId }) {
  try {
    const response = yield call(likeTwitApi, twitId);
    yield put(likeTwitSuccessAction(response.data));
  } catch (error) {
    yield put(likeTwitFailAction(error.response));
  }
}

function* unlikeTwit({ twitId }) {
  try {
    const response = yield call(unlikeTwitApi, twitId);
    yield put(unlikeTwitSuccessAction(response.data));
  } catch (error) {
    yield put(unlikeTwitFailAction(error.response));
  }
}

function* retwitTwit({ twitId }) {
  try {
    const response = yield call(retwitTwitApi, twitId);
    yield put(retwitTwitSuccessAction(response.data));
  } catch (error) {
    yield put(retwitTwitFailAction(error.response));
  }
}

function* unretwitTwit({ twitId }) {
  try {
    const response = yield call(unretwitTwitApi, twitId);
    yield put(unretwitTwitSuccessAction(response.data));
  } catch (error) {
    yield put(unretwitTwitFailAction(error.response));
  }
}

function* getReportTwitTypes() {
  try {
    const response = yield call(getReportTwitTypesApi);
    yield put(getReportTwitTypesSuccessAction(response.data));
  } catch (error) {
    yield put(getReportTwitTypesFailAction(error));
  }
}

function* reprotTwit({ twitId, reasonId }) {
  try {
    const response = yield call(reportTwitApi, { twitId, reasonId });
    yield put(reportTwitSuccessAction(response.data));
  } catch (error) {
    yield put(reportTwitFailAction(error.response));
  }
}

//#endregion TWIT

//#region COMMENT

function* getAllComments({ id }) {
  try {
    const response = yield call(getAllCommentsApi, id);
    yield put(getCommentsSuccessAction(response.data));
  } catch (error) {
    yield put(getCommentsFailAction(error));
  }
}

function* createComment({ body, media }) {
  try {
    let formData = new FormData();
    if (body) formData.append('body', body);
    if (media) {
      formData.append('media', {
        uri: media.uri,
        name: 'new.jpg',
        type: 'image/jpg',
      });
    }
    const response = yield axiosApi.post('/comment', formData);
    yield put(createCommentSuccessAction(response.data));
  } catch (error) {
    console.log(error);
    yield put(createCommentFailAction(error));
  }
}

function* likeComment({ commentId }) {
  try {
    const response = yield call(likeCommentApi, commentId);
    yield put(likeCommentSuccessAction(response.data));
  } catch (error) {
    yield put(likeCommentFailAction(error.response));
  }
}

function* unlikeComment({ commentId }) {
  try {
    const response = yield call(unlikeCommentApi, commentId);
    yield put(unlikeCommentSuccessAction(response.data));
  } catch (error) {
    console.log(error);
    yield put(unlikeCommentFailAction(error.response));
  }
}

function* retwitComment({ commentId }) {
  try {
    const response = yield call(retwitCommentApi, commentId);
    yield put(retwitCommentSuccessAction(response.data));
  } catch (error) {
    yield put(retwitCommentFailAction(error.response));
  }
}

function* unretwitComment({ commentId }) {
  try {
    const response = yield call(unretwitCommentApi, commentId);
    yield put(unretwitCommentSuccessAction(response.data));
  } catch (error) {
    yield put(unretwitCommentFailAction(error.response));
  }
}

function* reportComment({ commentId, reasonId }) {
  try {
    const response = yield call(reportCommentApi, { commentId, reasonId });
    yield put(reportCommentSuccessAction(response.data));
  } catch (error) {
    yield put(reportCommentFailAction(error.response));
  }
}

//#endregion COMMENT

export default function* app() {
  yield takeLatest(USER_REGISTER_ACTION, registerUser);
  yield takeLatest(SEND_CODE_ACTION, sendCode);

  yield takeLatest(GET_USER_INFO_ACTION, getUserInfo);
  yield takeLatest(REPORT_USER_ACTION, reportUser);
  yield takeLatest(CHANGE_PROFILE_ACTION, changeProfile);
  yield takeLatest(CHANGE_USER_PHOTO_ACTION, changeUserPhoto);

  yield takeLatest(GET_TWITS_ACTION, getAllTwits);
  yield takeLatest(SEARCH_TWIT_ACTION, searchTwit);
  yield takeLatest(CREATE_TWIT_ACTION, createTwit);
  yield takeLatest(LIKE_TWIT_ACTION, likeTwit);
  yield takeLatest(UNLIKE_TWIT_ACTION, unlikeTwit);
  yield takeLatest(RETWIT_TWIT_ACTION, retwitTwit);
  yield takeLatest(UNRETWIT_TWIT_ACTION, unretwitTwit);
  yield takeLatest(GET_REPORT_TWIT_TYPES_ACTION, getReportTwitTypes);
  yield takeLatest(REPORT_TWIT_ACTION, reprotTwit);

  yield takeLatest(GET_COMMENTS_ACTION, getAllComments);
  yield takeLatest(CREATE_COMMENT_ACTION, createComment);
  yield takeLatest(LIKE_COMMENT_ACTION, likeComment);
  yield takeLatest(UNLIKE_COMMENT_ACTION, unlikeComment);
  yield takeLatest(RETWIT_COMMENT_ACTION, retwitComment);
  yield takeLatest(UNRETWIT_COMMENT_ACTION, unretwitComment);
  yield takeLatest(REPORT_COMMENT_ACTION, reportComment);
}
