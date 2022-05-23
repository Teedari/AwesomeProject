import "react-native-gesture-handler";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
import Home from "./screens/Home";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ReviewDetails from "./screens/ReviewDetails";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Routing from "./utils/routes";
import About from "./screens/About";

const defaultHeaderStyles = {
  headerStyle: {
    backgroundColor: "#00B6FF",
  },
  headerTitleAlign: "center",
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold",
    
  },
};
const Drawer = createDrawerNavigator();
export default function App() {
  const Stack = createNativeStackNavigator();
  let [fontsLoaded] = useFonts({
    lato: require("./assets/fonts/Lato-Regular.ttf"),
    "lato-bold": require("./assets/fonts/Lato-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false, ...defaultHeaderStyles}}>
        <Stack.Screen name="Route" component={Route} />
        <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: "#f9f9f9",
  },
});

const Route = () => {
  return (
    <Drawer.Navigator
      screenOptions={defaultHeaderStyles}
      initialRouteName="Home">
      <Drawer.Screen name="home" component={Home} />
      <Drawer.Screen
        name="About"
        component={About}
        options={{ title: "About" }}
      />
    </Drawer.Navigator>
  );
};
