import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackCharactList } from "../App";
import { useEffect, useState } from "react";
import { styles2 } from "./styles/character-styles";

type DogResponse = {
  status: string;
  message: Record<string, string[]>;
};
type DogScreenProps = NativeStackScreenProps<RootStackCharactList, "Dog">;

export function DogList() {
  const [dogListState, setDogListState] = useState<Record<string, string[]>>();
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((res) => res.json())
      .then((res: DogResponse) => {
        console.log(res);
        if (res && res.message) {
          console.log(res.message);
          setDogListState(res.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching dog image:", error);
      });
  }, []);
  return (
    <ScrollView>
      <Text style={{ fontSize: 24, fontWeight: "500", textAlign: "center" }}>
        Dog list
      </Text>
      {dogListState &&
        Object.keys(dogListState).map((dog) => {
          return (
            <Text
              key={dog}
              style={{
                marginTop: 4,
                marginLeft: 35,
                height: 29,
                fontWeight: "500",
              }}
            >
              {dog.charAt(0).toUpperCase() + dog.substring(1)}
            </Text>
          );
        })}
      <Text
        style={{
          fontSize: 18,
          fontWeight: "300",
          textAlign: "left",
          marginLeft: 10,
        }}
      ></Text>
    </ScrollView>
  );
}
