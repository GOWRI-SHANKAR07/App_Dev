import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';
import { styles } from '../../styles/Postcard'

export default function PostCard({ item }) {
    return (
        <SafeAreaView style={styles.newsItemContainer}>
            <View style={styles.shadowContainer}>
                <View style={styles.prodCont}>
                    <Image source={{ uri: item.image }} style={styles.newsImage} />
                    <Text style={styles.priceText}>₹{item.price}</Text>
                    <View style={styles.ratingCont}>
                        <AntDesign name='star' color={'gold'} size={20} />
                        <Text style={styles.ratingTxt}>{item.rating.rate}</Text>
                    </View>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.headlineText}>{item.title.length > 50 ? item.title.slice(0, 50) + '...' : item.title}</Text>
                    <Text style={styles.descriptionTxt}>{item.description.length > 100 ? item.title.slice(0, 100) + '...' : item.title}</Text>
                </View>
            </View>
        </SafeAreaView>

    )
}