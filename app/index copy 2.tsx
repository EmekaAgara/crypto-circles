import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Video, ResizeMode } from "expo-av";
import { W3mButton } from "@web3modal/wagmi-react-native";
import SlidingTexts from "@/components/SlidingTexts";
import { useAccount } from "wagmi";
import { Link, Slot, useRouter } from "expo-router";

const index = () => {
  // navigate when a wallet is connected
  const router = useRouter();

  function navigate() {
    const { address, isConnecting, isDisconnected, isConnected } = useAccount();

    if (isConnecting) {
      console.log("connecting");
    }
    if (isDisconnected) {
      console.log("Disconnected");
      router.push({ pathname: "/index" });
    }
    if (isConnected) {
      console.log("connected");
      router.push({ pathname: "(tabs)" });
    }
    // return <Text>{address}</Text>
    return console.log({ address });
  }
  navigate();

  // const account = useAccount({
  //   onConnect({ address, connector, isReconnected }) {
  //     console.log("Connected", { address, connector, isReconnected });
  //   },
  //   onDisconnect() {
  //     console.log("Disconnected");
  //   },
  // });

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
      <Text style={styles.mainText}>Csave</Text>
      <View style={styles.textContainer}>
        <Text style={styles.mainText}>Csave</Text>

        {/* <SlidingTexts /> */}

        <SlidingTexts />
        <W3mButton balance="show" />
        <Text style={styles.subText}>
          Group saving circles made easy with crypto currency on Csave
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
    // alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: "150%",
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
    fontSize: 12,
    // fontWeight: "700",
    // textTransform: "uppercase",
    marginTop: 15,
    textAlign: "center",
    color: "white",
  },
});

export default index;
