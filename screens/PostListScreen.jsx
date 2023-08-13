import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, SafeAreaView, ActivityIndicator } from 'react-native';
import PostCard from '../components/Blogs/PostCard';
import { styles } from '../styles/Post';
import { useColorSchemeContext } from '../theme/ColorSchemeContext';

const PostListScreen = () => {

  const [newsData, setNewsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { colorScheme } = useColorSchemeContext();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setNewsData(data);
        setIsLoading(false);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [])



  return (
    <SafeAreaView style={{
      backgroundColor: colorScheme === 'dark' ? '#1a1111' : '#fff',
      marginTop: 25,
    }}>

      {isLoading ?
        (
          <SafeAreaView
            style={{
              backgroundColor: colorScheme === 'dark' ? '#1a1111' : "#fff",
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              color: colorScheme === 'dark' ? '#fff' : '#000',
            }}
          >
            <ActivityIndicator
              //visibility of Overlay Loading Spinner
              visible={isLoading}
              textStyle={styles.spinnerTextStyle}
              size={50}
              color= {colorScheme === 'dark' ? '#fff' : '#000'}
            />
          </SafeAreaView>
        )
        :
        (
          <SafeAreaView>
            <Text style={[styles.headerTxt, {color: colorScheme === 'dark' ? '#fff' : '#000'}]}>Product</Text>
            <FlatList
              data={newsData}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({item}) => <PostCard items={item} />}
            />
          </SafeAreaView>
        )
      }
    </SafeAreaView>
  );
};



export default PostListScreen;
