import React from 'react';
import { Container, Icon } from 'native-base';
import styles from '../Style';

function SplashScreen() {
  return (
    <Container style={[styles.row, styles.center, styles.verticalCenter]}>
      <Icon name="logo-twitter" type="Ionicons" style={[styles.activeIcon, { fontSize: 64 }]} />
    </Container>
  );
}

export default SplashScreen;
