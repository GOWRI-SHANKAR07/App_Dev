import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons'
import { styles } from '../../styles/Postcard'
import { useColorSchemeContext } from '../../theme/ColorSchemeContext'

export default function PostCard({ items }) {

    const { colorScheme } = useColorSchemeContext();

    return (
        <SafeAreaView
            style={
                [styles.newsItemContainer,
                { backgroundColor: colorScheme === 'dark' ? '#00C8E8' : '#00B1A1' }
                ]
            }
        >
            <View
                style={[styles.shadowContainer,
                { backgroundColor: colorScheme === 'dark' ? '#00C8E8' : '#00B1A1' }
                ]
                }
            >
                <View style={styles.prodCont}>
                    <Image source={{ uri: items.image }} style={styles.newsImage} />
                    <Text
                        style={[styles.priceText,
                        { color: '#000'}
                        ]}
                    >
                        ₹{items.price}
                    </Text>
                    <View
                        style={styles.ratingCont}
                    >
                        <AntDesign name='star' color={'gold'} size={20} />
                        <Text
                            style={[styles.ratingTxt,
                            { color: '#000'}
                            ]}
                        >
                            {items.rating.rate}
                        </Text>
                    </View>
                </View>
                <View style={styles.textContainer}>
                    <Text
                        style={[styles.headlineText,
                        { color: '#000' }
                        ]}
                    >
                        {items.title.length > 50 ? items.title.slice(0, 50) + '...' : items.title}
                    </Text>
                    <Text
                        style={[styles.descriptionTxt,
                        { color: '#fff' }
                        ]}
                    >
                        {items.description.length > 100 ? items.title.slice(0, 100) + '...' : items.title}
                    </Text>
                </View>
            </View>
        </SafeAreaView>

    )
}

