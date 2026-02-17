import { CardToDo, Todo } from "@/components/CardToDo/CardToDo";
import {
  getFilteredList,
  useSelectedTab,
  useTodoList,
} from "@/stores/todoStore";
import { Alert, ScrollView, View } from "react-native";
import styles from "../Apple.style";

export default function Index() {
  const { todoList, setTodoList } = useTodoList();
  const { selectedTabName } = useSelectedTab();

  function deleteTodo(todoToDelete: Todo) {
    Alert.alert("Suppression", "Supprimer cette tâche ?", [
      {
        text: "Supprimer",
        style: "destructive",
        onPress: () => {
          setTodoList(todoList.filter((todo) => todo.id !== todoToDelete.id));
        },
      },
      {
        text: "Annuler",
        style: "cancel",
      },
    ]);
  }
  function updateTodo(todo: Todo) {
    const upadatedTodo = {
      ...todo,
      completed: !todo.completed,
    };
    const indexToUpdate = todoList.findIndex((t) => t.id === todo.id);

    const updatedTodoList = [...todoList];
    updatedTodoList[indexToUpdate] = upadatedTodo;
    setTodoList(updatedTodoList);
  }

  return (
    <View style={styles.body}>
      <ScrollView>
        {getFilteredList(todoList, selectedTabName).map((todo) => (
          <CardToDo
            key={todo.id}
            todo={todo}
            onPress={updateTodo}
            onLongPress={deleteTodo}
          />
        ))}
      </ScrollView>
    </View>
  );
}
