import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { Button, StyleSheet, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackCharactList } from "../App";
import { styles } from "./styles/screen-common";

type HomeScreenProps = NativeStackScreenProps<RootStackCharactList, "Home">;

export function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <View style={styles.container}>
      <Text>Welcome to the jungle</Text>
      <Button
        title="Go to characters"
        onPress={() => {
          navigation.navigate("Characters", {
            secret: ";O",
          });
        }}
      />
    </View>
  );
}
