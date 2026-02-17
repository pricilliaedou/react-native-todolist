import { Text, TouchableOpacity } from "react-native";
import styles from "./ButtonAdd.style.js";

interface ButtonAddProps {
  onPress: () => void;
}

export function ButtonAdd({ onPress }: ButtonAddProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>Ajouter une tâche</Text>
    </TouchableOpacity>
  );
}
