import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Video, ResizeMode } from "expo-av";

const index = () => {
  return (
    <View style={styles.container}>
      <Video
        style={styles.video}
        source={{
          uri: "https://videos.pexels.com/video-files/5717010/5717010-uhd_1440_2560_25fps.mp4",
        }}
        shouldPlay
        isLooping={true}
        resizeMode={ResizeMode.COVER}
        //  resizeMode
      />
      <View style={styles.textContainer}>
        <Text style={styles.mainText}>Csave</Text>
        <Text style={styles.subText}>
          Group saving circles made easy with crypto currency
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 20,
  },
  video: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  textContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 90,
  },
  mainText: {
    fontSize: 36,
    fontWeight: "700",
    textTransform: "uppercase",
    color: "white",
  },
  subText: {
    fontSize: 16,
    // fontWeight: "700",
    // textTransform: "uppercase",
    color: "white",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginBottom: 60,
    paddingHorizontal: 20,
  },
});

export default index;
