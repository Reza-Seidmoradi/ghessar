import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FlatList, Text, LogBox, SafeAreaView, StatusBar, ScrollView } from 'react-native';

import { Icon, List, ListItem } from 'native-base';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import RenderTwit from '../../components/RenderTwits';
import ItemPicker from '../Picker';
import { getReportTwitTypesAction } from '../../containers/App/actions';
import { makeSelectReportTwitTypes } from '../../containers/App/selectors';
import styles from '../Style';
import { Actions } from 'react-native-router-flux';
import FAB from 'react-native-fab';

function UserTwits({ twits, onGetReports, reportTypes }) {
  const [visible, setModalVisible] = useState(false);
  const [reports, setReports] = useState(null);
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (reportTypes.data !== null) {
      setReports(reportTypes.data.reports);
      setModalVisible(!visible);
    }
  }, [reportTypes.data]);

  const reportItems = (
    <List style={styles.list}>
      {reports !== null &&
        reports.map((item, index) => (
          <ListItem
            key={index}
            first={index === 0}
            noBorder={index === reports.length - 1}
            style={styles.listItem}
            button>
            <Text style={styles.iranSansSmall}>{item.title}</Text>
          </ListItem>
        ))}
    </List>
  );

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    LogBox.ignoreLogs(['componentWillReceiveProps has been renamed']);
    LogBox.ignoreLogs(['Animated: `useNativeDriver` was not specified.']);
  }, []);

  const showReports = () => {
    if (reports === null) {
      onGetReports();
    } else {
      setModalVisible(!visible);
    }
  };

  const render = (twit) => <RenderTwit twit={twit} onReport={() => showReports()} />;

  return (
    <SafeAreaView>
      <StatusBar hidden />
      <ItemPicker visible={visible} children={reportItems} onClose={() => setModalVisible(!visible)} />
      <FlatList
        ListHeaderComponent={<Text></Text>}
        ListFooterComponent={<Text></Text>}
        onScrollToTop={() => setShow(true)}
        onTouchStart={() => setShow(true)}
        onTouchEnd={() => setShow(false)}
        onScroll={() => setShow(false)}
        onEndReached={() => setShow(false)}
        data={twits}
        listEmptyComponent={
          twits.length === 0 ? <Text style={[styles.black, styles.iranSans]}>هنوز توییتی منتشر نشده است.</Text> : null
        }
        keyExtractor={(item) => item.created_at}
        renderItem={render}
        style={styles.background}
      />
      <FAB
        buttonColor="#64a5ce"
        iconTextComponent={<Icon name="ios-pencil" type="Ionicons" style={styles.primary} />}
        iconTextColor="#FFFFFF"
        onClickAction={() => Actions.push('createTwit')}
        visible={show}
        snackOffset={360}
      />
    </SafeAreaView>
  );
}

UserTwits.propTypes = {
  dispatch: PropTypes.func,
  twits: PropTypes.array.isRequired,
  onGetReports: PropTypes.func,
  reportTypes: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  reportTypes: makeSelectReportTwitTypes(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onGetReports: () => dispatch(getReportTwitTypesAction()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(UserTwits);

/* 

{
            "body": "اولین پست",
            "comments_count": 4,
            "created_at": "2021-01-28 17:09:43",
            "id": 1,
            "likes_count": 0,
            "media": null,
            "retwits_count": 1
        }

*/
