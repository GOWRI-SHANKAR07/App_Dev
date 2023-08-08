import { Button, View } from "react-native";
import { styles } from "../styles/Home";

export function NotificationsScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    );
  }