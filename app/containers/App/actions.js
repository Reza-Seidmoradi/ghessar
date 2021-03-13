import {
  USER_REGISTER_ACTION,
  USER_REGISTER_SUCCESS_ACTION,
  USER_REGISTER_FAIL_ACTION,
  SEND_CODE_ACTION,
  SEND_CODE_SUCCESS_ACTION,
  SEND_CODE_FAIL_ACTION,
  GET_USER_INFO_ACTION,
  GET_USER_INFO_FAIL_ACTION,
  GET_USER_INFO_SUCCESS_ACTION,
  GET_TWITS_ACTION,
  GET_TWITS_SUCCESS_ACTION,
  GET_TWITS_FAIL_ACTION,
  CREATE_TWIT_ACTION,
  CREATE_TWIT_SUCCESS_ACTION,
  CREATE_TWIT_FAIL_ACTION,
  REPORT_USER_ACTION,
  REPORT_USER_SUCCESS_ACTION,
  REPORT_USER_FAIL_ACTION,
  LIKE_TWIT_ACTION,
  LIKE_TWIT_SUCCESS_ACTION,
  LIKE_TWIT_FAIL_ACTION,
  RETWIT_TWIT_ACTION,
  RETWIT_TWIT_SUCCESS_ACTION,
  RETWIT_TWIT_FAIL_ACTION,
  REPORT_TWIT_ACTION,
  REPORT_TWIT_SUCCESS_ACTION,
  REPORT_TWIT_FAIL_ACTION,
  CREATE_COMMENT_ACTION,
  CREATE_COMMENT_SUCCESS_ACTION,
  CREATE_COMMENT_FAIL_ACTION,
  LIKE_COMMENT_ACTION,
  LIKE_COMMENT_SUCCESS_ACTION,
  LIKE_COMMENT_FAIL_ACTION,
  RETWIT_COMMENT_SUCCESS_ACTION,
  RETWIT_COMMENT_ACTION,
  REPORT_COMMENT_ACTION,
  REPORT_COMMENT_SUCCESS_ACTION,
  REPORT_COMMENT_FAIL_ACTION,
  UNLIKE_TWIT_ACTION,
  UNLIKE_TWIT_SUCCESS_ACTION,
  UNLIKE_TWIT_FAIL_ACTION,
  UNRETWIT_TWIT_ACTION,
  UNRETWIT_TWIT_SUCCESS_ACTION,
  UNRETWIT_TWIT_FAIL_ACTION,
  UNLIKE_COMMENT_ACTION,
  UNLIKE_COMMENT_SUCCESS_ACTION,
  UNLIKE_COMMENT_FAIL_ACTION,
  UNRETWIT_COMMENT_ACTION,
  UNRETWIT_COMMENT_SUCCESS_ACTION,
  UNRETWIT_COMMENT_FAIL_ACTION,
  GET_REPORT_TWIT_TYPES_ACTION,
  GET_REPORT_TWIT_TYPES_SUCCESS_ACTION,
  GET_REPORT_TWIT_TYPES_FAIL_ACTION,
  SEARCH_TWIT_ACTION,
  SEARCH_TWIT_SUCCESS_ACTION,
  SEARCH_TWIT_FAIL_ACTION,
  CHANGE_PROFILE_ACTION,
  CHANGE_PROFILE_SUCCESS_ACTION,
  CHANGE_PROFILE_FAIL_ACTION,
  CHANGE_USER_PHOTO_ACTION,
  CHANGE_USER_PHOTO_SUCCESS_ACTION,
  CHANGE_USER_PHOTO_FAIL_ACTION,
  GET_COMMENTS_ACTION,
  GET_COMMENTS_SUCCESS_ACTION,
  GET_COMMENTS_FAIL_ACTION,
} from './constants';

//#region REGISTER_USER

export function registerUserAction(email) {
  return {
    type: USER_REGISTER_ACTION,
    email: email,
  };
}

export function registerUserSuccessAction(email) {
  return {
    type: USER_REGISTER_SUCCESS_ACTION,
    email: email,
  };
}

export function registerUserFailAction(error) {
  return {
    type: USER_REGISTER_FAIL_ACTION,
    error,
  };
}

//#endregion REGISTER_USER

//#region SEND_CODE

export function sendCodeAction(code) {
  return {
    type: SEND_CODE_ACTION,
    code,
  };
}

export function sendCodeSuccessAction(token) {
  return {
    type: SEND_CODE_SUCCESS_ACTION,
    token,
  };
}

export function sendCodeFailAction(error) {
  return {
    type: SEND_CODE_FAIL_ACTION,
    error,
  };
}

//#endregion SEND_CODE

//#region GET_USER_INFO
export function getUserInfoAction(id) {
  return {
    type: GET_USER_INFO_ACTION,
    id,
  };
}

