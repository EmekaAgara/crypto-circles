import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated, Easing } from "react-native";

const TEXTS = [
  "1we can use the Animated API to animate both the opacity and the position of the text.",
  "2we can use the Animated API to animate both the opacity and the position of the text.",
  "3we can use the Animated API to animate both the opacity and the position of the text.",
];

export default function SlidingTexts() {
  const [index, setIndex] = useState(0);
  const slideAnim = useRef(new Animated.Value(300)).current; // Start off-screen right
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const intervalId = setInterval(() => {
      Animated.sequence([
        // Fade out
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
        // Move text out to the left instantly
        Animated.timing(slideAnim, {
          toValue: -300,
          duration: 0,
          useNativeDriver: true,
        }),
      ]).start(() => {
        // Update index before showing the next text
        setIndex((prevIndex) => (prevIndex + 1) % TEXTS.length);

        Animated.sequence([
          // Move text to the right off-screen instantly
          Animated.timing(slideAnim, {
            toValue: 300,
            duration: 0,
            useNativeDriver: true,
          }),
          // Fade in and slide in from the right
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
        ]).start();
      });
    }, 5000); // every 5 seconds

    // Start initial fade in and slide in from the right
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 3000,
        easing: Easing.out(Easing.exp),
        useNativeDriver: true,
      }),
    ]).start();

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
    justifyContent: "center",
    alignItems: "flex-start",
    paddingVertical: 15,
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
    color: "white",
  },
});
