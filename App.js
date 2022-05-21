import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import react, { useState, useEffect } from "react";

const App = () => {
  const [todos, setTodos] = useState([{key: 1, text: 'Get yourself a coffee!!'}])
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.list}></View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  heading: {
    padding: 20,
  },
  headingText: {
    textAlign: "center",
    fontSize: 25,
  },
});

export default App;
