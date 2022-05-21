import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react'

export default function App() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')

  return (
    <View style={styles.container}>
     <Text style={{fontWeight: 'bold', fontSize: 30, textDecorationLine: 'underline', padding: 20}}>Lesson 02: <Text style={{color: '#00B6FF'}}>Text inputs</Text></Text>
     <View style={styles.container}>
       <Text >Enter name:</Text>
       <TextInput
        style={styles.input} 
        placeholder='e.g John Doe'
        onChangeText={(val) => setName(val)}
        />
       <Text >Enter age:</Text>
       <TextInput 
        keyboardType='numeric'
        style={styles.input} 
        placeholder='e.g 30'
        onChangeText={(val) => setAge(val)}
        />
       <Text >Description:</Text>
       <TextInput 
       clearButtonMode='unless-editing'
        multiline
        maxLength={5}
        numberOfLines = {4}
        style={styles.input} 
        placeholder='description goes here...'
        onChangeText={(val) => console.log(val)}
        />
     </View>
     <Text>Name: {name &&  name} Age: { age && age}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    width: 200,
    padding: 10,
    marginTop: 10
  }
});
