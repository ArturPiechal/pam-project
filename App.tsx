import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { Button, StyleSheet, Text, View } from "react-native";
import { HomeScreen } from "./src/HomeScreen";
import { CharactersScreen } from "./src/CharactersScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { EpisodeScreen } from "./src/EpidodesScreen";
import { DogList } from "./src/DogList";

export type RootStackCharactList = {
  Home: undefined;
  Random_dog_image: {
    secret: string;
  };
  Episode: undefined;
  Dog: undefined;
};

const Stack = createBottomTabNavigator<RootStackCharactList>();
const Stack2 = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Random_dog_image"
          component={CharactersScreen}
          initialParams={{ secret: "chyba dziala" }}
        />
        <Stack.Screen name="Episode" component={EpisodeScreen} />
        <Stack.Screen name="Dog" component={DogList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
