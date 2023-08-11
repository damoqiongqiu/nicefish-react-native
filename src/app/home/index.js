import { useState } from 'react';
import { View } from 'react-native';
import NFHeader from '../header';
import commonStyles from '../shared/common-styles';
import PostList from './post-list';

const Home = (props) => {
    return (
        <View style={commonStyles.container}>
            <NFHeader />
            <PostList></PostList>
        </View>
    );
};
export default Home;