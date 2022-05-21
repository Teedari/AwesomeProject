import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react'

export default function Lesson01() {
  const [greetings, setGreetings] = useState('Good morning, how are you doing??')
  const clickMe = () => setGreetings('I\'m fine!!')
  return (
    <View style={styles.container}>
      <Text style={{padding: 20}}>{greetings}</Text>
      <View style={styles.header}>
        <Text style={{...styles.fontBold, ...styles.textWhite}}>Open up Lesson01.js to start working on your app!</Text>
      </View>
    
      <View style={{marginTop: 15}}>
        <Button color={'#00B677'} onPress={clickMe}  title='Click me!'/>
      </View>
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
  header: {
    backgroundColor: '#00B6FF',
    padding: 20,
  },
  textWhite: {
    color: 'white'
  },
  fontBold: {
    fontWeight: 'bold'
  }
});
