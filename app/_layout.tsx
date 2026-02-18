import { ButtonAdd } from "@/components/ButtonAdd/ButtonAdd";
import { HeaderTitle } from "@/components/HeaderTitle/HeaderTitle";
import TabBottomMenu from "@/components/TabBottomMenu/TabBottomMenu ";
import { useSelectedTab, useTodoList } from "@/stores/todoStore";
import { Stack } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Dialog from "react-native-dialog";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import uuid from "react-native-uuid";

export default function RootLayout() {
  const { selectedTabName, setSelectedTabName } = useSelectedTab();
  const { todoList, setTodoList } = useTodoList();
  const [isAddDialogVisible, setIsAddDialogVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

  function showAddTodoDialog() {
    setIsAddDialogVisible(true);
  }

  function addTodo() {
    const newTodo = {
      id: uuid.v4(),
      title: inputValue,
      completed: false,
    };
    setTodoList([...todoList, newTodo]);
    setInputValue("");
    setIsAddDialogVisible(false);
  }

  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={styles.app}>
          <Stack
            screenOptions={{
              headerTitle: () => <HeaderTitle />,
              headerStyle: {
                backgroundColor: "#F9F9F9",
              },
            }}
          />
          <ButtonAdd onPress={showAddTodoDialog} />
        </SafeAreaView>
      </SafeAreaProvider>
      <View style={styles.footer}>
        <TabBottomMenu
          onPress={setSelectedTabName}
          selectedTabName={selectedTabName}
        />
      </View>
      <Dialog.Container
        visible={isAddDialogVisible}
        onBackdropPress={() => setIsAddDialogVisible(false)}
      >
        <Dialog.Title>Créer une tâche</Dialog.Title>
        <Dialog.Description>
          Choisi un nom pour la nouvelle tâche
        </Dialog.Description>
        <Dialog.Input onChangeText={setInputValue} />
        <Dialog.Button
          disabled={inputValue.trim().length === 0}
          label="Créer"
          onPress={addTodo}
        />
        <Dialog.Button label="Annuler" onPress={() => {}} />
      </Dialog.Container>
    </>
  );
}

export const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "#F9F9F9",
  },
  footer: {
    height: 100,
    padding: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
