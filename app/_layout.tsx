import { Stack } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const HeaderTitle = () => (
  <View style={styles.headerContainer}>
    <Image
      style={styles.headerLogo}
      source={require("../assets/images/logoToDo.png")}
      resizeMode="contain"
    />
    <Text style={styles.headerText}>Tu as probablement des trucs à faire</Text>
  </View>
);

export default function RootLayout() {
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: "F9F9F9" }}>
          <Stack
            screenOptions={{
              headerTitle: () => <HeaderTitle />,
              headerStyle: {
                backgroundColor: "#F9F9F9",
              },
            }}
          />
        </SafeAreaView>
      </SafeAreaProvider>
      <View style={styles.footer}>
        <Text>Je suis le footer</Text>
      </View>
    </>
  );
}

export const styles = StyleSheet.create({
  headerContainer: {
    alignItems: "flex-start",
    justifyContent: "center",
  },
  headerLogo: {
    width: 80,
    height: 60,
  },
  headerText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#707070",
    marginTop: 5,
  },
  footer: {
    height: 80,
  },
});
