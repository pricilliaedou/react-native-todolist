import { useTodoList } from "@/stores/todoStore";
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
  const { todoList } = useTodoList();

  const countByStatus = todoList.reduce(
    (acc, todo) => {
      todo.completed ? acc.Done++ : acc.InProgress++;
      return acc;
    },
    { All: todoList.length, InProgress: 0, Done: 0 },
  );

  function getTextStyle(tabName: TabName) {
    return {
      fontWeight: "bold" as const,
      color: tabName === selectedTabName ? "#2F76E5" : "black",
    };
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onPress("All")}>
        <Text style={getTextStyle("All")}>All ({countByStatus.All})</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPress("InProgress")}>
        <Text style={getTextStyle("InProgress")}>
          In progress ({countByStatus.InProgress})
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPress("Done")}>
        <Text style={getTextStyle("Done")}>Done ({countByStatus.Done})</Text>
      </TouchableOpacity>
    </View>
  );
}
