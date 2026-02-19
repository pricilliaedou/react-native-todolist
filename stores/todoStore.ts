import { Todo } from "@/components/CardToDo/CardToDo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

let globalTodoList: Todo[] = [];
let globalSelectedTabName: string = "All";
const todoListeners: Set<(todos: Todo[]) => void> = new Set();
const tabListeners: Set<(tab: string) => void> = new Set();
let isLoaded = false;

async function saveToDoList(todos: Todo[]) {
  try {
    await AsyncStorage.setItem("@todoList", JSON.stringify(todos));
    console.log("Tâches sauvegardées:", todos.length);
  } catch (error) {
    console.error("Erreur lors de la sauvegarde:", error);
  }
}

async function loadToDoList() {
  try {
    const stringifiedTodoList = await AsyncStorage.getItem("@todoList");
    if (stringifiedTodoList !== null) {
      const parsedTodoList = JSON.parse(stringifiedTodoList);
      console.log("Tâches chargées:", parsedTodoList.length);
      return parsedTodoList;
    }
  } catch (error) {
    console.error("Erreur lors du chargement:", error);
  }
  return [];
}

export function useTodoList() {
  const [todoList, setTodoList] = useState(globalTodoList);

  useEffect(() => {
    async function loadData() {
      if (!isLoaded) {
        isLoaded = true;
        const loadedTodos = await loadToDoList();
        if (loadedTodos.length > 0) {
          globalTodoList = loadedTodos;
          setTodoList(loadedTodos);
          todoListeners.forEach((listener) => listener(loadedTodos));
        }
      }
    }
    
    loadData();
  }, []);

  useEffect(() => {
    const listener = (newTodos: Todo[]) => {
      setTodoList(newTodos);
    };
    todoListeners.add(listener);

    return () => {
      todoListeners.delete(listener);
    };
  }, []);

  // Fonction pour mettre à jour la liste
  const updateTodoList = (newTodos: Todo[]) => {
    globalTodoList = newTodos;
    setTodoList(newTodos);
    todoListeners.forEach((listener) => listener(newTodos));
    saveToDoList(newTodos);
  };

  return { todoList, setTodoList: updateTodoList };
}

export function useSelectedTab() {
  const [selectedTabName, setSelectedTabName] = useState(globalSelectedTabName);

  useEffect(() => {
    const listener = (newTab: string) => {
      setSelectedTabName(newTab);
    };
    tabListeners.add(listener);

    return () => {
      tabListeners.delete(listener);
    };
  }, []);

  const updateSelectedTabName = (newTab: string) => {
    globalSelectedTabName = newTab;
    tabListeners.forEach((listener) => listener(newTab));
  };

  return { selectedTabName, setSelectedTabName: updateSelectedTabName };
}

export function getFilteredList(
  todoList: Todo[],
  selectedTabName: string,
): Todo[] {
  switch (selectedTabName) {
    case "All":
      return todoList;
    case "InProgress":
      return todoList.filter((todo) => !todo.completed);
    case "Done":
      return todoList.filter((todo) => todo.completed);
    default:
      return todoList;
  }
}
