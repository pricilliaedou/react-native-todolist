import { CardToDo, Todo } from "@/components/CardToDo/CardToDo";
import { useState } from "react";
import { ScrollView, View } from "react-native";
import styles from "../Apple.style";

const todo_List = [
  {
  id: "1",
  title: "Sortir le chien",
  completed: true
},
{
  id: "2",
  title: "Faire les courses",
  completed: false
}, {
  id: "3",
  title: "Répondre aux emails",
  completed: false
},{
  id: "4",
  title: "Sortir le chien",
  completed: true
},
{
  id: "5",
  title: "Faire les courses",
  completed: true
}, {
  id: "6",
  title: "Répondre aux emails",
  completed: true
}
]

export default function Index() {
const [todoList, setTodoList] = useState(todo_List);

function updateTodo(todo:Todo) {
const upadatedTodo = {
  ...todo,
  completed: !todo.completed
}
const indexToUpdate = todoList.findIndex((t) => t.id === todo.id);

const updatedTodoList = [...todoList];
updatedTodoList[indexToUpdate] = upadatedTodo;
setTodoList(updatedTodoList);
}


  return (
  
      <View style={styles.body}>  
      <ScrollView>
        {todoList.map((todo) => (
          <CardToDo key={todo.id} todo={todo} onPress={updateTodo} />
  
        ))}

       </ScrollView>
      </View>
    
  );
}
