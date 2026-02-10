import { Image, Text, TouchableOpacity } from "react-native";
import checkIcon from "../../assets/images/check.png";
import styles from "./CardToDo.style";

interface Todo {
    id: string;
    title?: string;
    description?: string;
    completed: boolean;
}


export function CardToDo({todo}: {todo: Todo}) {
    return(<TouchableOpacity style={styles.card}>
            <Text style={[styles.title, todo.completed && {textDecorationLine:"line-through"}]}>{todo.title}</Text>
          { todo.completed ? <Image 
                source={checkIcon}
                style={styles.checkIcon}
            /> : null}
    </TouchableOpacity>)
}