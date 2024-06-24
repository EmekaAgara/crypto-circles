import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useCallback, useEffect } from "react";
import { Video, ResizeMode } from "expo-av";
import { W3mButton } from "@web3modal/wagmi-react-native";
import SlidingTexts from "@/components/SlidingTexts";
import { useAccount } from "wagmi";
import { Link, Slot, useRouter } from "expo-router";
// import { useRouter } from 'your-router-hook'; // Replace with the actual import
import { useFocusEffect } from "@react-navigation/native";

const connect = () => {
  // navigate when a wallet is connected
  const router = useRouter();
  const { address, isConnecting, isDisconnected, isConnected } = useAccount();

  <Slot />;

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate();
    }, 0); // No delay, execute immediately after screen loads

    return () => clearTimeout(timer);
  }, []);

  const navigate = useCallback(() => {
    if (isConnecting) {
      console.log("connecting");
    }
    if (isDisconnected) {
      console.log("Disconnected");
      // router.push({ pathname: "connect" });
      router.push({ pathname: "(tabs)" });
    }
    if (isConnected) {
      console.log("connected");
      router.push({ pathname: "(tabs)" });
    }
  }, [isConnecting, isDisconnected, isConnected, router]);

  useFocusEffect(
    useCallback(() => {
      navigate();
    }, [navigate])
  );

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

export default connect;
