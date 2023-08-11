import React, { useState } from 'react';
import { View } from 'react-native';
import { BottomNavigation } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../../home';
import Friends from '../../friends';
import Write from '../../write';
import Message from '../../message';
import My from '../../my';

const NFBottomNav = (props) => {
    const [index, setIndex] = useState(0);

    const [routes] = useState([
        { key: 'home', title: '首页', focusedIcon: 'home', unfocusedIcon: 'home-outline' },
        { key: 'friends', title: '关注', focusedIcon: 'heart', unfocusedIcon: 'heart-outline' },
        { key: 'write', title: '创作', focusedIcon: 'pencil', unfocusedIcon: 'pencil-outline' },
        { key: 'message', title: '消息', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
        { key: 'my', title: '我的', focusedIcon: 'account', unfocusedIcon: 'account-outline' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        home: Home,
        friends: Friends,
        write: Write,
        message: Message,
        my: My,
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