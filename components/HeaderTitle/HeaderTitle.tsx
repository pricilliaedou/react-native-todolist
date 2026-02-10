import { Image, Text, View } from "react-native";
import styles from "./HeaderTitle.style";


export const HeaderTitle = () => (
    <View >
      <Image
        style={styles.headerLogo}
        source={require("../../assets/images/logoToDo.png")}
        resizeMode="contain"
      />
      <Text style={styles.headerText}>Tu as probablement des trucs à faire</Text>
    </View>
  );