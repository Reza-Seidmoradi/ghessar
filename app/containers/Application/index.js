import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { getAuth } from '../../utils/auth';
import Login from '../Login';
import Home from '../Home';
import SplashScreen from '../../components/SplashScreen';

function Application() {
  const [auth, setUserAuth] = useState(null);
  const [view, setView] = React.useState(() => <SplashScreen />);

  useEffect(() => {
    getAuth()
      .then((res) => setUserAuth(res))
      .catch((error) => console.log(error));
    return undefined;
  }, [auth]);

  setTimeout(() => {
    if (auth) {
      setView(() => <Home />);
    } else {
      setView(() => <Login />);
    }
  }, 300);

  return view;
}

Application.propTypes = {
  dispatch: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect, memo)(Application);
