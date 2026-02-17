import { Todo } from "@/components/CardToDo/CardToDo";
import { useEffect, useState } from "react";

// Store global partagé
let globalTodoList: Todo[] = [];
let globalSelectedTabName: string = "All";
const todoListeners: Set<(todos: Todo[]) => void> = new Set();
const tabListeners: Set<(tab: string) => void> = new Set();

export function useTodoList() {
  const [todoList, setTodoList] = useState(globalTodoList);

  // S'abonner aux changements
  useEffect(() => {
    const listener = (newTodos: Todo[]) => {
      setTodoList(newTodos);
    };
    todoListeners.add(listener);

    return () => {
      todoListeners.delete(listener);
    };
  }, []);

  const updateTodoList = (newTodos: Todo[]) => {
    globalTodoList = newTodos;
    todoListeners.forEach((listener) => listener(newTodos));
  };

  return { todoList, setTodoList: updateTodoList };
}

export function useSelectedTab() {
  const [selectedTabName, setSelectedTabName] = useState(globalSelectedTabName);

  // S'abonner aux changements
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

// Fonction utilitaire pour filtrer les todos
export function getFilteredList(todoList: Todo[], selectedTabName: string): Todo[] {
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
