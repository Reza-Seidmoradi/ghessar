import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Button, Container, Input, Item, Text } from 'native-base';

import { useInjectReducer } from '../../utils/injectReducer';
import { useInjectSaga } from '../../utils/injectSaga';
import reducer from '../App/reducer';
import saga from '../App/saga';

import { sendCodeAction } from '../App/actions';
import styles from './style';

export function SendCode({ send }) {
    useInjectReducer({ key: 'app', reducer });
    useInjectSaga({ key: 'app', saga });
    const [code, setCode] = React.useState(null);
    return (
        <Container>
            <Item>
                <Input
                    placeholder="code"
                    onChangeText={(text) => setCode(text)}
                />
            </Item>
            <Button style={styles.btn} full bordered onPress={() => send(code)}>
                <Text>Send</Text>
            </Button>
        </Container>
    );
}

SendCode.propTypes = {
    dispatch: PropTypes.func,
    send: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
        send: (code) => dispatch(sendCodeAction(code)),
    };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect)(SendCode);
