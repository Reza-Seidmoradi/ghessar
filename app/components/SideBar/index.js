import React, { useState, useEffect } from 'react';
import { View, Text, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { Icon, List, ListItem } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Actions } from 'react-native-router-flux';
import styles from '../Style';
import backgroundImage from '../../assets/images/Abstract_blurred.jpg';

export function SideBar() {
  const [me, SetMe] = useState(null);
  const url = me && me.avatars.length !== 0 ? me.avatars[me.avatars.length - 1] : '';
  const photo = url ? url.substr(17) : '';
  const baseUrl = 'http://192.168.1.104/';

  useEffect(() => {
    getMe();
    return undefined;
  }, []);

  const getMe = async () => {
    try {
      await AsyncStorage.getItem('me').then((res) => SetMe(JSON.parse(res)));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        {me && (
          <TouchableOpacity onPress={() => Actions.push('userPage')}>
            <View style={[styles.column, styles.center, styles.verticalCenter]}>
              <View style={[styles.photo, { borderColor: '#fefefe' }]}>
                {photo !== '' ? (
                  <Image source={{ uri: baseUrl + photo }} style={styles.image} />
                ) : (
                  <Icon type="Entypo" name="user" style={[styles.user, { color: '#fefefe' }]} />
                )}
              </View>
              <View
                style={[
                  styles.backgroundWhite,
                  styles.rounded,
                  { marginTop: 16, marginLeft: 16, paddingHorizontal: 16 },
                ]}>
                <Text style={[styles.iranSansBold, { textAlign: 'center' }]}>
                  {me.first_name && me.last_name ? `${me.first_name} ${me.last_name}` : me.username}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      </ImageBackground>
      <ScrollView style={{ flex: 1 }}>
        <List style={styles.list}>
          <ListItem button style={[styles.listItem, styles.row, { paddingHorizontal: 8 }]}>
            <Text style={styles.iranSansBold}>دنبال کننده‌ها</Text>
            <Icon name="users" type="Entypo" style={[styles.more, styles.green]} />
          </ListItem>
          <ListItem button style={[styles.listItem, styles.row, { paddingHorizontal: 8 }]}>
            <Text style={styles.iranSansBold}>دنبال ‌شده‌ها</Text>
            <Icon name="users" type="Entypo" style={[styles.more, styles.primary]} />
          </ListItem>
          <ListItem button style={[styles.listItem, styles.row, { paddingHorizontal: 8 }]}>
            <Text style={styles.iranSansBold}>نشان شده‌ها</Text>
            <Icon name="ios-bookmarks" type="Ionicons" style={[styles.more, styles.yellow]} />
          </ListItem>
          <ListItem button style={[styles.listItem, styles.row, { paddingHorizontal: 8 }]}>
            <Text style={styles.iranSansBold}>بلاک ‌شده‌ها</Text>
            <Icon name="block" type="Entypo" style={[styles.more, styles.red]} />
          </ListItem>
          <ListItem
            style={[styles.setting, styles.listItem, styles.row, { paddingHorizontal: 8 }]}
            button
            onPress={() => Actions.push('settings')}>
            <Text style={styles.iranSansBold}>تنظیمات</Text>
            <Icon name="settings" type="SimpleLineIcons" style={[styles.more, styles.darkGray]} />
          </ListItem>
        </List>
      </ScrollView>
    </View>
  );
}

export default SideBar;
