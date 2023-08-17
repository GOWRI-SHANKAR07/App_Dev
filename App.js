import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, SafeAreaView, StyleSheet, Text, View, useColorScheme } from 'react-native';
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
import { useEffect, useState } from 'react';
import { ColorSchemeProvider } from './theme/ColorSchemeContext';
import SecureStorageScreen from './screens/SecureStorageScreen';
import MMKVScreen from './screens/MMKVScreen';
import AuthContextProvider, { useAuthContext } from './Auth/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProfileScreen from './screens/ProfileScreen';

// creating stacknavigator
const Stack = createNativeStackNavigator();

export default function App() {
  // accessing curret color theme
  const colorScheme = useColorScheme();

  // initial route state
  const [initialRoute, setInitialRoute] = useState('');

  useEffect(() => {
    console.log(colorScheme);
    console.log("Checking Auth State");
    checkLoginStatus();
  }, [])


  // checking Login in Status
  const checkLoginStatus = async () => {
    try {
      const userToken = await AsyncStorage.getItem('userToken');
      if (userToken) {
        setInitialRoute('Tab');
      } else {
        setInitialRoute('Login');
      }
    } catch (error) {
      console.error('Error checking login status:', error);
    }
  };

  return (
    <AuthContextProvider>
      <ColorSchemeProvider>
        <NavigationContainer>
          {initialRoute != '' ? (
            <Stack.Navigator
              screenOptions={{
                headerShown: false
              }}
              initialRouteName={initialRoute}
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
              <Stack.Screen name='Profile' component={ProfileScreen} />
            </Stack.Navigator>
          ) : (
            <SafeAreaView
              style={{
                backgroundColor: colorScheme === 'dark' ? '#1a1111' : "#fff",
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                color: '#000'
              }}
            >
              <ActivityIndicator
                //visibility of Overlay Loading Spinner
                visible={initialRoute === ''}
                size={50}
                color={'#00A8E8'}
              />
            </SafeAreaView>
          )
          }
        </NavigationContainer>
      </ColorSchemeProvider>
    </AuthContextProvider>
  );
}

