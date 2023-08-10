import React from 'react';
import { registerRootComponent } from 'expo';
import { Card, Title, Paragraph, List, PaperProvider, adaptNavigationTheme } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  MD3DarkTheme,
  MD3LightTheme,
} from 'react-native-paper';
import merge from 'deepmerge';

import { PreferencesContext } from './components/PreferencesContext';
import Header from './components/Header';

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

const CombinedDefaultTheme = {
  ...MD3LightTheme,
  ...LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    ...LightTheme.colors,
  },
};
const CombinedDarkTheme = {
  ...MD3DarkTheme,
  ...DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    ...DarkTheme.colors,
  },
};

const Stack = createStackNavigator();

const HomeScreen = (props) => {
  const { navigation } = props;
  const title = "???";
  const content = "???";
  return (
    <TouchableOpacity
      onPress={() =>
        navigation?.push('Details', {
          title,
          content,
        })
      }
    >
      <Card>
        <Card.Content>
          <Title>{title}</Title>
          <Paragraph>{content}</Paragraph>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
}

const DetailsScreen = (props) => {
  const { title, content } = props?.route?.params;
  return (
    <List.Section>
      <List.Subheader>{title}</List.Subheader>
      <List.Item title={content} />
    </List.Section>
  );
};

function App() {
  const [isThemeDark, setIsThemeDark] = React.useState(false);

  let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;

  const toggleTheme = React.useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark]
  );

  return (
    <PreferencesContext.Provider value={preferences}>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} options={{ header: () => <Header title="Home" /> }} />
            <Stack.Screen name="Details" component={DetailsScreen} options={{ header: () => <Header title="Details" /> }} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </PreferencesContext.Provider>
  );
}

export default App;

registerRootComponent(App);