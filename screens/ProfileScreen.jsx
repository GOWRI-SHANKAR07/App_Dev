import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { useColorSchemeContext } from '../theme/ColorSchemeContext';
import { Logout, ToggleTheme } from '../components/ToggleButton';

const ProfileScreen = () => {
  const { colorScheme } = useColorSchemeContext(); // Access the color scheme

  const containerStyle = {
    ...styles.container,
    backgroundColor: colorScheme === 'dark' ? '#1a1111' : '#fff',
  };

  const textStyle = {
    ...styles.text,
    color: colorScheme === 'dark' ? '#fff' : '#000',
  };

  return (
    <SafeAreaView style={containerStyle}>
      <Text style={textStyle}>Welcome to Home Screen</Text>
      <Text style={textStyle}>{colorScheme === 'dark' ? 'Dark Mode' : 'Light Mode'}</Text>
      <ToggleTheme />
      <Logout />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
});

export default ProfileScreen;
