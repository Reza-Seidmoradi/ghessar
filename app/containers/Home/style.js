import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
    },
    center: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
    item: {
        backgroundColor: '#fefefe',
        borderWidth: 8,
        borderRadius: 4,
        borderColor: '#eeeeee',
        borderBottomWidth: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 2,
        paddingVertical: 12,
        paddingHorizontal: 8,
        marginBottom: 2,
    },
    iranSans: {
        fontFamily: 'IRANSansMobile',
    },
    background: {
        backgroundColor: '#ececec',
    },
    heart: {
        fontSize: 24,
    },
    twit: {
        paddingHorizontal: 8,
        paddingVertical: 8,
    },
    divider: {
        borderTopWidth: 1,
        borderTopColor: '#cecece',
        paddingVertical: 4,
        marginVertical: 8,
        marginHorizontal: 20,
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    retweet:{
        fontSize: 32,
    },
    comment:{
        fontSize: 32,
    }
});

export default styles;
