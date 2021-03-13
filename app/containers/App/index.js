import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Router, Scene, Stack } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Application from '../Application';
import CreateTwit from '../CreateTwit';
import Home from '../Home';
import Login from '../Login';
import Register from '../Register';
import SendCode from '../SendCode';
import UserPage from '../UserPage';
import UserSettings from '../UserSettings';
import Search from '../Search';
import { getUserInfoAction } from './actions';
import Notification from '../Notification';
import Comment from '../Comment';
import Settings from '../Settings';

function App({ getUser }) {
  useEffect(() => {
    getUser();
  }, []);
  return (
    <Router>
      <Stack key="root" hideNavBar>
        <Scene key="app" component={Application} initial />
        <Scene key="home" component={Home} />
        <Scene key="search" component={Search} />
        <Scene key="login" component={Login} />
        <Scene key="register" component={Register} />
        <Scene key="sendCode" component={SendCode} />
        <Scene key="userPage" component={UserPage} />
        <Scene key="createTwit" component={CreateTwit} />
        <Scene key="userSetting" component={UserSettings} />
        <Scene key="notification" component={Notification} />
        <Scene key="comments" component={Comment} />
        <Scene key="settings" component={Settings} />
      </Stack>
    </Router>
  );
}

UserPage.propTypes = {
  dispatch: PropTypes.func,
  getUser: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    getUser: () => dispatch(getUserInfoAction()),
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect)(App);
