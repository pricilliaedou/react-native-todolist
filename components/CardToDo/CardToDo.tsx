import { Image, Text, TouchableOpacity } from "react-native";
import checkIcon from "../../assets/images/check.png";
import styles from "./CardToDo.style";

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export function CardToDo({
  todo,
  onPress,
  onLongPress,
}: {
  todo: Todo;
  onPress: (todo: Todo) => void;
  onLongPress: (todo: Todo) => void;
}) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => onPress(todo)}
      onLongPress={() => onLongPress(todo)}
    >
      <Text
        style={[
          styles.title,
          todo.completed && { textDecorationLine: "line-through" },
        ]}
      >
        {todo.title}
      </Text>
      {todo.completed ? (
        <Image source={checkIcon} style={styles.checkIcon} />
      ) : null}
    </TouchableOpacity>
  );
}
