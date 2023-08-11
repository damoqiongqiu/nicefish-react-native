import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Avatar, List } from 'react-native-paper';

export default function MessageItem(props) {
    const { item } = props;
    return (
        <Card style={styles.card}>
            <Card.Title
                title={item.sender}
                left={(props) => <Avatar.Text {...props} label={item.sender[0]} />}
            />
            <Card.Content>
                <List.Item title={item.content} />
            </Card.Content>
        </Card>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    flatListContent: {
        padding: 16,
    },
    card: {
        marginBottom: 16,
    },
});
