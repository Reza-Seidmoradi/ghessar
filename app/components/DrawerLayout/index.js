import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import {
  Body,
  Card,
  CardItem,
  Container,
  Content,
  Drawer,
  Header,
  Icon,
  Left,
  List,
  ListItem,
  Right,
  Segment,
  Title,
} from 'native-base';
import SideBar from '../SideBar';
import ItemPicker from '../Picker';
import styles from '../Style';

function DrawerLayout({ userId, children }) {
  const [drawer, setDrawer] = useState(false);
  const [visible, setModalVisible] = useState(false);
  const [value, setValue] = useState(null);
  const status = () => {
    switch (value) {
      case null:
        return options;
      case 'block':
        return blockOption;
      default:
        return options;
    }
  };
  const options = (
    <List style={styles.list}>
      <ListItem first style={styles.listItem}>
        <TouchableOpacity onPress={() => setValue('block')}>
          <Text style={styles.iranSans}>مسدود کردن</Text>
        </TouchableOpacity>
      </ListItem>
      <ListItem style={styles.listItem}>
        <TouchableOpacity onPress={() => setValue('restrict')}>
          <Text style={styles.iranSans}>محدود کردن</Text>
        </TouchableOpacity>
      </ListItem>
      <ListItem last noIndent noBorder style={styles.listItem}>
        <TouchableOpacity onPress={() => setValue('mute')}>
          <Text style={styles.iranSans}>ساکت کردن</Text>
        </TouchableOpacity>
      </ListItem>
    </List>
  );
  const blockOption = (
    <Card transparent style={styles.listItem}>
      <CardItem header>
        <Text style={styles.iranSans}>با مسدود کردن کاربر</Text>
      </CardItem>
      <CardItem cardBody>
        <List>
          <ListItem noBorder style={styles.listItemWithoutMargin}>
            <Icon name="dot-single" type="Entypo" />
            <Text style={styles.iranSansSmall}>هیچ یک از پست‌های صفحه‌ی ایشان را نخواهید دید</Text>
          </ListItem>
          <ListItem noBorder style={styles.listItemWithoutMargin}>
            <Icon name="dot-single" type="Entypo" />
            <Text style={styles.iranSansSmall}>پست‌های ایشان را در بخش جستجو نمی‌بینید</Text>
          </ListItem>
          <ListItem noBorder style={styles.listItemWithoutMargin}>
            <Icon name="dot-single" type="Entypo" />
            <Text style={styles.iranSansSmall}>پست‌های ایشان را در صفحه‌ی اصلی نمی‌بینید</Text>
          </ListItem>
          <ListItem noBorder style={styles.listItemWithoutMargin}>
            <Icon name="dot-single" type="Entypo" />
            <Text style={styles.iranSansSmall}>دیدگاه‌ها‌ی ایشان را در بخش دیدگاه‌ها نمی‌بینید</Text>
          </ListItem>
        </List>
      </CardItem>
      <CardItem footer style={[styles.column, styles.divider]}>
        <TouchableOpacity
          style={styles.listItem}
          onPress={() => {
            setModalVisible(!visible);
            setValue(null);
          }}>
          <Text style={[styles.iranSans, { textAlign: 'center', color: 'red' }]}>باشه، مسدود کن</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.listItem}
          onPress={() => {
            setModalVisible(!visible);
            setValue(null);
          }}>
          <Text style={[styles.iranSans, styles.dividerSmall, { textAlign: 'center', color: 'blue' }]}>
            ولش کن، نمی‌خواد
          </Text>
        </TouchableOpacity>
      </CardItem>
    </Card>
  );
  return (
    <Drawer type="displace" content={<SideBar />} open={drawer} tapToClose>
      <Container>
        <Header hasSegment style={styles.backgroundWhite}>
          <Left>
            <TouchableOpacity transparent onPress={() => setDrawer(!drawer)}>
              <Icon name="menu" />
            </TouchableOpacity>
          </Left>
          <Body>
            <Segment style={styles.backgroundWhite}>
              <Icon name="logo-twitter" type="Ionicons" style={styles.activeIcon} />
            </Segment>
          </Body>
          <Right />
        </Header>
        <Content>
          <ItemPicker
            visible={visible}
            children={status()}
            onClose={() => {
              setModalVisible(!visible);
              setValue(null);
            }}
          />
          {children}
        </Content>
      </Container>
    </Drawer>
  );
}

Drawer.propTypes = {
  children: PropTypes.node,
  userId: PropTypes.number,
};

export default DrawerLayout;
