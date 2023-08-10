import React, { useState } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import NFHeader from '../header';
import commonStyles from '../shared/common-styles';

const Friends = () => {
    return (
        <View style={commonStyles.container}>
            <NFHeader />
            <Text style={commonStyles.contentHeader}>Friends</Text>
        </View>
    );
};
export default Friends;