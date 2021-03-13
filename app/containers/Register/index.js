import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Button, Container, Input, Item } from 'native-base';

import { useInjectReducer } from '../../utils/injectReducer';
import { useInjectSaga } from '../../utils/injectSaga';
import reducer from '../App/reducer';
import saga from '../App/saga';

import styles from './style';
import { registerUserAction } from '../App/actions';

function Register({ register }) {
  useInjectReducer({ key: 'app', reducer });
  useInjectSaga({ key: 'app', saga });
  const [email, setEmail] = React.useState(null);
  return (
    <Container>
      <Item>
        <Input style={styles.input} placeholder="Email" onChangeText={(text) => setEmail(text)} />
      </Item>
      <Button full info style={styles.btn} onPress={() => register(email)}>
        <Text style={styles.text}>ثبت‌نام</Text>
      </Button>
    </Container>
  );
}

Register.propTypes = {
  dispatch: PropTypes.func,
  register: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    register: (email) => dispatch(registerUserAction(email)),
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect)(Register);
