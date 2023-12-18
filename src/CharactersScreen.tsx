import { Button, StyleSheet, Text, View, Image, FlatList } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackCharactList } from "../App";
import { styles } from "./styles/screen-common";
import { useEffect, useState } from "react";

type CHaractersScreenProps = NativeStackScreenProps<
  RootStackCharactList,
  "Random_dog_image"
>;
type Character = {
  message: string;
  status: string;
};

export function CharactersScreen(props: CHaractersScreenProps) {
  const [dogImageUrl, setDogImageUrl] = useState<string | null>(null);
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((res) => {
        if (res && res.message) {
          setDogImageUrl(res.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching dog image:", error);
      });
  }, []);
  const handleRefresh = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((res) => {
        if (res && res.message) {
          setDogImageUrl(res.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching dog image:", error);
      });
  };
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: "500" }}>Random dog image</Text>
      {dogImageUrl && (
        <Image
          source={{ uri: dogImageUrl }}
          style={{ width: 200, height: 200, borderRadius: 10 }}
        />
      )}
      <Button title="Load next dog" onPress={handleRefresh} />
    </View>
  );
}
