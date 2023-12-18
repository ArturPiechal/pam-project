import { Button, StyleSheet, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackCharactList } from "../App";
import { styles } from "./styles/screen-common";
import { useEffect, useState } from "react";

type Episode = {
  id: number;
  name: string;
};
type EpisodeScreenProps = NativeStackScreenProps<
  RootStackCharactList,
  "Episode"
>;

export function EpisodeScreen() {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/episode")
      .then((res) => res.json())
      .then((res: { results: Episode[] }) => {
        setEpisodes(res.results);
        console.log(res.results.length);
      });
  }, []);
  return (
    <View style={styles.container}>
      <Text>My Episodes</Text>
      {episodes.map((episode) => {
        return <Text key={episode.id}>{episode.name}</Text>;
      })}
      <Button title="Go to Episodes" onPress={() => {}} />
    </View>
  );
}
