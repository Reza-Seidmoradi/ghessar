import { takeLatest, call, put } from 'redux-saga/effects';
import { LOGIN_ACTION } from './constants';
import { loginFailAction, loginSuccessAction } from './actions';
import { loginApi } from '../../api/auth';
import { Actions } from 'react-native-router-flux';
import { setAuth } from '../../utils/auth';

function* login({ username, password }) {
  try {
    const response = yield call(loginApi, { username, password });
    setAuth(response.data);
    Actions.push('home');
    yield put(loginSuccessAction());
  } catch (error) {
    yield put(loginFailAction(error));
  }
}

export default function* loginSaga() {
  yield takeLatest(LOGIN_ACTION, login);
}
