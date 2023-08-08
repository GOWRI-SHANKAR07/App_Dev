import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { styles } from '../styles/Home';
import HomeScreen from './HomeScreen';
import { NotificationsScreen } from './NotificationScreen';
import ProfileScreen from './ProfileScreen';
import SettingsScreen from './SettingsScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons';



const Drawer = createDrawerNavigator();

export default function Drawers() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: '#00A8E8' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
        drawerActiveBackgroundColor: 'lightgrey'
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerLabel: "Home",
          drawerLabelStyle: { color: '#00A8E8', fontSize: 20 },
          title: "Home",
          drawerIcon: () => (
            <Ionicons name='home' color='#00A8E8' size={20} />
          )
        }}
      />
      <Drawer.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          drawerLabel: 'Notifications',
          drawerLabelStyle: { color: '#00A8E8', fontSize: 20 },
          title: 'Notification',
          drawerIcon: () => (
            <Ionicons name='notifications-sharp' color='#00A8E8' size={20} />
          )
        }}
      />
      <Drawer.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          drawerLabel: 'Profile',
          drawerLabelStyle: { color: '#00A8E8', fontSize: 20 },
          title: 'Profile',
          drawerIcon: () => (
            <FontAwesome name='user' color='#00A8E8' size={20} />
          )
        }}
      />
      <Drawer.Screen
        name='Settings'
        component={SettingsScreen}
        options={{
          drawerLabel: 'Settings',
          drawerLabelStyle: { color: '#00A8E8', fontSize: 20 },
          title: 'Settings',
          drawerIcon: () => (
            <Ionicons name='settings-sharp' color='#00A8E8' size={20} />
          )
        }}
      />
    </Drawer.Navigator >
  );
}