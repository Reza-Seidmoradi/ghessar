import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, TouchableOpacity, Share } from 'react-native';
import { Icon, Badge, List, ListItem } from 'native-base';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import ItemPicker from '../Picker';
import { likeTwitAction, unlikeTwitAction, retwitTwitAction, unretwitTwitAction } from '../../containers/App/actions';
import {
  makeSelectLikeTwit,
  makeSelectRetwitTwit,
  makeSelectUnlikeTwit,
  makeSelectUnretwitTwit,
} from 'containers/App/selectors';
import styles from '../Style';
import Comment from '../../containers/Comment';
import { Actions } from 'react-native-router-flux';

function RenderTwit({ twit, onLike, liked, onUnlike, unliked, onRetwit, retwited, onUnretwit, unretwited, onReport }) {
  const baseUrl = 'http://192.168.1.104/';
  const [updatedTwit, setUpdatedTwit] = useState(twit);
  const [visible, setModalVisible] = useState(false);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    updateTwit();
    return undefined;
  }, [liked.data || unliked.data || retwited.data || unretwited.data]);

  const onShare = async (twitId) => {
    try {
      const result = await Share.share({
        message: `http://ghessar.me/api/updatedTwit/${twitId}`,
        title: 'اشتراک گذاری توییت',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const updateTwit = () => {
    switch (true) {
      case liked.data !== null && updatedTwit.item.id === liked.data.id:
        setUpdatedTwit({ ...updatedTwit, item: liked.data });
        break;
      case unliked.data !== null && updatedTwit.item.id === unliked.data.id:
        setUpdatedTwit({ ...updatedTwit, item: unliked.data });
        break;
      case retwited.data !== null && updatedTwit.item.id === retwited.data.id:
        setUpdatedTwit({ ...updatedTwit, item: retwited.data });
        break;
      case unretwited.data !== null && updatedTwit.item.id === unretwited.data.id:
        setUpdatedTwit({ ...updatedTwit, item: unretwited.data });
        break;
      default:
        setUpdatedTwit(updatedTwit);
    }
  };

  const items = (
    <List style={styles.list}>
      <ListItem style={[styles.listItem, styles.row, styles.spaceBetween]} button>
        <Text style={styles.iranSansSmall}>نشان کردن</Text>
        <Icon name="bookmark" type="MaterialIcons" style={styles.darkGray} />
      </ListItem>
      <ListItem
        style={[styles.listItem, styles.row, styles.spaceBetween]}
        button
        onPress={() => {
          onReport();
          setModalVisible(!visible);
        }}>
        <Text style={styles.iranSansSmall}>گزارش کردن</Text>
        <Icon name="flag" type="Entypo" style={styles.darkGray} />
      </ListItem>
    </List>
  );

  return (
    <View style={styles.item}>
      <View style={styles.twit}>
        <ItemPicker
          visible={visible}
          children={items}
          onClose={() => {
            setModalVisible(!visible);
            setStatus(null);
          }}
        />
        <TouchableOpacity onPress={() => Actions.push('comments', { twit: updatedTwit.item })}>
          {updatedTwit.item.body === null ? (
            <TouchableOpacity onPress={() => setModalVisible(!visible)}>
              <Icon name="more-vert" type="MaterialIcons" style={styles.more} />
            </TouchableOpacity>
          ) : (
            <View style={styles.row}>
              <Text style={styles.iranSansSmall}>{updatedTwit.item.body}</Text>
              <TouchableOpacity onPress={() => setModalVisible(!visible)}>
                <Icon name="more-vert" type="MaterialIcons" style={styles.more} />
              </TouchableOpacity>
            </View>
          )}

          {updatedTwit.item.media === null ? null : (
            <Image source={{ uri: baseUrl + updatedTwit.item.media.substr(18) }} style={styles.image} />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.divider} />
      <View style={[styles.row, styles.operations]}>
        <View style={styles.append}>
          <Badge style={{ backgroundColor: 'transparent' }}>
            <Text>{updatedTwit.item.comments_count}</Text>
          </Badge>
          <TouchableOpacity>
            <Icon name="comment" type="EvilIcons" style={styles.comment} color="#111111" />
          </TouchableOpacity>
        </View>
        <View style={styles.append}>
          <Badge style={{ backgroundColor: 'transparent' }}>
            <Text>{updatedTwit.item.retwits_count}</Text>
          </Badge>
          <TouchableOpacity
            onPress={() =>
              updatedTwit.item.is_retwitted ? onUnretwit(updatedTwit.item.id) : onRetwit(updatedTwit.item.id)
            }>
            <Icon
              name="retweet"
              type="EvilIcons"
              style={updatedTwit.item.is_retwitted ? styles.retweetFull : styles.retweet}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.append}>
          <TouchableOpacity onPress={() => onShare(updatedTwit.item.id)}>
            <Icon name="share-google" type="EvilIcons" style={styles.retweet} />
          </TouchableOpacity>
        </View>
        <View style={styles.append}>
          <Badge style={{ backgroundColor: 'transparent' }}>
            <Text>{updatedTwit.item.likes_count}</Text>
          </Badge>
          <TouchableOpacity
            onPress={() => (updatedTwit.item.is_liked ? onUnlike(updatedTwit.item.id) : onLike(updatedTwit.item.id))}>
            <Icon
              name={updatedTwit.item.is_liked ? 'heart' : 'heart-outline'}
              type="Ionicons"
              style={updatedTwit.item.is_liked ? styles.heartFull : styles.heart}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

RenderTwit.propTypes = {
  twit: PropTypes.object.isRequired,
  onLike: PropTypes.func,
  liked: PropTypes.object,
  onUnlike: PropTypes.func,
  unliked: PropTypes.object,
  onRetweet: PropTypes.func,
  retwited: PropTypes.object,
  onUnretweet: PropTypes.func,
  unretwited: PropTypes.object,
  onReport: PropTypes.func,
  reported: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  liked: makeSelectLikeTwit(),
  retwited: makeSelectRetwitTwit(),
  unliked: makeSelectUnlikeTwit(),
  unretwited: makeSelectUnretwitTwit(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onLike: (twitId) => dispatch(likeTwitAction(twitId)),
    onUnlike: (twitId) => dispatch(unlikeTwitAction(twitId)),
    onRetwit: (twitId) => dispatch(retwitTwitAction(twitId)),
    onUnretwit: (twitId) => dispatch(unretwitTwitAction(twitId)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(RenderTwit);
