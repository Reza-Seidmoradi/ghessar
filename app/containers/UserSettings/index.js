import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Image, I18nManager, StatusBar, Dimensions } from 'react-native';
import {
  Text,
  Input,
  Header,
  Content,
  List,
  ListItem,
  Card,
  CardItem,
  Icon,
  Label,
  Form,
  Item,
  Right,
  Toast,
  Root,
  Left,
  Body,
  Title,
  Segment,
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import * as ImagePicker from 'react-native-image-picker';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import reducer from '../App/reducer';
import saga from '../App/saga';

import ItemPicker from '../../components/Picker';
import styles from '../../components/Style';
import { makeSelectChangeProfile, makeSelectChangeUserPhoto } from '../App/selectors';
import { changeProfileAction, changeUserPhotoAction } from '../App/actions';

function UserSettings({ info, changeInfo, changed, changePhoto, changedPhoto }) {
  useInjectReducer({ key: 'app', reducer });
  useInjectSaga({ key: 'app', saga });

  I18nManager.forceRTL(true);
  const avatar = info.avatars.length !== 0 ? info.avatars[info.avatars.length - 1] : '';
  const [photo, setPhoto] = useState(avatar.substr(17));
  const baseUrl = 'http://192.168.1.104';
  const [imageSource, setImageSource] = useState(null);
  const [body, setBody] = useState(null);
  const [bio, setBio] = useState('');
  const [visible, setModalVisible] = useState(false);
  const [status, setStatus] = useState(null);
  const [url, setUrl] = useState('');
  const isImage = () => url.match(/\.(jpeg|jpg|gif|png)$/) != null;
  const childs = () => {
    switch (status) {
      case null:
        return items;
      case 'url':
        return imageUrl;
      default:
        return items;
    }
  };
  const items = (
    <List style={styles.list}>
      <ListItem first style={styles.listItem} button onPress={() => selectImage('take')}>
        <Text style={styles.iranSans}>گرفتن عکس</Text>
      </ListItem>
      <ListItem style={styles.listItem} button onPress={() => selectImage('select')}>
        <Text style={styles.iranSans}>انتخاب عکس</Text>
      </ListItem>
      <ListItem last noBorder style={styles.listItem} button onPress={() => setStatus('url')}>
        <Text style={styles.iranSans}>کپی آدرس عکس</Text>
      </ListItem>
    </List>
  );

  const imageUrl = (
    <Card style={styles.cardUrl}>
      <CardItem cardBody>
        <Input
          multiline
          numberOfLines={2}
          placeholder="url:"
          style={([styles.inputUrl], { borderColor: isImage() ? '#cccccc' : '#ff6154' })}
          onChangeText={(text) => {
            setUrl(text);
          }}
        />
      </CardItem>
      <CardItem footer style={styles.cardFooter}>
        <TouchableOpacity
          onPress={() => {
            selectImage();
            setModalVisible(!visible);
          }}>
          <Icon name="check" type="Entypo" />
        </TouchableOpacity>
      </CardItem>
    </Card>
  );
  async function fetchMedia() {
    await axios({
      url,
      method: 'GET',
      responseType: 'arraybuffer',
    })
      .then((response) =>
        setImageSource(`data:image/png;base64, ${Buffer.from(response.data, 'binary').toString('base64')}`),
      )
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    if (changedPhoto.data) setPhoto(changedPhoto.data.filename.substr(17));
  }, [changedPhoto.data]);

  function selectImage(photoSelectOption) {
    let options = {
      title: 'You can choose one image',
      maxWidth: 256,
      maxHeight: 256,
      storageOptions: {
        skipBackup: true,
      },
    };

    if (photoSelectOption === 'select') {
      ImagePicker.launchImageLibrary(options, (response) => {
        if (response.didCancel) {
          setModalVisible(!visible);
          return Toast.show({
            text: 'عکسی انتخاب نشده',
            style: { backgroundColor: '#fefefe' },
            textStyle: { color: '#444444', fontFamily: 'IRANSansMobile' },
            buttonText: 'باشه',
            buttonTextStyle: { color: '#444444', fontFamily: 'IRANSansMobile' },
            type: 'warning',
          });
        } else if (response.errorMessage) {
          setModalVisible(!visible);
          console.log('ImagePicker Error: ', response.error);
        } else {
          changePhoto(response);
          setImageSource(response.uri);
          setModalVisible(!visible);
        }
      });
    } else if (photoSelectOption === 'take') {
      ImagePicker.launchCamera(options, (response) => {
        if (response.didCancel) {
          setModalVisible(!visible);
          return Toast.show({
            text: 'عکسی گرفته نشده',
            style: { backgroundColor: '#fefefe' },
            textStyle: { color: '#444444', fontFamily: 'IRANSansMobile' },
            buttonText: 'باشه',
            buttonTextStyle: { color: '#444444', fontFamily: 'IRANSansMobile' },
            type: 'warning',
          });
        } else if (response.error) {
          setModalVisible(!visible);
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          changePhoto(response);
          setImageSource(response.uri);
          setModalVisible(!visible);
        }
      });
    } else {
      fetchMedia();
      setStatus(null);
      setModalVisible(!visible);
    }
  }

  useEffect(() => {
    if (changed.data && body !== null && imageSource === null) Actions.pop();
  }, [changed.data]);

  return (
    <Root>
      <StatusBar hidden />
      <Header style={styles.backgroundWhite} hasSegment>
        <Left />
        <Body>
          <Segment style={[styles.centerize, styles.backgroundWhite, { marginTop: 16 }]}>
            <Title style={[styles.black, styles.iranSansBold]}>ویرایش پروفایل</Title>
          </Segment>
        </Body>
        <Right>
          <TouchableOpacity onPress={() => Actions.pop({ animated: true })}>
            <Icon name="chevron-left" type="Feather" style={[styles.icon, { fontSize: 36 }]} />
          </TouchableOpacity>
        </Right>
      </Header>
      <Content contentContainerStyle={styles.column}>
        <TouchableOpacity style={[styles.photo, styles.centerize]} onPress={() => setModalVisible(!visible)}>
          {photo !== '' ? (
            <Image source={{ uri: baseUrl + photo }} style={[styles.userImage]} />
          ) : (
            <Icon name="user" type="Entypo" style={styles.user} />
          )}
        </TouchableOpacity>
        <ItemPicker
          visible={visible}
          children={childs()}
          onClose={() => {
            setModalVisible(!visible);
            setStatus(null);
          }}
        />
        <View style={[styles.margin, { height: Dimensions.get('window').height / 2 }]}>
          <Form>
            <Item floatingLabel style={styles.margin}>
              <Label style={[styles.iranSansSmall]}>نام</Label>
              <Input
                style={styles.iranSans}
                underlineColorAndroid="#efefef"
                textAlign="right"
                onChangeText={(text) => setBody({ ...body, first_name: text })}
                defaultValue={info.first_name ? info.first_name : ''}
              />
            </Item>
            <Item floatingLabel style={styles.margin}>
              <Label style={[styles.iranSansSmall]}>نام خانوادگی</Label>
              <Input
                style={styles.iranSans}
                underlineColorAndroid="#efefef"
                textAlign="right"
                onChangeText={(text) => setBody({ ...body, last_name: text })}
                defaultValue={info.last_name ? info.last_name : ''}
              />
            </Item>
            <Item floatingLabel last style={styles.margin}>
              <Label style={[styles.iranSansSmall]}>درباره من</Label>
              <Input
                defaultValue={info.bio ? info.bio : ''}
                underlineColorAndroid="#efefef"
                multiline
                numberOfLines={2}
                maxLength={100}
                style={styles.iranSans}
                onChangeText={(text) => setBio(text)}
              />
              <Text style={styles.messageLength}>{bio.length}</Text>
            </Item>
          </Form>
        </View>
        <View>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            angle={45}
            colors={imageSource || body || bio ? ['#2196F3', '#21CBF3'] : ['#ececec', '#fefefe']}
            style={[
              styles.margin,
              styles.radius,
              styles.button,
              { marginVertical: 24, justifyContent: 'center', alignSelf: 'stretch', textAlignVertical: 'center' },
            ]}>
            <TouchableOpacity
              style={{ width: '100%' }}
              disabled={imageSource || body || bio.length ? false : true}
              onPress={() => {
                bio.length ? changeInfo({ ...body, bio }) : changeInfo(body);
                setBody('');
              }}>
              <Text
                style={[
                  styles.iranSans,
                  styles.textAlignCenter,
                  { color: imageSource || body || bio.length ? '#fefefe' : '#777777' },
                ]}>
                ویرایش
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </Content>
    </Root>
  );
}

UserSettings.propTypes = {
  info: PropTypes.object.isRequired,
  changeInfo: PropTypes.func,
  changed: PropTypes.object,
  changePhoto: PropTypes.func,
  changedPhoto: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  changed: makeSelectChangeProfile(),
  changedPhoto: makeSelectChangeUserPhoto(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    changeInfo: (params) => dispatch(changeProfileAction(params)),
    changePhoto: (photo) => dispatch(changeUserPhotoAction(photo)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(UserSettings);
