import React from 'react';
import { useTheme, Appbar, TouchableRipple, Switch } from 'react-native-paper';
import { PreferencesContext } from './PreferencesContext';
import { useRoute } from '@react-navigation/native';

const Header = (props) => {
    const route = useRoute();
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
            <Appbar.Content title={route?.name} />
            <Switch
                color={'red'}
                value={isThemeDark}
                onValueChange={toggleTheme}
            />
        </Appbar.Header>
    );
};

export default Header;