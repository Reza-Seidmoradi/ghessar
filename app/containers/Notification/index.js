import React from 'react';
import { View } from 'react-native';
import { Container, Content, Footer } from 'native-base';
import MainScreenNavigator from '../../components/MainScreenNavigator';

function Notification() {
  return (
    <Container>
      <Content></Content>
      <Footer>
        <MainScreenNavigator index={2} />
      </Footer>
    </Container>
  );
}

export default Notification;
