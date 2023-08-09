import { View, Text, SafeAreaView, SectionList } from 'react-native'
import React from 'react'
import { styles } from '../styles/Login'

const data = [
  {
    title: 'Frameworks',
    data: ['React', 'Angular', 'React - native']
  },
  {
    title: 'Languages',
    data: ['javascript', 'Kotlin', 'Swift']
  }
]

export default function SettingsScreen() {

  function Item({ title }) {
    return (
      <SafeAreaView style={{
        flexDirection: 'row',
        justifySelf: "center",
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
        elevation: 10,
      }}>
        <Text>{title}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{
      marginTop: 20,
    }}>
      <SectionList
        sections={data}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.title}>{title}</Text>
        )}
      />
    </SafeAreaView>
  )
}