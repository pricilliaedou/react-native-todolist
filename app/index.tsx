import { CardToDo, Todo } from "@/components/CardToDo/CardToDo";
import { getFilteredList, useSelectedTab, useTodoList } from "@/stores/todoStore";
import { ScrollView, View } from "react-native";
import styles from "../Apple.style";

export default function Index() {
  const { todoList, setTodoList } = useTodoList();
  const { selectedTabName } = useSelectedTab();

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
          <CardToDo key={todo.id} todo={todo} onPress={updateTodo} />
        ))}
      </ScrollView>
    </View>
  );
}
