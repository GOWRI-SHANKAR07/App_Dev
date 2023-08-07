import { Button, Text, View } from "react-native";
import { styles } from "../styles/Home";

export default function HomeScreen({ navigation, user }) {
    return (
      <View style={styles.container}>
        <Text>{user}</Text>
        <Button
          onPress={() => navigation.navigate('Notifications')}
          title="Go to notifications"
        />
      </View>
    );
  }