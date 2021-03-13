import { Dimensions, StyleSheet } from 'react-native';

const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fefefe',
    height: height,
  },
  image: {
    resizeMode: 'cover',
    paddingTop: height / 20,
    height: height / 3,
  },
  background: {
    backgroundColor: '#fefefe',
    marginTop: 20,
    marginHorizontal: 60,
    borderRadius: 4,
  },
  center: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iranSansBold: {
    width: 150,
    fontFamily: 'IRANSansMobile-Bold',
    color: '#000000',
  },
  photo: {
    backgroundColor: '#fefefe',
    borderWidth: 2,
    borderColor: '#aeacf4',
    borderRadius: 50,
  },
  user: {
    fontSize: 48,
    color: '#aaaaaa',
  },
  userImage:{
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  list: {
    width: '100%',
    position: 'relative',
  },
  listItem: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 12,
  },
  setting: {
    backgroundColor: '#f0f0f0',
  },
  icon: {
    color: '#444444',
  },
});

export default styles;
