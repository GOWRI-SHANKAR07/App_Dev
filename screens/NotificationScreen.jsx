import { Button, View } from "react-native";
import { styles } from "../styles/Notifications";
import { Text } from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import UserDetails from "../components/UserDetails";
import { SafeAreaView } from "react-native";
import { useColorSchemeContext } from "../theme/ColorSchemeContext";
import { ActivityIndicator } from "react-native";
import { TouchableOpacity } from "react-native";
import APICall from "../components/APICall";
import { ScrollView } from "react-native";

export function NotificationsScreen({ navigation }) {

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true)

  const { colorScheme } = useColorSchemeContext();


  useEffect(() => {
    // get request method
    axios.get('https://jsonplaceholder.typicode.com/posts/1/comments')
      .then(res => {
        setData(res.data);
        setIsLoading(false)
      })
      .catch(err => {
        console.log("Error", err);
      })
  }, [])



  return (
      <ScrollView
        style={{
          backgroundColor: colorScheme === 'dark' ? '#1a1111' : '#fff',
          marginTop: 25,
          height: '100%',
          color: colorScheme === 'dark' ? '#fff' : '#000',
        }}
      >
        {isLoading ?
          (
            <ActivityIndicator
              //visibility of Overlay Loading Spinner
              visible={isLoading}
              size={50}
              color={colorScheme === 'dark' ? '#fff' : '#000'}
            />
          )
          :
          (
            <>
              <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <UserDetails items={item} />}
              />
              <APICall />
            </>
          )
        }
      </ScrollView>
  );
}