import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../../styles/Post'
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import NavBar from './NavBar'


export default function Post() {

    const [showNav, setShowNav] = useState(true);

    const handleOnScroll = ({ nativeEvent }) => {
        const currentHeight = nativeEvent.contentOffset.y;

        const diff = currentHeight - (this.offset || 0);

        console.log(currentHeight, diff);

        if (diff <= 0) {
            setShowNav(true);
        } else {
            setShowNav(false);
        }

        this.offset = currentHeight;
        console.log(this.offset);
    }

    return (
        <SafeAreaView style={styles.container}>
            {showNav ? <NavBar /> : null}
            <ScrollView
                onScroll={handleOnScroll}
                showsVerticalScrollIndicator={false}
                style={{
                    marginTop: 50
                }}
            >
                <View>
                    <Image
                        source={{uri: 'https://jumpseller.com/images/learn/create-a-blog/blog.jpg'}}
                        style={styles.ImgCont}
                    />
                </View>
                <View style={styles.TxtCont}>
                    <Text>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</Text>
                    <Text>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}