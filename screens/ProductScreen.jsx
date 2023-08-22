import React, { useEffect, useState } from 'react';

//import all the components we are going to use
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Button,
  ActivityIndicator,
  SectionList,
  FlatList,
  Image,
  useColorScheme,
} from 'react-native';
import PostCard from '../components/Blogs/PostCard';
import { useColorSchemeContext } from '../theme/ColorSchemeContext';

const news = [
  {
    "title": "Product1",
    "data": [
      {
        "category": "men's clothing",
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "id": 1,
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "price": 109.95,
        "rating": { "count": 120, "rate": 3.9 },
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
      }
    ]
  },
  {
    "title": "Product2",
    "data": [
      {
        "category": "men's clothing",
        "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        "id": 2,
        "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "price": 22.3,
        "rating": { "count": 259, "rate": 4.1 },
        "title": "Mens Casual Premium Slim Fit T-Shirts "
      }
    ]
  },
  {
    "title": "Product3",
    "data": [
      {
        "category": "men's clothing",
        "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        "id": 3,
        "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        "price": 55.99,
        "rating": { "count": 500, "rate": 4.7 },
        "title": "Mens Cotton Jacket"
      }
    ]
  },
  {
    "title": "Product4",
    "data": [
      {
        "category": "men's clothing",
        "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        "id": 4,
        "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "price": 15.99,
        "rating": { "count": 430, "rate": 2.1 },
        "title": "Mens Casual Slim Fit"
      }]
  },
]


const Products = () => {

  const [newsData, setNewsData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { colorScheme } = useColorSchemeContext();


  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then(res => res.json())
      .then(res => {
        setOriginalData(res);
        setNewsData(convertData);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, [newsData])

  let convertData = [];
  convertData = originalData.map(item => {
    return {
      title: `Product${item.id}`,
      data: [
        {
          category: item.category,
          description: item.description,
          id: item.id,
          image: item.image,
          price: item.price,
          rating: item.rating,
          title: item.title
        }
      ]
    }
  })


  return (
    <View style={{ flex: 1 }}>
      {isLoading ?
        (
          <View
            style={{
              backgroundColor: colorScheme === 'dark' ? '#1a1111' : "#fff",
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              color: '#000'
            }}
          >
            <ActivityIndicator
              //visibility of Overlay Loading Spinner
              visible={isLoading}
              textStyle={styles.spinnerTextStyle}
              size={50}
              color={'#00A8E8'}
            />
          </View>
        ) :
        (
          <View style={[styles.container, { backgroundColor: colorScheme === 'dark' ? '#1a1111' : '#fff' }]}>
            <Text style={{ textAlign: 'center', fontSize: 20, color: colorScheme === 'dark' ? '#fff' : '#000' }}>
              React Native Section List
            </Text>
            <SectionList
              sections={newsData}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <PostCard items={item} />
              )}
              renderSectionHeader={({ section }) => (
                <Text style={[styles.taskTitle, { color: colorScheme === 'dark' ? '#fff' : '#000' }]}>{section.title}</Text>
              )}
            />
          </View> 
        ) 
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: 30,
    padding: 20,
  },
  taskTitle: {
    paddingTop: 20,
    fontWeight: 'bold',
    fontSize: 20,
  },
  spinnerTextStyle: {
    color: '#fff',
  },
  secCont: {
    margin: 20,
    backgroundColor: '#000'
  },
});

export default Products;
