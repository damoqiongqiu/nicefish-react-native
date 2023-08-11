import React, { useState } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import NFHeader from '../header';
import commonStyles from '../shared/common-styles';
import MessageList from './message-list';

const Message = (props) => {
    return (
        <View style={commonStyles.container}>
            <NFHeader />
            <MessageList />
        </View>
    );
};
export default Message;