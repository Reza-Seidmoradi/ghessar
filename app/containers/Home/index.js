import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { I18nManager } from 'react-native';
import { Container, Content, Spinner, Footer, Icon, Fab } from 'native-base';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from '../../utils/injectReducer';
import { useInjectSaga } from '../../utils/injectSaga';
import reducer from '../App/reducer';
import saga from '../App/saga';

import DrawerLayout from '../../components/DrawerLayout';
import MainScreenNavigator from '../../components/MainScreenNavigator';
import UserTwits from '../../components/UserTwits';
import { getTwitsAction } from '../App/actions';
import { makeSelectAllTwits } from '../App/selectors';

function Home({ getAllTwits, twits }) {
  I18nManager.forceRTL(true);
  useInjectReducer({ key: 'app', reducer });
  useInjectSaga({ key: 'app', saga });
  const [allTwits, setAllTwits] = useState(null);

  useEffect(() => {
    getAllTwits();
  }, []);

  useEffect(() => {
    if (twits && twits.data) setAllTwits(twits.data);
  }, [twits.data]);

  return (
    <Container>
      <DrawerLayout>
        <Content>{allTwits === null ? <Spinner /> : <UserTwits twits={allTwits} />}</Content>
      </DrawerLayout>
      <Footer>
        <MainScreenNavigator index={0} />
      </Footer>
    </Container>
  );
}

Home.propTypes = {
  dispatch: PropTypes.func,
  getAllTwits: PropTypes.func,
  twits: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  twits: makeSelectAllTwits(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    getAllTwits: () => dispatch(getTwitsAction()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Home);
