import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../../styles/Post'
import { AntDesign } from '@expo/vector-icons';

export default function NavBar() {
    return (
        <SafeAreaView
            style={{
                position: "absolute",
                top: 33,
                width: '100%',
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                padding: 10,
                backgroundColor: 'gray'
            }}>
            <TouchableOpacity>
                <AntDesign name='arrowleft' size={25} />
            </TouchableOpacity>
            <View style={styles.PostTxt}>
                <Text>Post Name</Text>
            </View>
        </SafeAreaView>
    )
}