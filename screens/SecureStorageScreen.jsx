import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, SafeAreaView } from 'react-native';
import RNSecureStorage, { ACCESSIBLE } from 'rn-secure-storage';

const SecureStorageScreen = () => {
    const [storedUser, setStoredUser] = useState(null);
    const [inputId, setInputId] = useState('');
    const [inputName, setInputName] = useState('');
    const [inputAge, setInputAge] = useState('');
    const [inputEmail, setInputEmail] = useState('');

    const storeUser = () => {
        const newUser = {
            name: inputName,
            age: inputAge,
            email: inputEmail,
        };

        // {accessible: ACCESSIBLE.WHEN_UNLOCKED} -> This for IOS
        RNSecureStorage.set("key1", "this is a value", { accessible: ACCESSIBLE.WHEN_UNLOCKED })
            .then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            });
    };


    const retrieveUser = () => {
        RNSecureStorage.get(inputId)
            .then(value => {
                if (value) {
                    const user = JSON.parse(value);
                    setStoredUser(user);
                }
            })
            .catch(error => {
                console.log('Error retrieving user:', error);
            });
    };

    const clearInputs = () => {
        setInputId('');
        setInputName('');
        setInputAge('');
        setInputEmail('');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>RN Secure Storage</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter User ID"
                value={inputId}
                onChangeText={setInputId}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter User Name"
                value={inputName}
                onChangeText={setInputName}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter User Age"
                value={inputAge}
                onChangeText={setInputAge}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter User Email"
                value={inputEmail}
                onChangeText={setInputEmail}
            />
            <Button title="Store User" onPress={storeUser} />
            <Button title="Retrieve User" onPress={retrieveUser} />
            {storedUser && (
                <View style={styles.userData}>
                    <Text>Name: {storedUser.name}</Text>
                    <Text>Age: {storedUser.age}</Text>
                    <Text>Email: {storedUser.email}</Text>
                </View>
            )}
        </View>
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
    userData: {
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
    },
});

export default SecureStorageScreen;
