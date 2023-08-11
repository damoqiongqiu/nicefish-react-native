import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    Appbar,
    Avatar,
    Button,
    Title,
    Paragraph,
    ToggleButton,
} from 'react-native-paper';

const My = (props) => {
    const [toggleValue, setToggleValue] = React.useState('posts');

    return (
        <View style={styles.container}>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => { }} />
                <Appbar.Content title="User Profile" />
            </Appbar.Header>
            <View style={styles.profileContainer}>
                <Avatar.Image
                    size={100}
                    source={{ uri: 'https://via.placeholder.com/150' }}
                />
                <Title style={styles.username}>John Doe</Title>
                <Paragraph style={styles.bio}>This is my bio.</Paragraph>
                <Button mode="outlined" style={styles.editButton}>
                    Edit Profile
                </Button>
            </View>
            <View style={styles.headerTextContainer}>
                <View style={styles.headerTextBlock}>
                    <Title style={styles.headerText}>123</Title>
                    <Paragraph style={styles.headerSubText}>Followers</Paragraph>
                </View>
                <View style={styles.headerTextBlock}>
                    <Title style={styles.headerText}>456</Title>
                    <Paragraph style={styles.headerSubText}>Following</Paragraph>
                </View>
                <View style={styles.headerTextBlock}>
                    <Title style={styles.headerText}>789</Title>
                    <Paragraph style={styles.headerSubText}>Posts</Paragraph>
                </View>
            </View>
            <ToggleButton.Row
                style={styles.toggleButtonRow}
                onValueChange={(value) => setToggleValue(value)}
                value={toggleValue}
            >
                <ToggleButton style={styles.toggleButton} icon="grid" value="posts" />
                <ToggleButton
                    style={styles.toggleButton}
                    icon="image"
                    value="photos"
                />
                <ToggleButton
                    style={styles.toggleButton}
                    icon="account-circle"
                    value="profile"
                />
                <ToggleButton style={styles.toggleButton} icon="bookmark" value="saved" />
            </ToggleButton.Row>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    profileContainer: {
        alignItems: 'center',
        padding: 16,
    },
    username: {
        marginTop: 8,
        fontSize: 20,
    },
    bio: {
        marginTop: 4,
    },
    editButton: {
        marginTop: 12,
    },
    headerTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 16,
        marginBottom: 8,
    },
    headerTextBlock: {
        alignItems: 'center',
    },
    headerText: {
        fontSize: 18,
    },
    headerSubText: {
        fontSize: 14,
        color: '#888',
    },
    toggleButtonRow: {
        justifyContent: 'space-around',
        paddingVertical: 16,
    },
    toggleButton: {
        flex: 1,
    },
});

export default My;
