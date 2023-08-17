
import React from 'react'
import { Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ProductScreen from './ProductScreen';
import ProfileScreen from './ProfileScreen';
import DrawerScreen from './DrawerScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Entypo } from '@expo/vector-icons';
import Drawers, { FeedbackScreen} from './DrawerScreen';
import { NotificationsScreen } from './NotificationScreen';
import PostListScreen from './PostListScreen';
import { useColorSchemeContext } from '../theme/ColorSchemeContext';
import { DarkTheme } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import SecureStorageScreen from './SecureStorageScreen';
import MMKVScreen from './MMKVScreen';


const Tab = createBottomTabNavigator();


const TabScreen = () => {

    const { colorScheme } = useColorSchemeContext();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                headerStyle: { backgroundColor: '#00A8E8' },
                headerTintColor: '#fff',
                headerTitleStyle: { fontWeight: 'bold' },
                tabBarStyle: { backgroundColor: colorScheme === 'dark' ? '#000' : '#00A8E8', borderBlockColor: colorScheme === 'dark' ? '#000' : '#00A8E8', },
                tabBarActiveTintColor: colorScheme === 'dark' ? '#fff' : '#000',
                tabBarInactiveTintColor: colorScheme === 'dark' ? 'gray' :  '#fff',
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Products') {
                        iconName = focused
                            ? 'post'
                            : 'post-outline';
                    } else if (route.name === 'Notifications') {
                        iconName = focused
                            ? 'shopping'
                            : 'shopping-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused
                            ? 'account'
                            : 'account-outline';
                    }
                    return (
                        <MaterialCommunityIcons
                            name={iconName}
                            size={size}
                            color={color}
                        />
                    );
                }
            })}
            initialRouteName='Products'
        >
            <Tab.Screen name='Products' component={ProductScreen} />
            <Tab.Screen name='Notifications' component={NotificationsScreen} />
            <Tab.Screen name='Profile' component={ProfileScreen} />
        </Tab.Navigator>
    )
}

export default TabScreen