import produce, { enableES5 } from 'immer';
import {
  GET_TWITS_ACTION,
  GET_TWITS_FAIL_ACTION,
  GET_TWITS_SUCCESS_ACTION,
  GET_USER_INFO_ACTION,
  GET_USER_INFO_FAIL_ACTION,
  GET_USER_INFO_SUCCESS_ACTION,
  SEND_CODE_ACTION,
  SEND_CODE_FAIL_ACTION,
  SEND_CODE_SUCCESS_ACTION,
  CREATE_TWIT_ACTION,
  CREATE_TWIT_FAIL_ACTION,
  CREATE_TWIT_SUCCESS_ACTION,
  USER_REGISTER_ACTION,
  USER_REGISTER_FAIL_ACTION,
  USER_REGISTER_SUCCESS_ACTION,
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
  RETWIT_COMMENT_ACTION,
  RETWIT_COMMENT_SUCCESS_ACTION,
  RETWIT_COMMENT_FAIL_ACTION,
  REPORT_COMMENT_ACTION,
  REPORT_COMMENT_SUCCESS_ACTION,
  REPORT_COMMENT_FAIL_ACTION,
  REPORT_USER_ACTION,
  REPORT_USER_SUCCESS_ACTION,
  REPORT_USER_FAIL_ACTION,
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
  CHANGE_USER_PHOTO_ACTION,
  CHANGE_PROFILE_SUCCESS_ACTION,
  CHANGE_PROFILE_FAIL_ACTION,
  CHANGE_USER_PHOTO_SUCCESS_ACTION,
  CHANGE_USER_PHOTO_FAIL_ACTION,
  GET_COMMENTS_ACTION,
  GET_COMMENTS_SUCCESS_ACTION,
  GET_COMMENTS_FAIL_ACTION,
} from './constants';

enableES5(); // For EcmaScript support. If you erase this line you can get an error because of TypeScript.

export const initialState = {
  register: {
    email: null,
    error: null,
  },
  sendCode: {
    code: null,
    data: null,
    error: null,
  },
  getUserInfo: {
    id: null,
    data: null,
    error: null,
  },
  reprotUser: {
    userId: null,
    reasonId: null,
    data: null,
    error: null,
  },
  changeProfile: {
    params: null,
    data: null,
    error: null,
  },
  changeUserPhoto: {
    photo: null,
    data: null,
    error: null,
  },
  getAllTwits: {
    loading: false,
    data: null,
    error: null,
  },
  searchTwit: {
    searchText: null,
    data: null,
    error: null,
  },
  createTwit: {
    body: null,
    media: null,
    data: null,
    error: null,
  },
  likeTwit: {
    twitId: null,
    data: null,
    error: null,
  },
  unlikeTwit: {
    twitId: null,
    data: null,
    error: null,
  },
  retwitTwit: {
    twitId: null,
    data: null,
    error: null,
  },
  unretwitTwit: {
    twitId: null,
    data: null,
    error: null,
  },
  getReportTwitTypes: {
    loading: false,
    data: null,
    error: null,
  },
  reportTwit: {
    twitId: null,
    reasonId: null,
    data: null,
    error: null,
  },
  getComments: {
    id: null,
    data: null,
    error: null,
  },
  createComment: {
    body: null,
    media: null,
    data: null,
    error: null,
  },
  likeComment: {
    commentId: null,
    data: null,
    error: null,
  },
  unlikeComment: {
    commentId: null,
    data: null,
    error: null,
  },
  retwitComment: {
    commentId: null,
    data: null,
    error: null,
  },
  unretwitComment: {
    commentId: null,
    data: null,
    error: null,
  },
  reportComment: {
    commentId: null,
    reasonId: null,
    data: null,
    error: null,
  },
};

const appReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      //#region USER
      case USER_REGISTER_ACTION:
        draft.register.email = action.email;
        break;
      case USER_REGISTER_SUCCESS_ACTION:
        draft.register.email = action.email;
        break;
      case USER_REGISTER_FAIL_ACTION:
        draft.register.error = action.error;
        break;
      case SEND_CODE_ACTION:
        draft.sendCode.code = action.code;
        break;
      case SEND_CODE_SUCCESS_ACTION:
        draft.sendCode.data = action.data;
        draft.sendCode.code = null;
        draft.sendCode.error = null;
        break;
      case SEND_CODE_FAIL_ACTION:
        draft.sendCode.error = action.error;
        draft.sendCode.code = null;
        draft.sendCode.data = null;
        break;
      case GET_USER_INFO_ACTION:
        draft.getUserInfo.id = action.id;
        break;
      case GET_USER_INFO_SUCCESS_ACTION:
        draft.getUserInfo.data = action.data;
        draft.getUserInfo.error = null;
        draft.getUserInfo.id = null;
        break;
      case GET_USER_INFO_FAIL_ACTION:
        draft.getUserInfo.error = action.error;
        draft.getUserInfo.data = null;
        draft.getUserInfo.id = null;
        break;
      case REPORT_USER_ACTION:
        draft.reprotUser.userId = action.userId;
        draft.reprotUser.reasonId = action.reasonId;
        draft.reprotUser.data = null;
        draft.reprotUser.error = null;
        break;
      case REPORT_USER_SUCCESS_ACTION:
        draft.reprotUser.data = action.data;
        draft.reprotUser.userId = null;
        draft.reprotUser.reasonId = null;
        draft.reprotUser.error = null;
        break;
      case REPORT_USER_FAIL_ACTION:
        draft.reprotUser.error = action.error;
        draft.reprotUser.userId = null;
        draft.reprotUser.reasonId = null;
        draft.reprotUser.data = null;
        break;
      case CHANGE_USER_PHOTO_ACTION:
        draft.changeProfile.params = action.params;
        draft.changeProfile.data = null;
        draft.changeProfile.error = null;
        break;
      case CHANGE_PROFILE_SUCCESS_ACTION:
        draft.changeProfile.data = action.data;
        draft.changeProfile.params = null;
        draft.changeProfile.error = null;
        break;
      case CHANGE_PROFILE_FAIL_ACTION:
        draft.changeProfile.error = action.error;
        draft.changeProfile.params = null;
        draft.changeProfile.data = null;
        break;
      case CHANGE_USER_PHOTO_ACTION:
        draft.changeUserPhoto.photo = action.photo;
        draft.changeUserPhoto.data = null;
        draft.changeUserPhoto.error = null;
        break;
      case CHANGE_USER_PHOTO_SUCCESS_ACTION:
        draft.changeUserPhoto.data = action.data;
        draft.changeUserPhoto.photo = null;
        draft.changeUserPhoto.error = null;
        break;
      case CHANGE_USER_PHOTO_FAIL_ACTION:
        draft.changeUserPhoto.error = action.error;
        draft.changeUserPhoto.photo = null;
        draft.changeUserPhoto.data = null;
        break;
      //#endregion USER
      //#region TWIT
      case GET_TWITS_ACTION:
        draft.getAllTwits.loading = true;
        draft.getAllTwits.data = null;
        draft.getAllTwits.error = null;
        break;
      case GET_TWITS_SUCCESS_ACTION:
        draft.getAllTwits.data = action.data;
        draft.getAllTwits.loading = false;
        draft.getAllTwits.error = null;
        break;
      case GET_TWITS_FAIL_ACTION:
        draft.getAllTwits.error = action.error;
        draft.getAllTwits.loading = false;
        draft.getAllTwits.data = null;
        break;
      case SEARCH_TWIT_ACTION:
        draft.searchTwit.searchText = action.searchText;
        draft.searchTwit.data = null;
        draft.searchTwit.error = null;
        break;
      case SEARCH_TWIT_SUCCESS_ACTION:
        draft.searchTwit.data = action.data;
        draft.searchTwit.searchText = null;
        draft.searchTwit.error = null;
        break;
      case SEARCH_TWIT_FAIL_ACTION:
        draft.searchTwit.error = action.error;
        draft.searchTwit.data = null;
        draft.searchTwit.searchText = null;
        break;
      case CREATE_TWIT_ACTION:
        draft.createTwit.body = action.body;
        draft.createTwit.media = action.media;
        draft.createTwit.data = null;
        draft.createTwit.error = null;
        break;
      case CREATE_TWIT_SUCCESS_ACTION:
        draft.createTwit.data = action.data;
        draft.createTwit.body = null;
        draft.createTwit.media = null;
        draft.createTwit.error = null;
        break;
      case CREATE_TWIT_FAIL_ACTION:
        draft.createTwit.error = action.error;
        draft.createTwit.data = null;
        draft.createTwit.body = null;
        draft.createTwit.media = null;
        break;
      case LIKE_TWIT_ACTION:
        draft.likeTwit.twitId = action.twitId;
        draft.likeTwit.data = null;
        draft.likeTwit.error = null;
        break;
      case LIKE_TWIT_SUCCESS_ACTION:
        draft.likeTwit.data = action.data;
        draft.likeTwit.twitId = null;
        draft.likeTwit.error = null;
        break;
      case LIKE_TWIT_FAIL_ACTION:
        draft.likeTwit.error = action.error;
        draft.likeTwit.data = null;
        draft.likeTwit.twitId = null;
        break;
      case UNLIKE_TWIT_ACTION:
        draft.unlikeTwit.twitId = action.twitId;
        draft.unlikeTwit.data = null;
        draft.unlikeTwit.error = null;
        break;
      case UNLIKE_TWIT_SUCCESS_ACTION:
        draft.unlikeTwit.data = action.data;
        draft.unlikeTwit.twitId = null;
        draft.unlikeTwit.error = null;
        break;
      case UNLIKE_TWIT_FAIL_ACTION:
        draft.unlikeTwit.error = action.error;
        draft.unlikeTwit.data = null;
        draft.unlikeTwit.twitId = null;
        break;
      case RETWIT_TWIT_ACTION:
        draft.retwitTwit.twitId = action.twitId;
        draft.retwitTwit.data = null;
        draft.retwitTwit.error = null;
        break;
      case RETWIT_TWIT_SUCCESS_ACTION:
        draft.retwitTwit.data = action.data;
        draft.retwitTwit.twitId = null;
        draft.retwitTwit.error = null;
        break;
      case RETWIT_TWIT_FAIL_ACTION:
        draft.retwitTwit.error = action.data;
        draft.retwitTwit.data = null;
        draft.retwitTwit.twitId = null;
        break;
      case UNRETWIT_TWIT_ACTION:
        draft.unretwitTwit.twitId = action.twitId;
        draft.unretwitTwit.data = null;
        draft.unretwitTwit.error = null;
        break;
      case UNRETWIT_TWIT_SUCCESS_ACTION:
        draft.unretwitTwit.data = action.data;
        draft.unretwitTwit.twitId = null;
        draft.unretwitTwit.error = null;
        break;
      case UNRETWIT_TWIT_FAIL_ACTION:
        draft.unretwitTwit.error = action.data;
        draft.unretwitTwit.data = null;
        draft.unretwitTwit.twitId = null;
        break;
      case GET_REPORT_TWIT_TYPES_ACTION:
        draft.getReportTwitTypes.loading = true;
        draft.getReportTwitTypes.data = null;
        draft.getReportTwitTypes.error = null;
        break;
      case GET_REPORT_TWIT_TYPES_SUCCESS_ACTION:
        draft.getReportTwitTypes.data = action.data;
        draft.getReportTwitTypes.loading = false;
        draft.getReportTwitTypes.error = null;
        break;
      case GET_REPORT_TWIT_TYPES_FAIL_ACTION:
        draft.getReportTwitTypes.error = action.error;
        draft.getReportTwitTypes.data = null;
        draft.getReportTwitTypes.loading = false;
        break;
      case REPORT_TWIT_ACTION:
        draft.reportTwit.twitId = action.twitId;
        draft.reportTwit.reasonId = action.reasonId;
        draft.reportTwit.data = null;
        draft.reportTwit.error = null;
        break;
      case REPORT_TWIT_SUCCESS_ACTION:
        draft.reportTwit.data = action.data;
        draft.reportTwit.twitId = null;
        draft.reportTwit.reasonId = null;
        draft.reportTwit.error = null;
        break;
      case REPORT_TWIT_FAIL_ACTION:
        draft.reportTwit.error = action.error;
        draft.reportTwit.data = null;
        draft.reportTwit.twitId = null;
        draft.reportTwit.reasonId = null;
        break;
      //#endregion TWIT
      //#region COMMENT
      case GET_COMMENTS_ACTION:
        draft.getComments.id = action.id;
        draft.getComments.data = null;
        draft.getComments.error = null;
        break;
      case GET_COMMENTS_SUCCESS_ACTION:
        draft.getComments.data = action.data;
        draft.getComments.id = null;
        draft.getComments.error = null;
        break;
      case GET_COMMENTS_FAIL_ACTION:
        draft.getComments.error = action.error;
        draft.getComments.id = null;
        draft.getComments.data = null;
        break;
      case CREATE_COMMENT_ACTION:
        draft.createComment.body = action.body;
        draft.createComment.media = action.media;
        draft.reportTwit.data = null;
        draft.reportTwit.error = null;
        break;
      case CREATE_COMMENT_SUCCESS_ACTION:
        draft.createComment.data = action.data;
        draft.createComment.body = null;
        draft.createComment.media = null;
        draft.createComment.error = null;
        break;
      case CREATE_COMMENT_FAIL_ACTION:
        draft.createComment.error = action.error;
        draft.createComment.data = null;
        draft.createComment.body = null;
        draft.createComment.media = null;
        break;
      case LIKE_COMMENT_ACTION:
        draft.likeComment.commentId = action.commentId;
        draft.likeComment.data = null;
        draft.likeComment.error = null;
        break;
      case LIKE_COMMENT_SUCCESS_ACTION:
        draft.likeComment.data = action.data;
        draft.likeComment.commentId = null;
        draft.likeComment.error = null;
        break;
      case LIKE_COMMENT_FAIL_ACTION:
        draft.likeComment.error = action.error;
        draft.likeComment.data = null;
        draft.likeComment.commentId = null;
        break;
      case UNLIKE_COMMENT_ACTION:
        draft.unlikeComment.commentId = action.commentId;
        draft.unlikeComment.data = null;
        draft.unlikeComment.error = null;
        break;
      case UNLIKE_COMMENT_SUCCESS_ACTION:
        draft.unlikeComment.data = action.data;
        draft.unlikeComment.commentId = null;
        draft.unlikeComment.error = null;
        break;
      case UNLIKE_COMMENT_FAIL_ACTION:
        draft.unlikeComment.error = action.error;
        draft.unlikeComment.data = null;
        draft.unlikeComment.commentId = null;
        break;
      case RETWIT_COMMENT_ACTION:
        draft.retwitComment.commentId = action.commentId;
        draft.retwitComment.data = null;
        draft.retwitComment.error = null;
        break;
      case RETWIT_COMMENT_SUCCESS_ACTION:
        draft.retwitComment.data = action.data;
        draft.retwitComment.commentId = null;
        draft.retwitComment.error = null;
        break;
      case RETWIT_COMMENT_FAIL_ACTION:
        draft.retwitComment.error = action.error;
        draft.retwitComment.data = null;
        draft.retwitComment.commentId = null;
        break;
      case UNRETWIT_COMMENT_ACTION:
        draft.unretwitComment.commentId = action.commentId;
        draft.unretwitComment.data = null;
        draft.unretwitComment.error = null;
        break;
      case UNRETWIT_COMMENT_SUCCESS_ACTION:
        draft.unretwitComment.data = action.data;
        draft.unretwitComment.commentId = null;
        draft.unretwitComment.error = null;
        break;
      case UNRETWIT_COMMENT_FAIL_ACTION:
        draft.unretwitComment.error = action.error;
        draft.unretwitComment.data = null;
        draft.unretwitComment.commentId = null;
        break;
      case REPORT_COMMENT_ACTION:
        draft.reportComment.commentId = action.commentId;
        draft.reportComment.reasonId = action.reasonId;
        draft.reportComment.data = null;
        draft.reportComment.error = null;
        break;
      case REPORT_COMMENT_SUCCESS_ACTION:
        draft.reportComment.data = action.data;
        draft.reportComment.commentId = null;
        draft.reportComment.reasonId = null;
        draft.reportComment.error = null;
        break;
      case REPORT_COMMENT_FAIL_ACTION:
        draft.reportComment.error = action.error;
        draft.reportComment.data = null;
        draft.reportComment.commentId = null;
        draft.reportComment.reasonId = null;
        break;
      //#endregion COMMENT
    }
  });

export default appReducer;
