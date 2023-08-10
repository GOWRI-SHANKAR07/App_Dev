import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, SafeAreaView } from 'react-native';
import PostCard from '../components/Blogs/PostCard';
import { styles } from '../styles/Post';

const PostListScreen = () => {

  const [newsData, setNewsData] = useState(null)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=15')
      .then(res => res.json())
      .then(data => setNewsData(data))
      .then(console.log(newsData))
      .catch(error => console.error('Error fetching data:', error));
  }, [])





  return (
    <SafeAreaView style={{
      backgroundColor: 'white',
      marginTop: 25,
    }}>
      <Text style={styles.headerTxt}>Product</Text>
      <FlatList
        data={newsData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={PostCard}
      />
    </SafeAreaView>
  );
};



export default PostListScreen;
