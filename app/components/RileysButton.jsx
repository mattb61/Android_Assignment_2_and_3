import React from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";

export default function MovieButtonList({ movieData = [], movieIndex, setMovieIndex }) {
  return (
    <View style={styles.buttonContainer}>
      {movieData.map((movie, index) => (
        <Pressable
          key={index}
          onPress={() => setMovieIndex(index)}
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
            movieIndex === index && styles.activeButton, // Active style if selected
          ]}
        >
          <Text style={styles.text}>
            {movie?.name ?? `Movie: ${index + 1}`}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 16,
  },
  button: {
    backgroundColor: "#2a9d8f",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    margin: 8,
  },
  buttonPressed: {
    backgroundColor: "#21867a",
  },
  activeButton: {
    backgroundColor: "#e76f51", // Active color when selected
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});