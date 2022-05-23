import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import globalStyles from '../styles/global.styles'
const Card = ({title, children}) => {
  return (
    <View style={styles.card}>
      <Text style={[globalStyles.h1]}>{title}</Text>
      <Text style={[globalStyles.p]}>
        {children}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 12,
    marginTop: 10
  }
})

export default Card