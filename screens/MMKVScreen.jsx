import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, SafeAreaView } from 'react-native';
import MMKVStorage from 'react-native-mmkv-storage';

const MMKVScreen = () => {
  const [storedValue, setStoredValue] = useState('');
  const [inputValue, setInputValue] = useState('');

  const mmkv = new MMKVStorage.Loader().initialize();

  const storeData = () => {
    mmkv.setString('myKey', inputValue);
    setStoredValue(inputValue);
    setInputValue('');
  };

  const retrieveData = () => {
    const value = mmkv.getString('myKey');
    setStoredValue(value);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>MMKV Storage Example</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a value"
        value={inputValue}
        onChangeText={setInputValue}
      />
      <Button title="Store Data" onPress={storeData} />
      <Button title="Retrieve Data" onPress={retrieveData} />
      <Text style={styles.storedValue}>Stored Value: {storedValue}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: '100%',
    marginBottom: 10,
  },
  storedValue: {
    marginTop: 20,
  },
});

export default MMKVScreen;
