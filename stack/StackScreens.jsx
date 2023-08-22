import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import AuthContextProvider from '../Auth/AuthContext'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/ProductScreen';
import TabScreen from '../screens/TabScreen'
import LoginScreen from '../screens/LoginScreen'
import SignupScreen from '../screens/SignupScreen'
import { NotificationsScreen } from '../screens/NotificationScreen'
import Drawers from '../screens/DrawerScreen'
import KeyboardAvoidingComponent from '../components/KeyboardAvoidingWrapper'
import ScrolledViewScreen from '../screens/ScrollViewScree'
import PostScreen from '../screens/PostScreen'
import PostCard from '../components/Blogs/PostCard'
import PostListScreen from '../screens/PostListScreen'
import SecureStorageScreen from '../screens/SecureStorageScreen'
import MMKVScreen from '../screens/MMKVScreen'
import ProfileScreen from '../screens/ProfileScreen'
import { ColorSchemeProvider, useColorSchemeContext } from '../theme/ColorSchemeContext';
import { ActivityIndicator } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// creating stacknavigator
const Stack = createNativeStackNavigator();

const StackScreens = ({ initialRoute }) => {

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
                            <View
                                style={{
                                    backgroundColor: "#fff",
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
                            </View>
                        )
                        }
                    </NavigationContainer>
            </ColorSchemeProvider>
        </AuthContextProvider>
    )
}

export default StackScreens;