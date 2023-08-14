import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import { DarkTheme, DefaultTheme, NavigationContainer, ThemeProvider } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import TabScreen from './screens/TabScreen';
import Drawers from './screens/DrawerScreen';
import { NotificationsScreen } from './screens/NotificationScreen';
import KeyboardAvoidingComponent from './components/KeyboardAvoidingWrapper';
import ScrolledViewScreen from './screens/ScrollViewScree';
import PostScreen from './screens/PostScreen';
import PostCard from './components/Blogs/PostCard';
import PostListScreen from './screens/PostListScreen';
import SettingsScreen from './screens/ProductScreen';
import { useEffect } from 'react';
import { ColorSchemeProvider } from './theme/ColorSchemeContext';
import SecureStorageScreen from './screens/SecureStorageScreen';
import MMKVScreen from './screens/MMKVScreen';

// creating stacknavigator
const Stack = createNativeStackNavigator();

export default function App() {

  const colorScheme = useColorScheme();

  useEffect(() => {
    console.log(colorScheme);
  }, [colorScheme])



  return (
    <ColorSchemeProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
          initialRouteName='Tab'
        >
          <Stack.Screen name='Homes' component={HomeScreen} />
          <Stack.Screen name='Tab' component={TabScreen} />
          <Stack.Screen name='Login' component={LoginScreen} />
          <Stack.Screen name='Signup' component={SignupScreen} />
          <Stack.Screen name='Notification' component={NotificationsScreen} />
          <Stack.Screen name='HomeTab' component={Drawers} />
          <Stack.Screen name='Keyboard' component={KeyboardAvoidingComponent} />
          <Stack.Screen name='Scroll' component={ScrolledViewScreen} />
          <Stack.Screen name='Post' component={PostScreen} />
          <Stack.Screen name='Postcard' component={PostCard} />
          <Stack.Screen name='Postlist' component={PostListScreen} />
          <Stack.Screen name='Settings' component={SettingsScreen} />
          <Stack.Screen name='SecureStore' component={SecureStorageScreen} />
          <Stack.Screen name='Mmkv' component={MMKVScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ColorSchemeProvider>
  );
}

