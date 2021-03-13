import React, { memo, useState } from 'react';
import { View, Text, TouchableOpacity, StatusBar, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Actions } from 'react-native-router-flux';
import { Container, Form, Item, Input, Icon } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';

import styles from '../../components/Style';
import { loginAction } from './actions';

function Login({ login }) {
  useInjectReducer({ key: 'loginReducer', reducer });
  useInjectSaga({ key: 'loginSaga', saga });

  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <Container>
      <StatusBar hidden />
      <Form style={[styles.column, styles.spaceBetween, styles.verticalCenter]}>
        <View style={{ height: Dimensions.get('window').height / 3, marginTop: 64 }}>
          <Item style={[styles.normalWidth, { margin: 12 }]}>
            <Input style={[styles.iranSans, styles.inputFontSize]} onChangeText={(text) => setUsername(text)} />
            <Icon active name="user" type="Entypo" style={styles.darkGray, styles.icon} />
          </Item>
          <Item style={[styles.normalWidth, { margin: 12 }]}>
            <Input style={[styles.iranSans, styles.inputFontSize]} secureTextEntry onChangeText={(text) => setPassword(text)} />
            <Icon active name="key" type="Entypo" style={styles.darkGray, styles.icon} />
          </Item>
        </View>
        <View>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 3 }}
            angle={45}
            colors={['#FE6B8B', '#FF8E53']}
            style={[styles.margin, styles.radius, {marginVertical: 24}]}>
            <TouchableOpacity
              style={[styles.normalWidth, styles.margin]}
              onPress={() => login(username, password)}>
              <Text style={[styles.iranSans, styles.margin, styles.textAlignCenter, styles.white]}>ورود</Text>
            </TouchableOpacity>
          </LinearGradient>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 3 }}
            angle={45}
            colors={['#2196F3', '#21CBF3']}
            style={[styles.margin, styles.radius, {marginVertical: 24}]}>
            <TouchableOpacity
              style={[styles.normalWidth, styles.margin]}
              onPress={() => Actions.push('register')}>
              <Text style={[styles.iranSans, styles.margin, styles.textAlignCenter, styles.white]}>ثبت‌نام</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </Form>
    </Container>
  );
}

Login.propTypes = {
  dispatch: PropTypes.func,
  login: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    login: (username, password) => dispatch(loginAction(username, password)),
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect, memo)(Login);
