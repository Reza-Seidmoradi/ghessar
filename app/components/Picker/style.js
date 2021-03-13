import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    position: 'relative',
    width: Dimensions.get('window').width - 100,
    margin: 40,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingTop: 24,
    paddingBottom: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    position: 'absolute',
    right: 8,
    top: 8,
    borderRadius: 4,
    padding: 4,
  },
  closeBtn: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'left',
  },
  iranSans: {
    fontFamily: 'IRANSansMobile',
  },
});

export default styles;
