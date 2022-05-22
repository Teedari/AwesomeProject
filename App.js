import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import react, { useState, useEffect } from "react";
import Header from "./components/Header";
import AddTodoForm from "./components/AddTodoForm";
import { MaterialIcons } from "@expo/vector-icons";

const Item = ({ todo, onPress }) => (
  <View style={styles.todoItemContainer}>
    <MaterialIcons
      onPress={() => onPress(todo.key)}
      name="delete"
      size={24}
      color="#333"
    />

    <Text style={styles.todoItemContainerText}>{todo?.text}</Text>
  </View>
);

const App = () => {
  const [todos, setTodos] = useState([
    { key: 1, text: "Get yourself a coffee!!" },
    { key: 2, text: "Be a good child of God!!" },
  ]);

  const todoOnPressHandler = (index) => {
    const remove = () =>
      setTodos((prev, next) => prev.filter((todo) => todo.key !== index));
    Alert.alert(`Delete todo #${index}`, "Do you wish to delete this todo?", [
      { text: "Cancel" },
      { text: "Ok", onPress: () => remove() },
    ]);
    console.log("Todo item removed successfully", index);
  };

  const addTodoHandler = (todo) => {
    const ID = todos[todos.length - 1]?.key
      ? todos[todos.length - 1].key + 1
      : 0 + 1;
    setTodos((prev, next) => [...prev, { key: ID, text: todo }]);
    Keyboard.dismiss();
  };

  const renderItem = ({ item }) => {
    return <Item todo={item} onPress={todoOnPressHandler} />;
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <SafeAreaView style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodoForm addTodoHandler={addTodoHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={renderItem}
              keyExtractor={(todo) => todo.key}
              extraData={todos}
            />
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  content: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  todoItemContainer: {
    padding: 20,
    borderColor: "#ee2c00",
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
  },
  todoItemContainerText: {
    color: "#ee2c00",
    fontWeight: "bold",
    fontSize: 18,
    paddingLeft: 10,
  },
  list: {
    flex: 1,
  },
});

export default App;
