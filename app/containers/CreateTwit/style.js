import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  column: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  message: {
    width: Dimensions.get('window').width - 40,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#cccccc',
    marginHorizontal: 20,
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  iranSans: {
    fontFamily: 'IRANSansMobile',
    fontSize: 16,
    textAlign: 'right',
  },
  btn: {
    width: Dimensions.get('window').width - 40,
    height: 60,
    borderRadius: 4,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: '#cccccc',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingHorizontal: 40,
  },
  icon: {
    fontSize: 32,
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
  },
  listItem: {
    width: Dimensions.get('window').width - 150,
  },
  image: {
    height: 256,
    borderRadius: 4,
    marginVertical: 10,
  },
  messageLength: {
    width: 50,
    height: 50,
    fontFamily: 'IRANSansMobile-Bold',
    fontSize: 14,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#111111',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#64a5fe',
  },
  header: {
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  title: {
    fontFamily: 'IRANSansMobile',
    backgroundColor: '#ffffff',
    color: '#000000',
    paddingTop: 4,
  },
  cardUrl: {
    position: 'relative',
    width: Dimensions.get('window').width - 120,
    height: 180,
    marginTop: 24,
  },
  inputUrl: {
    width: Dimensions.get('window').width - 150,
    borderWidth: 1,
  },
  cardFooter: {
    height: 30,
    position: 'absolute',
    bottom: 10,
  },
});

export default styles;
