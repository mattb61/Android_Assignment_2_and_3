// import React, {useState} from 'react';
// import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
//
// const opacityToggle = () => {
//     const [activeButton, setActiveButton] = useState(null);
//
//     const handleButtonPress = (buttonId) => {
//         setActiveButton(buttonId);
//     };
//
//     const renderButton = (buttonId, text) => {
//         const isActive = activeButton === buttonId;
//         return (
//             <TouchableOpacity
//                 key={buttonId}
//                 onPress={() => handleButtonPress(buttonId)}
//                 style={{
//                     styles.button,
//                     isActive ? styles.activeButton : styles.inactiveButton,
//                 }}
//             >
//                 <Text>{text}</Text>
//             </TouchableOpacity>
//         ):
//     };