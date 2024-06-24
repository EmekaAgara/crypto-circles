import React from "react";
import { View, Text, StyleSheet, Animated, Easing } from "react-native";

const TEXTS = [
  "To achieve a sliding text effect along with fading in and out",
  "we can use the Animated API to animate both the opacity and the position of the text.",
  "Tree, Here's how you can do it:",
  "Color, Here's how you can do it:",
];

export default function SlidingTexts() {
  const [index, setIndex] = React.useState(0);
  const slideAnim = React.useRef(new Animated.Value(-300)).current;
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 300,
          duration: 0,
          useNativeDriver: true,
        }),
        Animated.parallel([
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(slideAnim, {
            toValue: 0,
            duration: 1000,
            easing: Easing.out(Easing.exp),
            useNativeDriver: true,
          }),
        ]),
      ]).start(() => {
        setIndex((prevIndex) => (prevIndex + 1) % TEXTS.length);
      });
    }, 4000); // every 4 seconds

    return () => clearInterval(intervalId);
  }, [fadeAnim, slideAnim]);

  return (
    <View style={styles.container}>
      <Animated.Text
        style={{
          ...styles.text,
          opacity: fadeAnim,
          transform: [{ translateX: slideAnim }],
        }}
      >
        {TEXTS[index]}
      </Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingVertical: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: "500",
    color: "white",
  },
});
