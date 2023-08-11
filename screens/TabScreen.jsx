
import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../styles/Login'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ProductScreen from './ProductScreen';
import ProfileScreen from './ProfileScreen';
import DrawerScreen from './DrawerScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Entypo } from '@expo/vector-icons'; 
import Drawers, { FeedbackScreen, NotificationsScreen } from './DrawerScreen';
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
                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'home'
                            : 'home-outline';
                    } else if (route.name === 'Products') {
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
            initialRouteName='HomeTab'
        >
            <Tab.Screen name='Home' component={Drawers } />
            <Tab.Screen name='Products' component={ProductScreen} />
            <Tab.Screen name='Profile' component={ProfileScreen} />
        </Tab.Navigator>
    )
}

export default TabScreen