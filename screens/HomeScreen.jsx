import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from '../styles/Home';
import { useColorSchemeContext } from '../theme/ColorSchemeContext';

const UserDataStorage = () => {
  const [inputId, setInputId] = useState('');
  const [retrieveId, setRetrieveId] = useState('');
  const [removeId, setRemoveId] = useState('')
  const [inputName, setInputName] = useState('');
  const [inputAge, setInputAge] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [storedUsers, setStoredUsers] = useState({});
  const [displayedUser, setDisplayedUser] = useState(null);

  // dark / light theme
  const { colorScheme } = useColorSchemeContext();

  const storeUser = async () => {
    try {
      const newUser = {
        name: inputName,
        age: inputAge,
        email: inputEmail,
      };
      const newStoredUsers = {
        ...storedUsers,
        [inputId]: newUser,
      };
      await AsyncStorage.setItem('users', JSON.stringify(newStoredUsers));
      setStoredUsers(newStoredUsers);
      setInputId('');
      setInputName('');
      setInputAge('');
      setInputEmail('');
    } catch (error) {
      console.log("Error storing user", error);
    }
  }

  const retrieveUser = async (id) => {
    try {
      const jsonValue = await AsyncStorage.getItem('users');
      if (jsonValue !== null) {
        const storedUsers = JSON.parse(jsonValue);
        const user = storedUsers[id];
        setDisplayedUser(user);
      }
    } catch (error) {
      console.log("Error retrieving user", error);
    }
  }

  const removeUser = async (id) => {
    try {
      const jsonValue = await AsyncStorage.getItem('users');
      if (jsonValue !== null) {
        const storedUsers = JSON.parse(jsonValue);
        delete storedUsers[id];
        await AsyncStorage.setItem('users', JSON.stringify(storedUsers));
        setStoredUsers(storedUsers);
        setDisplayedUser(null);
        setInputId('');
      }
    } catch (error) {
      console.log("Error removing user", error);
    }
  }

  console.log(displayedUser);

  return (
    <View
      style={
        [styles.container,
        { backgroundColor: colorScheme === 'dark' ? '#1a1111' : '#fff' }
        ]
      }
    >
      <Text style={styles.heading}>User Data Storage</Text>
      <TextInput
        style={[styles.input, { color: colorScheme === 'dark' ? '#fff' : '#000',}]}
        value={inputId}
        onChangeText={setInputId}
        placeholder="Enter User ID"
        placeholderTextColor= {colorScheme === 'dark' ? '#fff' : '#000'}
      />
      <TextInput
        style={[styles.input, { color: colorScheme === 'dark' ? '#fff' : '#000' }]}
        value={inputName}
        onChangeText={setInputName}
        placeholder="Enter User Name"
        placeholderTextColor= {colorScheme === 'dark' ? '#fff' : '#000'}
      />
      <TextInput
        style={[styles.input, { color: colorScheme === 'dark' ? '#fff' : '#000' }]}
        value={inputAge}
        onChangeText={setInputAge}
        placeholder="Enter User Age"
        placeholderTextColor= {colorScheme === 'dark' ? '#fff' : '#000'}
      />
      <TextInput
        style={[styles.input, { color: colorScheme === 'dark' ? '#fff' : '#000' }]}
        value={inputEmail}
        onChangeText={setInputEmail}
        placeholder="Enter User Email"
        placeholderTextColor= {colorScheme === 'dark' ? '#fff' : '#000'}
      />
      <TouchableOpacity
        style={styles.btnCont}
        onPress={storeUser}
      >
        <Text style={styles.btnTxt}>Store User</Text>
      </TouchableOpacity>
      <Text style={styles.sectionHeading}>Retrieve User Data</Text>
      <TextInput
        style={[styles.input, { color: colorScheme === 'dark' ? '#fff' : '#000' }]}
        value={retrieveId}
        onChangeText={setRetrieveId}
        placeholder="Enter User ID for Retrieval"
        placeholderTextColor= {colorScheme === 'dark' ? '#fff' : '#000'}
      />
      <TouchableOpacity
        style={styles.btnCont}
        onPress={() => retrieveUser(retrieveId)}
      >
        <Text style={styles.btnTxt}>Retrieve User</Text>
      </TouchableOpacity>
      {displayedUser ? (
        <ScrollView style={styles.userData}>
          <Text>Name: {displayedUser.name}</Text>
          <Text>Age: {displayedUser.age}</Text>
          <Text>Email: {displayedUser.email}</Text>
        </ScrollView>
      ) : (
        <Text style={styles.errTxt}>No user found</Text>
      )
      }
      <Text style={styles.sectionHeading}>Remove User</Text>
      <TextInput
        style={[styles.input, { color: colorScheme === 'dark' ? '#fff' : '#000' }]}
        value={removeId}
        onChangeText={setRemoveId}
        placeholder="Enter User ID for Retrieval"
        placeholderTextColor= {colorScheme === 'dark' ? '#fff' : '#000'}
      />
      <TouchableOpacity
        style={styles.btnCont}
        onPress={() => removeUser(removeId)}
      >
        <Text style={styles.btnTxt}>Remove User</Text>
      </TouchableOpacity>
    </View>
  );
};


export default UserDataStorage;
