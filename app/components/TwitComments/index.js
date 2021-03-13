import React from 'react';
import PropTypes from 'prop-types';
import { Badge, Container, Content, Icon, Text, View } from 'native-base';
import { Image, TouchableOpacity } from 'react-native';
import UserTwits from '../UserTwits';
import styles from '../Style';

function TwitComments({ twit, comments }) {
  const url = twit.user.avatar !== null ? twit.user.avatar[twit.user.avatar.length - 1] : '';
  const photo = url ? url.substr(17) : '';
  const baseUrl = 'http://192.168.43.134/';

  return (
    <Container>
      <Content>
        <View style={styles.margin}>
          <View style={styles.thumbnail}>
            {photo ? (
              <Image source={baseUrl + photo} style={styles.userImage} />
            ) : (
              <Icon name="user" type="Entypo" style={[styles.more, styles.darkGray]} />
            )}
          </View>
          {twit.body && (
            <View style={[styles.margin, styles.padding, { marginTop: 20 }]}>
              <Text style={styles.iranSansBig}>{twit.body}</Text>
            </View>
          )}
          {twit.media && <Image source={twit.media} style={styles.image} />}
          <View style={styles.divider} />
          <View style={[styles.row, styles.spaceAround]}>
            <Text style={styles.iranSansSmall}>{comments.length} دیدگاه</Text>
            <Text style={styles.iranSansSmall}>{twit.retwits_count} بازنشر</Text>
            <Text style={styles.iranSansSmall}>{twit.likes_count} پسند</Text>
          </View>
          <View style={styles.divider} />
          <View style={[styles.row, styles.operations]}>
            <View style={styles.append}>
              <Badge style={{ backgroundColor: 'transparent' }}>
                <Text>{twit.comments_count}</Text>
              </Badge>
              <TouchableOpacity>
                <Icon name="comment" type="EvilIcons" style={styles.comment} color="#111111" />
              </TouchableOpacity>
            </View>
            <View style={styles.append}>
              <Badge style={{ backgroundColor: 'transparent' }}>
                <Text>{twit.retwits_count}</Text>
              </Badge>
              <TouchableOpacity onPress={() => (twit.is_retwitted ? onUnretwit(twit.id) : onRetwit(twit.id))}>
                <Icon name="retweet" type="EvilIcons" style={twit.is_retwitted ? styles.retweetFull : styles.retweet} />
              </TouchableOpacity>
            </View>
            <View style={styles.append}>
              <TouchableOpacity onPress={() => onShare(twit.id)}>
                <Icon name="share-google" type="EvilIcons" style={styles.retweet} />
              </TouchableOpacity>
            </View>
            <View style={styles.append}>
              <Badge style={{ backgroundColor: 'transparent' }}>
                <Text>{twit.likes_count}</Text>
              </Badge>
              <TouchableOpacity onPress={() => (twit.is_liked ? onUnlike(twit.id) : onLike(twit.id))}>
                <Icon
                  name={twit.is_liked ? 'heart' : 'heart-outline'}
                  type="Ionicons"
                  style={twit.is_liked ? styles.heartFull : styles.heart}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View>{comments.length ? <UserTwits twits={comments} /> : null}</View>
      </Content>
    </Container>
  );
}

TwitComments.propTypes = {
  twit: PropTypes.object.isRequired,
  comments: PropTypes.array,
};

export default TwitComments;
