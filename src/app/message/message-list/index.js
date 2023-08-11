import React from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { Card, Avatar, List } from 'react-native-paper';
import MessageItem from '../message-item';

const messages = [
    { id: '1', sender: 'John', content: 'Hey, how are you?' },
    { id: '2', sender: 'Jane', content: 'I\'m good, thanks! How about you?' },
    { id: '19', sender: 'Alice', content: 'Hello from Alice' },
    { id: '20', sender: 'Bob', content: 'Hi, Bob here' },
];

export default function MessageList() {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={messages}
                renderItem={({ item, index }) => { return <MessageItem item={item} /> }}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.flatListContent}
            />
        </SafeAreaView>
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
