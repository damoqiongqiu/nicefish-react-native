import { useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, StatusBar } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';

import commonStyles from '../../shared/common-styles';

const styles = StyleSheet.create({
    item: {
        marginVertical: 8,
        marginHorizontal: 16,
    },
});

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

/**
 * 内容卡片
 * @author 大漠穷秋
 * @date 2023-08-11 11:28:18
 */
const PostCard = (props) => {
    const post = props.post;
    return (
        <Card style={styles.item}>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Title title={post.title} subtitle={post.nickName} left={LeftContent} />
            <Card.Content>
                <Text variant="titleLarge">{post.title}</Text>
                <Text variant="bodyMedium">{post.content}</Text>
            </Card.Content>
            <Card.Actions>
                <Button>喜欢</Button>
                <Button>分享</Button>
                <Button>收藏</Button>
                <Button>评论</Button>
            </Card.Actions>
        </Card>
    );
};
export default PostCard;