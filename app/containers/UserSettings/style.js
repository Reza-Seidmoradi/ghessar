import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  column: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
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
  },
  iranSansSmall: {
    fontFamily: 'IRANSansMobile',
    fontSize: 14,
  },
  btn: {
    width: Dimensions.get('window').width - 40,
    height: 48,
    borderRadius: 4,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: '#cccccc',
    paddingVertical: 8,
    position: 'absolute',
    top: Dimensions.get('window').height / 4 * 3,
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
    fontFamily: 'IRANSansMobile',
    fontSize: 12,
    textAlign: 'left',
    color: '#111111',
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
  photo: {
    width: 100,
    height: 100,
    marginTop: 24,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderWidth: 2,
    borderColor: '#aeacf4',
    borderRadius: 50,
  },
  user: {
    fontSize: 48,
    color: '#aaaaaa',
  },
  userImage: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  margin: {
    marginHorizontal: 20,
    marginVertical: 24,
  },
  input: {
    marginVertical: 16,
  },
});

export default styles;
