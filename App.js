import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, SafeAreaView, StyleSheet, Text, View, useColorScheme } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProfileScreen from './screens/ProfileScreen';
import StackScreens from './stack/StackScreens';
import { useEffect, useState } from 'react';



export default function App() {

  // initial route state
  const [initialRoute, setInitialRoute] = useState('');

  useEffect(() => {
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
      <StackScreens initialRoute={initialRoute} />
  );
}

