import React, { useEffect, useState } from 'react';
import { View, Text, I18nManager, TouchableOpacity, Image, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import {
  Body,
  Button,
  Container,
  Content,
  Footer,
  Header,
  Icon,
  Left,
  Right,
  Segment,
  Spinner,
  Title,
} from 'native-base';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import moment from 'moment-jalaali';

import { createStructuredSelector } from 'reselect';
import { makeSelectUserInfo } from '../App/selectors';
import { getUserInfoAction } from '../App/actions';
import { Actions } from 'react-native-router-flux';

import { useInjectReducer } from '../../utils/injectReducer';
import { useInjectSaga } from '../../utils/injectSaga';
import reducer from '../App/reducer';
import saga from '../App/saga';

import styles from '../../components/Style';
import UserTwits from '../../components/UserTwits';
import MainScreenNavigator from '../../components/MainScreenNavigator';

I18nManager.forceRTL(true);

function UserPage({ userId, getUser, userInfo }) {
  useInjectReducer({ key: 'app', reducer });
  useInjectSaga({ key: 'app', saga });

  const [info, setInfo] = useState(null);
  const baseUrl = 'http://192.168.1.104';
  const [photo, setPhoto] = useState('');
  const [fromNow, setFromNow] = useState(moment().format());

  moment.loadPersian({
    usePersianDigits: true,
    dialect: 'persian-modern',
  });

  useEffect(() => {
    userId ? getUser(userId) : getUser();
  }, []);
  useEffect(() => {
    if (userInfo.data) {
      setInfo(userInfo.data);
      const url = userInfo.data.avatars.length !== 0 ? userInfo.data.avatars[userInfo.data.avatars.length - 1] : '';
      if (url !== '') setPhoto(url.substr(17));
      let arrayedDate = userInfo.data.created_at.substr(0, 10).split('-');
      let date = arrayedDate.join('/');
      setFromNow(moment(date, 'YYYY/MM/DD').fromNow());
    }
  }, [userInfo.data]);
  return (
    <Container>
      <StatusBar animated hidden />
      <Header style={styles.backgroundWhite} hasSegment>
        <Left />
        <Body>
          <Segment style={[styles.centerize, styles.backgroundWhite, { marginTop: 16 }]}>
            <Title style={[styles.black, styles.iranSansBold]}>
              {info && info.first_name && info.last_name ? info.first_name + ' ' + info.last_name : ''}
            </Title>
          </Segment>
        </Body>
        <Right>
          <TouchableOpacity onPress={() => Actions.pop({ animated: true })}>
            <Icon name="chevron-left" type="Feather" style={[styles.icon, { fontSize: 36 }]} />
          </TouchableOpacity>
        </Right>
      </Header>
      <Content>
        {info === null ? (
          <Spinner />
        ) : (
          <Container>
            <View style={styles.profile}>
              <View style={styles.photo}>
                {photo !== '' ? (
                  <Image source={{ uri: baseUrl + photo }} style={styles.userImage} />
                ) : (
                  <Entypo name="user" style={styles.user} />
                )}
              </View>
              <View style={styles.info}>
                <Text style={styles.iranSansBold}>@{info.username}</Text>
                <View style={styles.name}>
                  <Text style={[styles.iranSans, { paddingHorizontal: 6 }]}>{info.first_name}</Text>
                  <Text style={styles.iranSans}>{info.last_name}</Text>
                </View>
              </View>
            </View>
            {I18nManager.isRTL ? (
              <View style={[styles.row, styles.margin, { justifyContent: 'flex-start' }]}>
                <EvilIcons name="calendar" style={styles.icon} />
                <Text style={styles.iranSansSmall}>{fromNow}</Text>
                <Text style={styles.iranSansSmall}> به ما ملحق شده</Text>
              </View>
            ) : (
              <View style={[styles.row, styles.spaceEvenly]}>
                <Text style={styles.iranSansSmall}> به ما ملحق شده</Text>
                <Text style={styles.iranSansSmall}>{fromNow}</Text>
                <EvilIcons name="calendar" style={styles.icon} />
              </View>
            )}
            <View style={styles.follows}>
              <View style={[styles.column, styles.center, styles.verticalCenter]}>
                <Text style={[styles.iranSansBold, { marginVertical: 8 }]}>دنبال کننده‌ها</Text>
                <Text style={styles.bold}>{info.followers}</Text>
              </View>
              <View style={[styles.column, styles.center, styles.verticalCenter]}>
                <Text style={[styles.iranSansBold, { marginVertical: 8 }]}>دنبال ‌شده‌ها</Text>
                <Text style={styles.bold}>{info.followings}</Text>
              </View>
            </View>
            {userId ? (
              <View style={styles.follows}>
                <Button info style={styles.btn}>
                  <Text style={[styles.iranSans, { color: '#ffffff' }]}>
                    {info.is_followed ? 'دنبال نکردن' : ' دنبال کردن'}
                  </Text>
                </Button>
                <Button transparent style={styles.btn}>
                  <Text style={styles.iranSans}>پیام خصوصی</Text>
                </Button>
              </View>
            ) : (
              <View style={styles.follows}>
                <TouchableOpacity style={styles.edit} onPress={() => Actions.userSetting({ info })}>
                  <Text style={[styles.iranSans, { textAlign: 'center' }]}>ویرایش پروفایل</Text>
                </TouchableOpacity>
              </View>
            )}
            <View style={styles.divider}>
              <Text style={styles.iranSans}>{info.bio}</Text>
            </View>
            <View style={styles.dividerBold} />
            {Object.keys(info.twits).length ? <UserTwits twits={info.twits} /> : null}
          </Container>
        )}
      </Content>
      <Footer>
        <MainScreenNavigator index={4} />
      </Footer>
    </Container>
  );
}

UserPage.propTypes = {
  dispatch: PropTypes.func,
  getUser: PropTypes.func,
  userInfo: PropTypes.object,
  userId: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  userInfo: makeSelectUserInfo(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    getUser: (id) => dispatch(getUserInfoAction(id)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(UserPage);

/* 

{
  "bio": "که با این در اگر در بند در ماند، درمانند!",
  "created_at": "2021-01-28 13:38:25",
  "first_name": "John",
  "id": 3,
  "is_blocked": false,
  "is_muted": false,
  "is_restricted": false,
  "last_name": "Doe",
  "profile": null,
  "username": "John_Doe",
  "twits": [
        {
            "body": "اولین پست",
            "comments_count": 4,
            "created_at": "2021-01-28 17:09:43",
            "id": 1,
            "likes_count": 0,
            "media": null,
            "retwits_count": 1
        }
]
}

*/
