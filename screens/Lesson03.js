import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';

const ItemContainer = ({person}) => (
  <View style={styles.itemContainer}>
    <Text>{person?.text}</Text>
    <Text style={{...styles.textRight, ...styles.textFontBold}}>{person.name}</Text>
  </View>
)

const Lesson03 = () =>  {
  const people = [
    {id: 1, name: 'Godfred', text: 'How are you doing!!'},
    {id: 2, name: 'Rachael', text: 'Hope is all we have!!'},
    {id: 3, name: 'Justice', text: 'Find a better way to fight anger!!'},
    {id: 4, name: 'Wilberforce', text: 'We are who we are!!'},
    {id: 5, name: 'Kwame', text: 'I\'m Kwame i love football!!'},
    {id: 6, name: 'Ross', text: 'Have fun when you have money!!'},
    {id: 7, name: 'Chandler', text: 'Love your neighbour as yourself!!'},
    {id: 8, name: 'Matthew', text: 'We all deserve second chance in life!'},
    {id: 9, name: 'Andrews', text: 'Try to best to everyone!!'},
  ]


  return (
    <SafeAreaView style={{padding: 20}}>
      <View style={styles.heading}><Text style={{...styles.headingText, ...styles.textFontBold}}>Lesson 03: Lists Scroll View</Text></View>
      <View style={{paddingBottom: 150}}>
        <ScrollView>
          {
            people.map( person => <ItemContainer person={person} />)
          }
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  heading: {
    padding: 20,
  },
  headingText: {
    textAlign: 'center',
    fontSize: 25
  },
  itemContainer: {
    backgroundColor: '#00B6FF',
    padding: 20,
    borderRadius: 10,
    marginTop: 10
  },
  textRight: {
    textAlign: 'right'
  },
  textFontBold: {
    fontWeight: 'bold'
  }
});


export default Lesson03
