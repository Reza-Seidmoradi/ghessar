import { Dimensions, StyleSheet } from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  center: {
    justifyContent: 'center',
  },
  verticalCenter: {
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
  },
  message: {
    width: Dimensions.get('window').width - 40,
    height: height * 0.7,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#cccccc',
    marginHorizontal: 20,
    marginVertical: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  iranSans: {
    fontFamily: 'IRANSansMobile',
    fontSize: 16,
  },
  iranSansBold: {
    fontFamily: 'IRANSansMobile-Bold',
    fontSize: 16,
  },
  iranSansSmall: {
    fontFamily: 'IRANSansMobile',
    fontSize: 14,
  },
  iranSansBig: {
    fontFamily: 'IRANSansMobile',
    fontSize: 18,
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
  setting: {
    backgroundColor: '#f5f5f5',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
  },
  listItem: {
    width: Dimensions.get('window').width - 150,
  },
  mediaImage: {
    width: '100%',
    height: 256,
    borderRadius: 4,
    marginVertical: 10,
  },
  listItemWithoutMargin: {
    marginVertical: -8,
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
  userImage: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    marginTop: 20,
    marginLeft: 20,
  },
  name: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  bold: {
    fontWeight: 'bold',
  },
  divider: {
    borderTopWidth: 1,
    borderTopColor: '#64a5fe',
    paddingTop: 16,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  icon: {
    fontSize: 32,
    marginRight: 8,
    color: '#64a5fe',
  },
  follows: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 8,
  },
  background: {
    backgroundColor: '#ececec',
  },
  dividerBold: {
    paddingTop: 16,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  dividerSmall: {
    borderTopWidth: 1,
    borderTopColor: '#cccccc',
    paddingTop: 8,
    marginVertical: 8,
    marginHorizontal: 60,
  },
  profile: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 16,
  },
  photo: {
    width: 100,
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 20,
    borderWidth: 2,
    borderColor: '#aeacf4',
    borderRadius: 50,
  },
  thumbnail: {
    width: 50,
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
    borderWidth: 2,
    borderColor: '#aeacf4',
    borderRadius: 25,
  },
  user: {
    fontSize: 48,
    color: '#aaaaaa',
  },
  btn: {
    width: Dimensions.get('window').width / 3,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#64a5fe',
    justifyContent: 'center',
    alignSelf: 'stretch',
    textAlignVertical: 'center',
  },
  edit: {
    width: '75%',
    paddingVertical: 4,
    borderWidth: 2,
    borderColor: '#64a5fe',
    borderRadius: 8,
  },
  more: {
    fontSize: 24,
    // fontWeight: 'bold',
    marginHorizontal: 4,
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  spaceEvenly: {
    justifyContent: 'space-evenly',
  },
  spaceAround: {
    justifyContent: 'space-around',
  },
  centerize: {
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  padding: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  margin: {
    marginHorizontal: 8,
    marginVertical: 8,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  normalWidth: {
    width: (width * 85) / 100,
  },
  rounded: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 8,
    elevation: 4,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: '#eeeeee',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  active: {
    width: 50,
    backgroundColor: '#fefefe',
  },
  activeIcon: {
    fontSize: 42,
    color: '#64a5fe',
  },
  white: {
    color: '#ffffff',
  },
  black: {
    color: '#000000',
  },
  darkGray: {
    color: '#777777',
  },
  gray: {
    color: '#999999',
  },
  messageLength: {
    fontFamily: 'IRANSansMobile',
    fontSize: 12,
    textAlign: 'center',
    textAlignVertical: 'center',
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
  button: {
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
  item: {
    backgroundColor: '#fefefe',
    borderWidth: 8,
    borderRadius: 16,
    borderColor: '#eeeeee',
    borderBottomWidth: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 2,
    paddingVertical: 12,
    paddingHorizontal: 8,
    marginBottom: 2,
  },
  twit: {
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  divider: {
    borderTopWidth: 1,
    borderTopColor: '#cecece',
    paddingVertical: 4,
    marginVertical: 8,
    marginHorizontal: 20,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  operations: {
    width: width - 60,
    marginHorizontal: 8,
  },
  heart: {
    fontSize: 24,
  },
  heartFull: {
    fontSize: 24,
    color: '#ff3e3e',
  },
  retweet: {
    fontSize: 32,
  },
  retweetFull: {
    fontSize: 32,
    color: '#37ce61',
  },
  comment: {
    fontSize: 32,
  },
  append: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  image: {
    width: Dimensions.get('window').width - 60,
    height: 200,
    borderRadius: 4,
    marginVertical: 24,
    marginHorizontal: 6,
  },
  textAlignCenter: {
    textAlign: 'center',
  },
  radius: {
    borderRadius: 4,
  },
  inputFontSize: {
    fontSize: 18,
  },
  backgroundWhite: {
    backgroundColor: 'white',
  },
  backgroundImage: {
    resizeMode: 'cover',
    paddingTop: height / 20,
    height: height / 3,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fefefe',
    height: height,
  },
  primary: {
    color: '#64a5ce',
  },
  green: {
    color: '#64cea5',
  },
  red: {
    color: '#fe6574',
  },
  yellow: {
    color: '#ffc564',
  },
  relative: {
    position: 'relative',
  },
  absolute: {
    position: 'absolute',
  },
});

export default styles;
