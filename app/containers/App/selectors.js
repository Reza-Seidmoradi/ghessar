import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectApp = (state) => state.app || initialState;
const makeSelectApp = () => createSelector(selectApp, (substate) => substate);

export const makeSelectEmail = () => createSelector(selectApp, (substate) => substate);

export const makeSelectUserInfo = () => createSelector(selectApp, (substate) => substate.getUserInfo);
export const makeSelectReportUser = () => createSelector(selectApp, (substate) => substate.reportUser);
export const makeSelectChangeProfile = () => createSelector(selectApp, (substate) => substate.changeProfile);
export const makeSelectChangeUserPhoto = () => createSelector(selectApp, (substate) => substate.changeUserPhoto);

export const makeSelectAllTwits = () => createSelector(selectApp, (substate) => substate.getAllTwits);
export const makeSelectSearchTwit = () => createSelector(selectApp, (substate) => substate.searchTwit);
export const makeSelectCreateTwit = () => createSelector(selectApp, (substate) => substate.createTwit);
export const makeSelectLikeTwit = () => createSelector(selectApp, (substate) => substate.likeTwit);
export const makeSelectUnlikeTwit = () => createSelector(selectApp, (substate) => substate.unlikeTwit);
export const makeSelectRetwitTwit = () => createSelector(selectApp, (substate) => substate.retwitTwit);
export const makeSelectUnretwitTwit = () => createSelector(selectApp, (substate) => substate.unretwitTwit);
export const makeSelectReportTwitTypes = () => createSelector(selectApp, (substate) => substate.getReportTwitTypes);
export const makeSelectReportTwit = () => createSelector(selectApp, (substate) => substate.reportTwit);

export const makeSelectAllComments = () => createSelector(selectApp, (substate) => substate.getComments);
export const makeSelectCreateComment = () => createSelector(selectApp, (substate) => substate.createComment);
export const makeSelectLikeComment = () => createSelector(selectApp, (substate) => substate.likeComment);
export const makeSelectUnlikeComment = () => createSelector(selectApp, (substate) => substate.unlikeComment);
export const makeSelectRetwitComment = () => createSelector(selectApp, (substate) => substate.retwitComment);
export const makeSelectUnretwitComment = () => createSelector(selectApp, (substate) => substate.unretwitComment);
export const makeSelectReportComment = () => createSelector(selectApp, (substate) => substate.reportComment);

export default makeSelectApp;
export { selectApp };
