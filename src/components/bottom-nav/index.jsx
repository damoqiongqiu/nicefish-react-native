import React, { useState } from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // 导入图标库

const HomeRoute = () => <Text>Music</Text>;
const FriendsRoute = () => <Text>Albums</Text>;
const WriteRoute = () => <Text>Albums</Text>;
const RecentsRoute = () => <Text>Recents</Text>;
const MessageRoute = () => <Text>Notifications</Text>;

const NFBottomNav = () => {
    const [index, setIndex] = useState(0);

    const [routes] = useState([
        { key: 'home', title: '首页', focusedIcon: 'home', unfocusedIcon: 'home-outline' },
        { key: 'friends', title: '关注', focusedIcon: 'heart', unfocusedIcon: 'heart-outline' },
        { key: 'write', title: '创作', focusedIcon: 'pencil', unfocusedIcon: 'pencil-outline' },
        { key: 'message', title: '消息', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
        { key: 'my', title: '我的', focusedIcon: 'account', unfocusedIcon: 'account-outline' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        home: HomeRoute,
        friends: FriendsRoute,
        write: WriteRoute,
        message: MessageRoute,
        my: RecentsRoute,
    });

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
            renderTabBar={(props) => (
                <View>
                    {props.navigationState.routes.map((route, i) => (
                        <BottomNavigationTab
                            key={route.key}
                            label={route.title}
                            icon={() => <Icon name={route.icon} size={24} color={i === index ? '#007AFF' : '#BDBDBD'} />}
                            onPress={() => setIndex(i)}
                        />
                    ))}
                </View>
            )}
        />
    );
};

export default NFBottomNav;