export function getUserInfoSuccessAction(data) {
  return {
    type: GET_USER_INFO_SUCCESS_ACTION,
    data,
  };
}

export function getUserInfoFailAction(error) {
  return {
    type: GET_USER_INFO_FAIL_ACTION,
    error,
  };
}

//#endregion GET_USER_INFO

//#region REPORT_USER

export function reportUserAction(userId, reasonId) {
  return {
    type: REPORT_USER_ACTION,
    userId,
    reasonId,
  };
}

export function reportUserSuccessAction(data) {
  return {
    type: REPORT_USER_SUCCESS_ACTION,
    data,
  };
}

export function reportUserFailAction(error) {
  return {
    type: REPORT_USER_FAIL_ACTION,
    error,
  };
}

//#endregion REPORT_USER

//#region CHANGE_PROFILE

export function changeProfileAction(params) {
  return {
    type: CHANGE_PROFILE_ACTION,
    params,
  };
}

export function changeProfileSuccessAction(data) {
  return {
    type: CHANGE_PROFILE_SUCCESS_ACTION,
    data,
  };
}

export function changeProfileFailAction(error) {
  return {
    type: CHANGE_PROFILE_FAIL_ACTION,
    error,
  };
}

//#endregion CHANGE_PROFILE

//#region CHANGE_USER_PHOTO

export function changeUserPhotoAction(photo) {
  return {
    type: CHANGE_USER_PHOTO_ACTION,
    photo,
  };
}

export function changeUserPhotoSuccessAction(data) {
  return {
    type: CHANGE_USER_PHOTO_SUCCESS_ACTION,
    data,
  };
}

export function changeUserPhotoFailAction(error) {
  return {
    type: CHANGE_USER_PHOTO_FAIL_ACTION,
    error,
  };
}

//#endregion CHANGE_USER_PHOTO

//#region GET_TWITS

export function getTwitsAction() {
  return {
    type: GET_TWITS_ACTION,
  };
}

export function getTwitsSuccessAction(data) {
  return {
    type: GET_TWITS_SUCCESS_ACTION,
    data,
  };
}

export function getTwitsFailAction(error) {
  return {
    type: GET_TWITS_FAIL_ACTION,
    error,
  };
}

//#endregion GET_TWITS

//#region SEARCH_TWIT

export function searchTwitAction(searchText) {
  return {
    type: SEARCH_TWIT_ACTION,
    searchText,
  };
}

export function searchTwitSuccessAction(data) {
  return {
    type: SEARCH_TWIT_SUCCESS_ACTION,
    data,
  };
}

export function searchTwitFailAction(error) {
  return {
    type: SEARCH_TWIT_FAIL_ACTION,
    error,
  };
}

//#endregion SEARCH_TWIT

//#region CREATE_TWIT

export function createTwitAction(body, media) {
  return {
    type: CREATE_TWIT_ACTION,
    body,
    media,
  };
}

export function createTwitSuccessAction(data) {
  return {
    type: CREATE_TWIT_SUCCESS_ACTION,
    data,
  };
}

export function createTwitFailAction(error) {
  return {
    type: CREATE_TWIT_FAIL_ACTION,
    error,
  };
}

//#endregion CREATE_TWIT

//#region LIKE_TWIT

export function likeTwitAction(twitId) {
  return {
    type: LIKE_TWIT_ACTION,
    twitId,
  };
}

export function likeTwitSuccessAction(data) {
  return {
    type: LIKE_TWIT_SUCCESS_ACTION,
    data,
  };
}

export function likeTwitFailAction(error) {
  return {
    type: LIKE_TWIT_FAIL_ACTION,
    error,
  };
}

//#endregion LIKE_TWIT

//#region UNLIKE_TWIT

export function unlikeTwitAction(twitId) {
  return {
    type: UNLIKE_TWIT_ACTION,
    twitId,
  };
}

export function unlikeTwitSuccessAction(data) {
  return {
    type: UNLIKE_TWIT_SUCCESS_ACTION,
    data,
  };
}

export function unlikeTwitFailAction(error) {
  return {
    type: UNLIKE_TWIT_FAIL_ACTION,
    error,
  };
}

//#endregion UNLIKE_TWIT

//#region RETWIT_TWIT

export function retwitTwitAction(twitId) {
  return {
    type: RETWIT_TWIT_ACTION,
    twitId,
  };
}

export function retwitTwitSuccessAction(data) {
  return {
    type: RETWIT_TWIT_SUCCESS_ACTION,
    data,
  };
}

export function retwitTwitFailAction(error) {
  return {
    type: RETWIT_TWIT_FAIL_ACTION,
    error,
  };
}

//#endregion RETWIT_TWIT

//#region UNRETWIT_TWIT

export function unretwitTwitAction(twitId) {
  return {
    type: UNRETWIT_TWIT_ACTION,
    twitId,
  };
}

