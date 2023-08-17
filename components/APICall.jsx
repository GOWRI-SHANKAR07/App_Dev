import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../styles/Notifications'
import { useColorSchemeContext } from '../theme/ColorSchemeContext'
import axios from 'axios'

const APICall = () => {
    const { colorScheme } = useColorSchemeContext();

    const userData = [
        {
            "postId": 1,
            "id": 6,
            "name": "Gowri Shankar N",
            "email": "gowrishankaroffl@gmail.com",
            "body": "Software Developer - React Native"
        },
        {
            "postId": 1,
            "id": 1,
            "name": "id labore ex et quam laborum",
            "email": "Eliseo@gardner.biz",
            "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
        },
        {
            "postId": 1,
            "id": 2,
            "name": "quo vero reiciendis velit similique earum",
            "email": "Jayne_Kuhic@sydney.com",
            "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
        },
        {
            "postId": 1,
            "id": 3,
            "name": "odio adipisci rerum aut animi",
            "email": "Nikita@garfield.biz",
            "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
        },

    ]

    const headers = {
        'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
        'Content-Type': 'application/json',
    };

    const updData = {
        "postId": 1,
        "id": 7,
        "name": "Gowri Shankar N",
        "email": "gowrishankaroffl@gmail.com",
        "body": "Data Analyst"
    }

    const dltUser = userData[0].id;

    // post request method
    const postData = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts/1/comments', userData, { headers })
            .then(res => {
                console.log('Response:', res.data);
            })
            .catch(error => console.error('Error:', error));
    }

    // put request method
    const putData = () => {
        axios.put('https://jsonplaceholder.typicode.com/posts/1', updData, { headers })
            .then(res => console.log(res.data))
            .catch(err => console.log("Error", err))
    }

    // delete request method
    const deleteData = () => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${dltUser}`, { 'Authorization': 'Bearer ACCESS_TOKEN' })
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    return (
        <View>
            <TouchableOpacity
                style={[styles.button, { backgroundColor: colorScheme === 'dark' ? '#fff' : '#000' }]}
                onPress={postData}
            >
                <Text style={[styles.buttonText, { color: colorScheme === 'dark' ? '#000' : '#fff' }]}>Post Data</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, { backgroundColor: colorScheme === 'dark' ? '#fff' : '#000' }]}
                onPress={putData}
            >
                <Text style={[styles.buttonText, { color: colorScheme === 'dark' ? '#000' : '#fff' }]}>Put Data</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, { backgroundColor: colorScheme === 'dark' ? '#fff' : '#000' }]}
                onPress={deleteData}
            >
                <Text style={[styles.buttonText, { color: colorScheme === 'dark' ? '#000' : '#fff' }]}>Delete Data</Text>
            </TouchableOpacity>
        </View>
    )
}

export default APICall