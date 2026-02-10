import { CardToDo } from "@/components/CardToDo/CardToDo";
import { useState } from "react";
import { ScrollView, View } from "react-native";
import styles from "../Apple.style";

const todo_List = [
  {
  id: "1",
  title: "Sortir le chien",
  description: "Le chien doit sortir pour faire ses besoins",
  completed: true
},
{
  id: "2",
  title: "Faire les courses",
  description: "Faire les courses pour la semaine",
  completed: false
}, {
  id: "3",
  title: "Répondre aux emails",
  description: "Répondre aux emails pour la semaine",
  completed: false
},{
  id: "4",
  title: "Sortir le chien",
  description: "Le chien doit sortir pour faire ses besoins",
  completed: true
},
{
  id: "5",
  title: "Faire les courses",
  description: "Faire les courses pour la semaine",
  completed: true
}, {
  id: "6",
  title: "Répondre aux emails",
  description: "Répondre aux emails pour la semaine",
  completed: true
}
]

export default function Index() {
const [todoList, setTodoList] = useState(todo_List);

  return (
  
      <View style={styles.body}>  
      <ScrollView>
        {todoList.map((todo) => (
          <CardToDo key={todo.id} todo={todo} />
  
        ))}

       </ScrollView>
      </View>
    
  );
}
