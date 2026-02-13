import { Text, TouchableOpacity, View } from "react-native";
import styles from "./TabBottomMenu.style";

type TabName = "All" | "InProgress" | "Done";

export default function TabBottomMenu({
  selectedTabName,
}: {
  selectedTabName: string;
}) {
  function getTextStyle(tabName: TabName) {
    return {
      fontWeight: "bold",
      color: tabName === selectedTabName ? "#2F76E5" : "black",
    };
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text>All</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>In progress</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Done</Text>
      </TouchableOpacity>
    </View>
  );
}
