import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Video, ResizeMode } from "expo-av";
import { W3mButton } from "@web3modal/wagmi-react-native";
import SlidingTexts from "@/components/SlidingTexts";

const index = () => {
  return (
    <View style={styles.container}>
      <Video
        style={styles.video}
        source={{
          uri: "https://videos.pexels.com/video-files/7660180/7660180-uhd_1440_2560_25fps.mp4",
        }}
        shouldPlay
        isLooping={true}
        resizeMode={ResizeMode.COVER}
        //  resizeMode
      />
      <View style={styles.textContainer}>
        <Text style={styles.mainText}>Csave</Text>
        <Text style={styles.subText}>
          Group saving circles made easy with crypto currency on Csave
        </Text>
        <SlidingTexts />
        <W3mButton balance="show" />
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
    paddingBottom: 190,
    flex: 1,
    backgroundColor: "#0000005c",
    paddingHorizontal: 20,
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
    marginTop: 15,
    textAlign: "center",
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
