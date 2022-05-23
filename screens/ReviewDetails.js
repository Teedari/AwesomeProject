import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import globalStyles from "../styles/global.styles";
import { MaterialIcons } from "@expo/vector-icons";
const ReviewDetails = ({ route, navigation }) => {
  const data = route.params;

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
    });
  });

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.h2}>{data.title}</Text>
      <Text style={globalStyles.p}>{data.content}</Text>
      <View style={{flexDirection: 'row', justifyContent: 'flex-end', paddingVertical: 20}}>
        {Array(5)
          .fill()
          .map((_, index) => {
            return index <= data?.rating ? (
              <MaterialIcons key={index} color="#00B677" size='50' name="favorite" />
            ) : (
              <MaterialIcons key={index} name="favorite" size='50' color="#333" />
            );
          })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  reviewDetails: {},
});

export default ReviewDetails;
