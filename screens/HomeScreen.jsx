import { Button, Text, View } from "react-native";
import { styles } from "../styles/Home";

export default function HomeScreen({ navigation, user }) {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => navigation.navigate('Notification')}
          title="Go to notifications"
        />
      </View>
    );
  }