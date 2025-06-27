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
       </View>
  );
}
//     const opacityToggle = () => {
//         const [activeButton, setActiveButton] = useState(null);
//
//         const buttonPress = (buttonId) => {
//             setActiveButton(buttonId);
//         };
//
//         const renderButton = (buttonId, text, setMovieIndex) => {
//             const isActive = activeButton === buttonId;
//
//             return (
//                 <TouchableOpacity
//                     key={buttonId}
//                     onPress={() => buttonPress(buttonId)}
//                     style={[
//                         styles.button,
//                         isActive ? styles.activeButton : styles.inactiveButton,
//                     ]}
//                 >
//                     <Text>{text}</Text>
//                 </TouchableOpacity>
//             )
//         };
//
//         return (
//             <View style={styles.container}>
//                 {renderButton(1, "Button 1", 0)}
//                 {renderButton(2, "Button 2", 1)}
//                 {renderButton(3, "Button 3", 2)}
//             </View>
//         )
// //     };
// };
//
//
// //     const myButtons = () => {
// //         const [isPressed, setIsPressed] = useState(false);
// //         const buttonStyle = isPressed ? style.Pressed : style.unPressed;
// //     };
//
// //   return (
// //     <View
// //       style={{
// //         flex: 1,
// //         justifyContent: "center",
// //         alignItems: "center",
// //       }}
// //     >
// //       <Movie movieData={movieData[movieIndex]} image={images[movieData[movieIndex].image]}/>
// //       <View
// //         style={{
// //             marginTop: 0,
// //             marginHorizontal: 10,
// //             alignItems: "center",
// //             flexDirection: "row", gap: 20,
// //         }}
// //     >
// //       <Button title="First Movie" onPress={() => setMovieIndex((0))}/>
// //       <Button title="Second Movie" onPress={() => setMovieIndex((1))}/>
// //       <Button title="Third Movie" onPress={() => setMovieIndex((2))}/>
// //           </View>
// // {/*       <Button title="Switch movie" onPress={() => setMovieIndex((movieIndex + 1) % movieData.length)}/> */}
// //     </View>
// //   );
// // }
// //
// const styles = StyleSheet.create ({
//     unPressed: {
//         color: 'blue'
//     },
//     Pressed: {
//         color: 'red'
//     },
// });