import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text, I18nManager, TouchableOpacity, Image, StatusBar } from 'react-native';
import {
  Container,
  Header,
  Content,
  Input,
  Footer,
  Title,
  Body,
  List,
  ListItem,
  Left,
  Right,
  Toast,
  Root,
  Segment,
  Icon,
  Card,
  CardItem,
  Spinner,
  Item,
} from 'native-base';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import * as ImagePicker from 'react-native-image-picker';
import axios from 'axios';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import reducer from '../App/reducer';
import saga from '../App/saga';

import MainScreenNavigator from '../../components/MainScreenNavigator';
import ItemPicker from '../../components/Picker';
import styles from '../../components/Style';
import { createTwitAction } from '../App/actions';
import { makeSelectCreateTwit } from '../App/selectors';
import { Actions } from 'react-native-router-flux';
var Buffer = require('buffer/').Buffer;

function CreateTwit({ onCreate, created }) {
  useInjectReducer({ key: 'app', reducer });
  useInjectSaga({ key: 'app', saga });

  const [mediaSource, setMediaSource] = useState(null);
  const [media, setMedia] = useState(null);
  const [body, setBody] = useState('');
  const [visible, setModalVisible] = useState(false);
  const [status, setStatus] = useState(null);
  const [url, setUrl] = useState('');
  const isImage = () => url.match(/\.(jpeg|jpg|gif|png)$/) != null;
  const isVideo = () => url.match(/\.(mp4|mkv|3gp|wmv)$/) != null;
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
  const imageUrl = (
    <Card style={styles.cardUrl}>
      <CardItem cardBody>
        <Input
          multiline
          numberOfLines={2}
          placeholder="url:"
          style={([styles.inputUrl], { borderColor: isImage() || isVideo() ? '#cccccc' : '#ff6154' })}
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
    await axios
      .get({
        url,
        responseType: 'arraybuffer',
      })
      .then((response) => {
        console.log(Buffer.from(response.data, 'binary').toString('base64'));
        setMediaSource(`data:image/png;base64,${Buffer.from(response.data, 'binary').toString('base64')}`);
      })
      .catch((error) => console.log(error));
  }

  I18nManager.forceRTL(true);

  useEffect(() => {
    if (created.data && body !== null) {
      setBody('');
      setMedia(null);
      setMediaSource(null);
      Actions.push('home');
    }
  }, [created.data]);

  const items = (
    <List style={styles.list}>
      <ListItem first style={styles.listItem}>
        <TouchableOpacity
          style={[styles.listItem, styles.row, styles.spaceBetween]}
          onPress={() => {
            selectImage('take');
          }}>
          <Text style={styles.iranSans}>گرفتن عکس یا ویدیو</Text>
          <Icon name="ios-camera" type="Ionicons" style={styles.darkGray} />
        </TouchableOpacity>
      </ListItem>
      <ListItem style={styles.listItem}>
        <TouchableOpacity
          style={[styles.listItem, styles.row, styles.spaceBetween]}
          onPress={() => {
            selectImage('select');
          }}>
          <Text style={styles.iranSans}>انتخاب عکس یا ویدیو</Text>
          <Icon name="image" type="Ionicons" style={styles.darkGray} />
        </TouchableOpacity>
      </ListItem>
      <ListItem last noBorder style={styles.listItem}>
        <TouchableOpacity
          style={[styles.listItem, styles.row, styles.spaceBetween]}
          onPress={() => {
            setStatus('url');
          }}>
          <Text style={styles.iranSans}>کپی آدرس عکس یا ویدیو</Text>
          <Icon name="copy" type="Ionicons" style={styles.darkGray} />
        </TouchableOpacity>
      </ListItem>
    </List>
  );

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
            text: 'عکس یا ویدیویی انتخاب نشده است',
            textStyle: { color: 'blue', fontFamily: 'IRANSansMobile' },
            buttonText: 'باشه',
          });
        } else if (response.errorMessage) {
          setModalVisible(!visible);
          console.log('ImagePicker Error: ', response.error);
        } else {
          setMediaSource(response.uri);
          setMedia(response);
          setModalVisible(!visible);
        }
      });
    } else if (photoSelectOption === 'take') {
      ImagePicker.launchCamera(options, (response) => {
        if (response.didCancel) {
          setModalVisible(!visible);
          return Toast.show({
            text: 'عکس یا ویدیویی گرفته نشده است',
            textStyle: { color: 'blue', fontFamily: 'IRANSansMobile' },
            buttonText: 'باشه',
          });
        } else if (response.error) {
          setModalVisible(!visible);
          console.log('ImagePicker Error: ', response.error);
        } else {
          setMediaSource(response.uri);
          setMedia(response);
          setModalVisible(!visible);
        }
      });
    } else {
      fetchMedia();
      setStatus(null);
      setModalVisible(!visible);
    }
  }

  return (
    <Root>
      <Container>
        <StatusBar hidden />
        <Header hasSegment style={styles.header}>
          <Left />
          <Body>
            <Segment>
              <Title style={styles.title}>ایجاد توییت</Title>
            </Segment>
          </Body>
          <Right />
        </Header>
        <Content contentContainerStyle={styles.column}>
          <View style={styles.message}>
            <View>
              <Item style={{ marginBottom: 12 }}>
                <Input
                  multiline
                  placeholder="توییت:"
                  numberOfLines={5}
                  maxLength={250}
                  style={[styles.iranSans, { height: body.length < 40 ? 50 : 150 }]}
                  onChangeText={(text) => setBody(text)}
                  onChange={() => {
                    if (body.length >= 250)
                      return Toast.show({
                        style: { backgroundColor: '#ececec', borderWidth: 1, borderColor: '#cccccc', borderRadius: 4 },
                        text: 'حداکثر 255 کاراکتر برای متن توییت مجاز است.',
                        textStyle: { color: '#111111', fontFamily: 'IRANSansMobile' },
                        buttonText: 'باشه',
                        buttonStyle: { color: '#111111', fontFamily: 'IRANSansMobile' },
                      });
                  }}
                />
              </Item>
              <View style={[styles.center, styles.verticalCenter]}>
                <AnimatedCircularProgress
                  size={40}
                  width={2}
                  rotation={0}
                  fill={(body.length * 100) / 250}
                  tintColor={body.length >= 200 ? '#ffc564' : '#64a5fe'}
                  backgroundColor="#ececec"
                  children={() => <Text style={styles.messageLength}>{body.length}</Text>}
                />
              </View>
            </View>
            <View>
              {mediaSource === null && url !== '' ? <Spinner /> : null}
              <Image source={{ uri: mediaSource }} style={styles.mediaImage} />
            </View>
          </View>
          <ItemPicker
            visible={visible}
            children={childs()}
            onClose={() => {
              setModalVisible(!visible);
              setStatus(null);
            }}
          />
          <View style={styles.button}>
            <TouchableOpacity onPress={() => onCreate(body.length ? body : null, media)}>
              <Icon
                name="send"
                type="MaterialIcons"
                style={[styles.icon, { color: media || body ? '#64a5fe' : '#bbbbbb' }]}
              />
            </TouchableOpacity>
            {media ? null : (
              <TouchableOpacity transparent onPress={() => setModalVisible(!visible)}>
                <Icon name="link" type="Entypo" style={[styles.icon, styles.green]} />
              </TouchableOpacity>
            )}
          </View>
        </Content>
        <Footer>
          <MainScreenNavigator index={3} />
        </Footer>
      </Container>
    </Root>
  );
}

CreateTwit.propTypes = {
  dispatch: PropTypes.func,
  onCreate: PropTypes.func,
  created: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  created: makeSelectCreateTwit(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onCreate: (body, media) => dispatch(createTwitAction(body, media)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(CreateTwit);
