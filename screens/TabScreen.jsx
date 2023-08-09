
import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../styles/Login'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SettingsScreen from './SettingsScreen';
import ProfileScreen from './ProfileScreen';
import DrawerScreen from './DrawerScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { FeedbackScreen, NotificationsScreen } from './DrawerScreen';
import PostListScreen from './PostListScreen';


const Tab = createBottomTabNavigator();


const TabScreen = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                headerStyle: { backgroundColor: '#00A8E8' },
                headerTintColor: '#fff',
                headerTitleStyle: { fontWeight: 'bold' },
                tabBarActiveTintColor: '#00A8E8',
                tabBarInactiveTintColor: 'gray',
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Products') {
                        iconName = focused
                            ? 'home-circle'
                            : 'home-circle-outline';
                    } else if (route.name === 'SettingsTab') {
                        iconName = focused
                            ? 'account-settings'
                            : 'account-settings-outline';
                    } else if (route.name === 'ProfileTab') {
                        iconName = focused
                            ? 'account-circle'
                            : 'account-circle-outline';
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
            initialRouteName='HomeTab'
        >
            <Tab.Screen name='Products' component={PostListScreen} />
            <Tab.Screen name='SettingsTab' component={SettingsScreen} />
            <Tab.Screen name='ProfileTab' component={ProfileScreen} />
        </Tab.Navigator>
    )
}

export default TabScreen