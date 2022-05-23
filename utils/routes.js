import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Routing = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={defaultHeaderStyles}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="ReviewDetails"
          component={ReviewDetails}
          options={({ route }) => ({ title: `Reviews/${route.params?.title}` })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routing;
