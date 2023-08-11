import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useColorSchemeContext } from '../theme/ColorSchemeContext';
import { ToggleButton } from '../components/ToggleButton';

const ProfileScreen = () => {
  const { colorScheme } = useColorSchemeContext(); // Access the color scheme

  const containerStyle = {
    ...styles.container,
    backgroundColor: colorScheme === 'dark' ? '#333' : '#fff',
  };

  const textStyle = {
    ...styles.text,
    color: colorScheme === 'dark' ? '#fff' : '#000',
  };

  return (
    <View style={containerStyle}>
      <Text style={textStyle}>Welcome to Home Screen</Text>
      <ToggleButton />
    </View>
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
  },
});

export default ProfileScreen;
