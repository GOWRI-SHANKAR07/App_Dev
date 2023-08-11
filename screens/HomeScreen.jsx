import { Button, Text, View } from "react-native";
import { styles } from "../styles/Home";
import { useColorSchemeContext } from "../theme/ColorSchemeContext";

export default function HomeScreen({ navigation, user }) {

  const { colorScheme } = useColorSchemeContext();

    return (
      <View style={[styles.container, {backgroundColor: colorScheme === 'dark' ? '#3F2E3E' : '#fff'}]}>
        <Button
          onPress={() => navigation.navigate('Notification')}
          title="Go to notifications"
          style={{backgroundColor: colorScheme === 'dark' ? '#fff' : '#000', color: colorScheme === 'dark' ? '#fff' : '#000'}}
        />
      </View>
    );
  }