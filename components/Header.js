import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={[styles.headerText, styles.textWhite]}>My Todos</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'coral'
  },
  headerText: {
    fontSize: 25,
    fontWeight: '600'
  },
  textWhite:{
    color: 'white'
  }
})


export default Header