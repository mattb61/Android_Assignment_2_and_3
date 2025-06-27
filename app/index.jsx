import { Text, View, Image, Button } from "react-native";
import { useRouter } from 'expo-router';

export default function Index() {
    const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <Text>The Lord of the Rings trilogy</Text>
        <Button onPress={() => router.navigate('/movies')} title="Movies"></Button>
        <Button onPress={() => router.navigate('/updateMovies')} title="Update Movies"></Button>
       </View>
  );
}
