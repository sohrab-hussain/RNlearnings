/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NewAppScreen} from '@react-native/new-app-screen';
import {StyleSheet, useColorScheme, View} from 'react-native';
import {useSafeAreaInsets,} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {AppNavigator} from "./src/navigation";

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      {/*<StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />*/}
      {/*<AppContent />*/}
        <AppNavigator/>
    </NavigationContainer>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <NewAppScreen
        templateFileName="App.tsx"
        safeAreaInsets={safeAreaInsets}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