export function unretwitTwitSuccessAction(data) {
  return {
    type: UNRETWIT_TWIT_SUCCESS_ACTION,
    data,
  };
}

export function unretwitTwitFailAction(error) {
  return {
    type: UNRETWIT_TWIT_FAIL_ACTION,
    error,
  };
}

//#endregion UNRETWIT_TWIT

//#region GET_REPORT_TWIT_TYPE

export function getReportTwitTypesAction() {
  return {
    type: GET_REPORT_TWIT_TYPES_ACTION,
  };
}

export function getReportTwitTypesSuccessAction(data) {
  return {
    type: GET_REPORT_TWIT_TYPES_SUCCESS_ACTION,
    data,
  };
}

export function getReportTwitTypesFailAction(error) {
  return {
    type: GET_REPORT_TWIT_TYPES_FAIL_ACTION,
    error,
  };
}

//#endregion GET_REPORT_TWIT_TYPE

//#region REPORT_TWIT

export function reportTwitAction(twitId, reasonId) {
  return {
    type: REPORT_TWIT_ACTION,
    twitId,
    reasonId,
  };
}

export function reportTwitSuccessAction(data) {
  return {
    type: REPORT_TWIT_SUCCESS_ACTION,
    data,
  };
}

export function reportTwitFailAction(error) {
  return {
    type: REPORT_TWIT_FAIL_ACTION,
    error,
  };
}

//#endregion REPORT_TWIT

//#region GET_COMMENTS

export function getCommentsAction(id) {
  return {
    type: GET_COMMENTS_ACTION,
    id,
  };
}

export function getCommentsSuccessAction(data) {
  return {
    type: GET_COMMENTS_SUCCESS_ACTION,
    data,
  };
}

export function getCommentsFailAction(error) {
  return {
    type: GET_COMMENTS_FAIL_ACTION,
    error,
  };
}

//#endregion GET_COMMENTS

//#region CREATE_COMMENT

export function createCommentAction(body, media) {
  return {
    type: CREATE_COMMENT_ACTION,
    body,
    media,
  };
}

export function createCommentSuccessAction(data) {
  return {
    type: CREATE_COMMENT_SUCCESS_ACTION,
    data,
  };
}

export function createCommentFailAction(error) {
  return {
    type: CREATE_COMMENT_FAIL_ACTION,
    error,
  };
}

//#endregion CREATE_COMMENT

//#region LIKE_COMMENT

export function likeCommentAction(commentId) {
  return {
    type: LIKE_COMMENT_ACTION,
    commentId,
  };
}

export function likeCommentSuccessAction(data) {
  return {
    type: LIKE_COMMENT_SUCCESS_ACTION,
    data,
  };
}

export function likeCommentFailAction(error) {
  return {
    type: LIKE_COMMENT_FAIL_ACTION,
    error,
  };
}

//#endregion LIKE_COMMENT

//#region UNLIKE_COMMENT

export function unlikeCommentAction(commentId) {
  return {
    type: UNLIKE_COMMENT_ACTION,
    commentId,
  };
}

export function unlikeCommentSuccessAction(data) {
  return {
    type: UNLIKE_COMMENT_SUCCESS_ACTION,
    data,
  };
}

export function unlikeCommentFailAction(error) {
  return {
    type: UNLIKE_COMMENT_FAIL_ACTION,
    error,
  };
}

//#endregion UNLIKE_COMMENT

//#region RETWIT_COMMENT

export function retwitCommentAction(commentId) {
  return {
    type: RETWIT_COMMENT_ACTION,
    commentId,
  };
}

export function retwitCommentSuccessAction(data) {
  return {
    type: RETWIT_COMMENT_SUCCESS_ACTION,
    data,
  };
}

export function retwitCommentFailAction(error) {
  return {
    type: RETWIT_COMMENT_FAIL_ACTION,
    error,
  };
}

//#endregion RETWIT_COMMENT

//#region UNRETWIT_COMMENT

export function unretwitCommentAction(commentId) {
  return {
    type: UNRETWIT_COMMENT_ACTION,
    commentId,
  };
}

export function unretwitCommentSuccessAction(data) {
  return {
    type: UNRETWIT_COMMENT_SUCCESS_ACTION,
    data,
  };
}

export function unretwitCommentFailAction(error) {
  return {
    type: UNRETWIT_COMMENT_FAIL_ACTION,
    error,
  };
}

//#endregion UNRETWIT_COMMENT

//#region REPORT_COMMENT

export function reportCommentAction(commentId, reasonId) {
  return {
    type: REPORT_COMMENT_ACTION,
    commentId,
    reasonId,
  };
}

export function reportCommentSuccessAction(data) {
  return {
    type: REPORT_COMMENT_SUCCESS_ACTION,
    data,
  };
}

export function reportCommentFailAction(error) {
  return {
    type: REPORT_COMMENT_FAIL_ACTION,
    error,
  };
}

//#endregion REPORT_COMMENT
