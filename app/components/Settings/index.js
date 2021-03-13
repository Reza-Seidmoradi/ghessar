import React from 'react';
import { Body, Container, Content, Header, Icon, Left, List, ListItem, Right, Segment, Text, Title } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from '../Style';

function Settings() {
  return (
    <Container>
      <Header style={styles.backgroundWhite} hasSegment>
        <Left />
        <Body>
          <Segment style={[styles.centerize, styles.backgroundWhite, { marginTop: 16 }]}>
            <Title style={[styles.black, styles.iranSansBold]}>تنظیمات</Title>
          </Segment>
        </Body>
        <Right>
          <TouchableOpacity onPress={() => Actions.push('home')}>
            <Icon name="chevron-left" type="Feather" style={[styles.icon, { fontSize: 36 }]} />
          </TouchableOpacity>
        </Right>
      </Header>
      <Content>
        <List style={[styles.list, styles.margin]}>
          <ListItem>
            <Text style={styles.iranSans}>اعلان</Text>
          </ListItem>
          <ListItem>
            <Text style={styles.iranSans}>حساب</Text>
          </ListItem>
          <ListItem>
            <Text style={styles.iranSans}>پوسته</Text>
          </ListItem>
          <ListItem>
            <Text style={styles.iranSans}>نمایش</Text>
          </ListItem>
          <ListItem>
            <Text style={styles.iranSans}>مرورگر</Text>
          </ListItem>
          <ListItem>
            <Text style={styles.iranSans}>مصرف داده</Text>
          </ListItem>
          <ListItem>
            <Text style={styles.iranSans}>درباره ما</Text>
          </ListItem>
        </List>
      </Content>
    </Container>
  );
}

export default Settings;
