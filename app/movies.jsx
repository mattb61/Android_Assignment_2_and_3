import {Pressable, Text, View, Button, StyleSheet} from "react-native";
import {useState} from "react";
import Movie from "./components/Movie.jsx";
import {useRouter} from 'expo-router';
import {MovieContext} from './components/movieContext';
import {useContext} from 'react';

const FotR = require("../assets/images/FotR.jpg");
const TTT = require("../assets/images/TTT.jpg");
const TRotK = require("../assets/images/TRotK.jpg");

const images = {"FotR": FotR, "TTT": TTT, "TRotK": TRotK};

import movieData from "../assets/movies.json";
console.log(movieData);

export default function Index() {

  const router = useRouter();
  const {movieData} = useContext(MovieContext);

  const [movieIndex, setMovieIndex] = useState(0);

  const currentMovie = movieData[movieIndex];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movies</Text>
      <Movie movieData={currentMovie} image={images[currentMovie.image]} />

      <View style={styles.buttonContainer}>
        {movieData.map((movie, index) => (
          <Pressable
            key={index}
            onPress={() => setMovieIndex(index)}
            style={({ pressed }) => [
              styles.movieButton,
              pressed && { opacity: 0.75 },
              movieIndex === index && styles.movieButtonActive,
            ]}
          >
            <Text
              style={[
                styles.buttonText,
                movieIndex === index && styles.buttonTextActive,
              ]}
            >
              {movie?.title ?? `Movie: ${index + 1}`}
            </Text>
          </Pressable>
        ))}
        <Button onPress={() => router.navigate('/')} title="Home"></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    paddingTop: 60,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginTop: 20,
  },
  movieButton: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 10,
    backgroundColor: "#007bff",
    borderRadius: 5,
    alignItems: "center",
  },
  movieButtonActive: {
    backgroundColor: "#aaa",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
  buttonTextActive: {
    color: "#fff",
  },
});