import 'react-native-gesture-handler';
import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { FooterTab, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import styles from '../../components/Style';

function MyTabs({ index }) {
  const items = ['home', 'search', 'bell', 'envelope'];
  const iconTypes = (value) => {
    switch (value) {
      case 'search':
        return 'Octicons';
      case 'bell':
        return 'SimpleLineIcons';
      case 'home':
        return 'AntDesign';
      case 'envelope':
        return 'SimpleLineIcons';
      default:
        return 'Ionicons';
    }
  };

  const handle = (value) => {
    switch (value) {
      case 'home':
        Actions.push('home');
        break;
      case 'envelope':
        Actions.push('createTwit');
        break;
      case 'bell':
        Actions.push('notification');
        break;
      case 'search':
        Actions.push('search');
        break;
      default:
        Actions.push('home');
    }
  };

  return (
    <FooterTab style={[styles.footer, styles.backgroundWhite]}>
      {items.map((item) => (
        <TouchableOpacity
          key={item}
          style={index === items.indexOf(item) ? styles.active : styles.white}
          onPress={() => handle(item)}>
          <Icon
            active={index === items.indexOf(item)}
            name={item}
            type={iconTypes(item)}
            style={index === items.indexOf(item) ? styles.activeIcon : [styles.gray, { fontSize: 24 }]}
          />
        </TouchableOpacity>
      ))}
    </FooterTab>
  );
}

MyTabs.prototype = {
  index: PropTypes.number,
};

export default MyTabs;
