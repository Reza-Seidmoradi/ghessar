import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  profile: {
    display: 'flex',
    flexDirection: 'row',
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
  user: {
    fontSize: 48,
    color: '#aaaaaa',
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
    justifyContent: 'space-evenly',
  },
  bold: {
    fontWeight: 'bold',
  },
  iranSans: {
    fontFamily: 'IRANSansMobile',
  },
  divider: {
    borderTopWidth: 1,
    borderTopColor: '#64a5fe',
    paddingTop: 16,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginHorizontal: 16,
    marginVertical: 20,
    paddingRight: 4,
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
  iranSansBold: {
    fontFamily: 'IRANSansMobile-Bold',
  },
  background: {
    backgroundColor: '#ececec',
  },
  dividerBold: {
    paddingTop: 16,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
  more: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 4,
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
  },
  listItem: {
    width: Dimensions.get('window').width - 150,
  },
  listItemWithoutMargin: {
    marginVertical: -8,
  },
  iranSansSmall: {
    fontFamily: 'IRANSansMobile',
    fontSize: 11,
  },
  margin: {
    marginVertical: 4,
  },
  centeredView: {
    flex: 1,
  },
  dividerSmall: {
    borderTopWidth: 1,
    borderTopColor: '#cccccc',
    paddingTop: 8,
    marginVertical: 8,
    marginHorizontal: 60,
  },
  userImage: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  edit: {
    width: '75%',
    paddingVertical: 4,
    borderWidth: 2,
    borderColor: '#64a5fe',
    borderRadius: 8,
  },
});
