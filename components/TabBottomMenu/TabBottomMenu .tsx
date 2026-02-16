import { Text, TouchableOpacity, View } from "react-native";
import styles from "./TabBottomMenu.style";

type TabName = "All" | "InProgress" | "Done";

export default function TabBottomMenu({
  selectedTabName,
  onPress,
}: {
  onPress: (tabName: TabName) => void;
  selectedTabName: string;
}) {
  function getTextStyle(tabName: TabName) {
    return {
      fontWeight: "bold" as const,
      color: tabName === selectedTabName ? "#2F76E5" : "black",
    };
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onPress("All")}>
        <Text style={getTextStyle("All")}>All</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPress("InProgress")}>
        <Text style={getTextStyle("InProgress")}>In progress</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPress("Done")}>
        <Text style={getTextStyle("Done")}>Done</Text>
      </TouchableOpacity>
    </View>
  );
}
