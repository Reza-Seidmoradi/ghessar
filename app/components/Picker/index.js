import React from 'react';
import PropTypes from 'prop-types';
import { View, Icon } from 'native-base';
import { Modal, TouchableOpacity } from 'react-native';
import styles from './style';

function ItemPicker({ visible, children, onClose }) {
  return (
    <View>
      <Modal animationType="slide" transparent visible={visible} onRequestClose={onClose}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity style={styles.openButton} onPress={onClose}>
              <Icon name="close" type="AntDesign" style={styles.closeBtn} />
            </TouchableOpacity>
            <View style={{ marginTop: 16 }}>{children}</View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

ItemPicker.prototype = {
  visible: PropTypes.bool,
  children: PropTypes.node,
  onClose: PropTypes.func,
};

export default ItemPicker;
