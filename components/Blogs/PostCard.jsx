import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons'
import { styles } from '../../styles/Postcard'

export default function PostCard({ items }) {
    return (
        <SafeAreaView style={styles.newsItemContainer}>
            <View style={styles.shadowContainer}>
                <View style={styles.prodCont}>
                    <Image source={{ uri: items.image }} style={styles.newsImage} />
                    <Text style={styles.priceText}>₹{items.price}</Text>
                    <View style={styles.ratingCont}>
                        <AntDesign name='star' color={'gold'} size={20} />
                        <Text style={styles.ratingTxt}>{items.rating.rate}</Text>
                    </View>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.headlineText}>{items.title.length > 50 ? items.title.slice(0, 50) + '...' : items.title}</Text>
                    <Text style={styles.descriptionTxt}>{items.description.length > 100 ? items.title.slice(0, 100) + '...' : items.title}</Text>
                </View>
            </View>
        </SafeAreaView>

    )
}

