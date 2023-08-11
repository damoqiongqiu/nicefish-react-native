import React, { useState } from 'react';
import PostCard from '../post-card';
import { SafeAreaView, FlatList, StyleSheet } from 'react-native';

import postListMock from "../../../mock-data/post-list-mock.json";

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

/**
 * 内容列表
 * @author 大漠穷秋
 * @date 2023-08-11 11:28:18
 */
const PostList = (props) => {
    const [postList, setPostList] = useState(postListMock);
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={postList.content}
                renderItem={
                    ({ item, index }) => {
                        return (<PostCard key={index} post={item} />);
                    }
                }
                keyExtractor={item => item.postId}
            />
        </SafeAreaView>
    );
};
export default PostList;