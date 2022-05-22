import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import Home from './screens/Home';

export default function App() {
  let [fontsLoaded] = useFonts({
    'lato': require('./assets/fonts/Lato-Regular.ttf'),
    'lato-bold': require('./assets/fonts/Lato-Bold.ttf'),
  })

  if(!fontsLoaded){
    return (<View>
      <Text>Loading Fonts</Text>
    </View>)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#f9f9f9',
  },
});
