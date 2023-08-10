import React from 'react';
import { useTheme, Appbar, TouchableRipple, Switch } from 'react-native-paper';
import { PreferencesContext } from '../shared/preferences-context';
import { useRoute } from '@react-navigation/native';

const NFHeader = (props) => {
    const theme = useTheme();
    const { toggleTheme, isThemeDark } = React.useContext(PreferencesContext);
    return (
        <Appbar.Header
            theme={{
                colors: {
                    primary: theme?.colors.surface,
                },
            }}
        >
            {/* <Appbar.BackAction /> */}
            <Appbar.Content title="Header" />
            <Switch
                color={'red'}
                value={isThemeDark}
                onValueChange={toggleTheme}
            />
        </Appbar.Header>
    );
};

export default NFHeader;