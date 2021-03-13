import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Header, Item, Input, Icon, Button, Text, Content, Right, Footer, Spinner } from 'native-base';
import { I18nManager, StatusBar, TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { makeSelectSearchTwit } from '../App/selectors';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MainScreenNavigator from '../../components/MainScreenNavigator';
import UserTwits from '../../components/UserTwits';
import styles from '../../components/Style';
import { searchTwitAction } from '../App/actions';

function Search({ onSearch, searchData }) {
  const [search, setSearch] = useState(null);
  const [searchText, setSearchText] = useState(null);

  useEffect(() => {
    getSearchValue();
  }, []);

  useEffect(() => {
    if (searchData.data !== null) {
      setSearch(searchData.data.data);
    }
  }, [searchData.data]);

  const saveSearchValue = async (value) => {
    try {
      await AsyncStorage.setItem('search', value);
    } catch (error) {
      console.log(error);
    }
  };

  const getSearchValue = async () => {
    try {
      return await AsyncStorage.getItem('search').then((res) => setSearchText(res));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <StatusBar hidden />
      <Header transparent style={styles.borderBottom}>
        <Item rounded underline={false} style={[styles.centerize, styles.normalWidth, styles.margin, styles.rounded]}>
          <Input
            autoFocus
            placeholder="جستجو"
            onChangeText={(text) => {
              onSearch(text);
              saveSearchValue(text);
            }}
            style={[styles.iranSans, I18nManager.isRTL ? { textAlign: 'right' } : { textAlign: 'left' }]}
          />
          <Icon name="search" style={styles.gray} />
        </Item>
        <Right style={[styles.column, styles.center]}>
          <TouchableOpacity onPress={() => Actions.pop({ animated: true })}>
          <Icon name="arrow-left" type="SimpleLineIcons" style={[styles.icon, { fontSize: 24 }]} />
          </TouchableOpacity>
        </Right>
      </Header>
      <Content>{search === null && searchText === null ? <Spinner /> : <UserTwits twits={search} />}</Content>
      <Footer>
        <MainScreenNavigator index={1} />
      </Footer>
    </Container>
  );
}

Search.propTypes = {
  dispatch: PropTypes.func,
  onSearch: PropTypes.func,
  searchData: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  searchData: makeSelectSearchTwit(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onSearch: (searchText) => dispatch(searchTwitAction(searchText)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Search);
