import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity } from "react-native";
import react, { useState, useEffect } from "react";


const Lesson04 = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(null);
  const [people, setPeople] = useState([
    { id: 1, name: "Godfred", text: "How are you doing!!" },
    { id: 2, name: "Rachael", text: "Hope is all we have!!" },
    { id: 3, name: "Justice", text: "Find a better way to fight anger!!" },
    { id: 4, name: "Wilberforce", text: "We are who we are!!" },
    { id: 5, name: "Kwame", text: "I'm Kwame i love football!!" },
    { id: 6, name: "Ross", text: "Have fun when you have money!!" },
    { id: 7, name: "Chandler", text: "Love your neighbour as yourself!!" },
    { id: 8, name: "Matthew", text: "We all deserve second chance in life!" },
    { id: 9, name: "Andrews", text: "Try to best to everyone!!" },
  ]);
  const ItemContainer = ({ person, onPress }) => {
  const backgroundColor = person.id === activeItemIndex ? styles.itemContainerActive : {backgroundColor: '#00B6FF'} 
 
   return ( <TouchableOpacity onPress={() => onPress(person.id)}>
      <View style={[styles.itemContainer, backgroundColor]}>
        <Text>{person?.text}</Text>
        <Text style={[styles.textRight, styles.textFontBold ]}>
          {person.name}
        </Text>
      </View>
    </TouchableOpacity>);
  }
  
  const onChangeIndex = index => {
    console.log('INDEX: ', index)
    setActiveItemIndex(index)

  }

  
  
  useEffect(() => {
    const removePerson = () => {
      setPeople((prev, next) => prev.filter( person => person.id !== activeItemIndex))
    }
    removePerson()
  }, [activeItemIndex])
  
 

  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 10, paddingTop: 10 }}>
      <View style={styles.heading}>
        <Text style={{ ...styles.headingText, ...styles.textFontBold }}>
          Lesson 04: FlatList View
        </Text>
      </View>
      <View>
        <FlatList
          data={people}
          renderItem={({ item }) => <ItemContainer onPress={onChangeIndex}  person={item} />}
          keyExtractor={(person) => person.id}
          extraData={activeItemIndex}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  heading: {
    padding: 20,
  },
  headingText: {
    textAlign: "center",
    fontSize: 25,
  },
  itemContainer: {
    padding: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  itemContainerActive: {
    backgroundColor: '#00B677'
  },
  textRight: {
    textAlign: "right",
  },
  textFontBold: {
    fontWeight: "bold",
  },
});

export default Lesson04;
