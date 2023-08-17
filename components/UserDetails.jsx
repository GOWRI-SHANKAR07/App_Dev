import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native';
import { styles } from '../styles/UserDetails';

const UserDetails = ({ items }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userCont}>
        <Text>NAME : {items.name}</Text>
        <Text>EMAIL ID : {items.email}</Text>
        <Text>DESCRIPTION : {items.body}</Text>
      </View>
    </SafeAreaView>
  )
}

export default UserDetails;

