import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { useColorSchemeContext } from '../theme/ColorSchemeContext';
import { Logout, ToggleTheme } from '../components/ToggleButton';
import { TouchableOpacity } from 'react-native';
import { styles } from '../styles/Profile';
import { useAuthContext } from '../Auth/AuthContext';
import { View } from 'react-native';

const ProfileScreen = ({navigation}) => {
  const { colorScheme } = useColorSchemeContext(); // Access the color scheme
  const { setAuth, setUnSubscribe, unSubscribe } = useAuthContext();

  const containerStyle = {
    ...styles.container,
    backgroundColor: colorScheme === 'dark' ? '#1a1111' : '#fff',
  };

  const textStyle = {
    ...styles.text,
    color: colorScheme === 'dark' ? '#fff' : '#000',
  };

  const handleLogout = () => {
    setAuth('Logged Out');
    setUnSubscribe('Unsubscribed');
    console.log(unSubscribe);
  }

  return (
    <View style={containerStyle}>
      <Text style={textStyle}>Welcome to Home Screen</Text>
      <Text style={textStyle}>{colorScheme === 'dark' ? 'Dark Mode' : 'Light Mode'}</Text>
      <ToggleTheme />
      <TouchableOpacity
        style={[styles.button, { backgroundColor: colorScheme === 'dark' ? '#fff' : '#000' }]}
        onPress={handleLogout}
      >
        <Text style={[styles.buttonText, { color: colorScheme === 'dark' ? '#000' : '#fff' }]}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};


export default ProfileScreen;
