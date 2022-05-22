import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

const AddTodoForm = ({addTodoHandler}) => {
  const [todoText, setTodoText] = useState("");
  const [isNotValid, setIsNotValid] = useState(null)
  const onChangeInput = val => {
    setTodoText(val)
    if(val.length <= 3){
      setIsNotValid(true)
      return;
    }
    setIsNotValid(null)
  }
  
  return (
    <View>
      <Text style={{ fontSize: 18, fontWeight: "bold", paddingVertical: 10 }}>
        Enter text for todo
      </Text>
      <TextInput
        style={styles.input}
        value={todoText}
        onChangeText={onChangeInput}
        placeholder="e.g I will complete this project"
      />
      { isNotValid && <Text style={{color: 'red', fontWeight: '600', textAlign: 'center', paddingVertical: 5}}>Character has to be more than 3</Text>}
      <View style={{ paddingVertical: 10 }}>
        <Button disabled={isNotValid} onPress={() => addTodoHandler(todoText)} color={"coral"} title="Add Todo" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 10,
    backgroundColor: "#ddd",
    padding: 15,
  },
});

export default AddTodoForm;
