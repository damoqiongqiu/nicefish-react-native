import React, { useState } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import NFHeader from '../header';
import commonStyles from '../shared/common-styles';

const Home = () => {
    return (
        <View style={commonStyles.container}>
            <NFHeader />
            <Text style={commonStyles.contentHeader}>Home</Text>
        </View>
    );
};
export default Home;