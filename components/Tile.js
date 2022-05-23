import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import globalStyles from '../styles/global.styles'
import Card from './Card'
const Tile = ({text, onPress=() => console.log('Tile Clicked')}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Card>
        <Text style={globalStyles.h3}>{text}</Text>
      </Card>
    </TouchableOpacity>
  )
}

export default Tile