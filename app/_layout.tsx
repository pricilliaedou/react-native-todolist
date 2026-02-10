import { HeaderTitle } from "@/components/HeaderTitle/HeaderTitle";
import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";



export default function RootLayout() {
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={styles.app}>
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
  app: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    
  },
  footer: {
    height: 80,
    padding:10
  },
});
