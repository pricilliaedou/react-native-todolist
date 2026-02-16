import { HeaderTitle } from "@/components/HeaderTitle/HeaderTitle";
import TabBottomMenu from "@/components/TabBottomMenu/TabBottomMenu ";
import { useSelectedTab } from "@/stores/todoStore";
import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  const { selectedTabName, setSelectedTabName } = useSelectedTab();
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
        <TabBottomMenu
          onPress={setSelectedTabName}
          selectedTabName={selectedTabName}
        />
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
    height: 70,
    padding: 10,
  },
});
