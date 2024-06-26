import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  Image,
  Dimensions,
} from "react-native";
import React, { useCallback, useEffect } from "react";
import { Video, ResizeMode } from "expo-av";
import { W3mButton } from "@web3modal/wagmi-react-native";
import SlidingTexts from "@/components/SlidingTexts";
import { useAccount } from "wagmi";
import { Link, Slot, useNavigation, useRouter } from "expo-router";
// import { useRouter } from 'your-router-hook'; // Replace with the actual import
import { useFocusEffect } from "@react-navigation/native";
import { useWeb3Modal } from "@web3modal/wagmi-react-native";

const { height: deviceHeight } = Dimensions.get("window");

const index = () => {
  const router = useRouter();

  const { open } = useWeb3Modal();

  const onConnectPressed = () => {
    open();
    router.push({ pathname: "(tabs)" });

    // navigation.navigate("SignupScreen");
  };

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
      <Image
        style={styles.logo}
        source={require("../assets/images/react-logo.png")}
      />

      <View style={styles.textContainer}>
        <Text style={styles.mainText}>Crypto Circless</Text>

        {/* <SlidingTexts /> */}

        <SlidingTexts />
        {/* <W3mButton balance="show" /> */}
        {/* <TouchableOpacity onPress={() => open()} style={styles.ButtonContainer}> */}
        <TouchableOpacity
          onPress={onConnectPressed}
          style={styles.ButtonContainer}
        >
          <Text style={styles.ButtonText}>Get Started</Text>
        </TouchableOpacity>
        <Text style={styles.subText}>
          Group saving circles with friedns and family, made easy with crypto
          currency on Ccircles app
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
  w3mButton: {
    marginLeft: "auto",
    padding: 50,
    color: "white",
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
    // paddingTop: "150%",
    paddingTop: deviceHeight * 0.69,
    // marginBottom: deviceHeight * 0.09,
    flex: 1,
    backgroundColor: "#0000005c",
    paddingHorizontal: 20,
  },

  mainText: {
    fontSize: 28,
    fontWeight: "600",
    color: "white",
  },
  subText: {
    fontSize: 12,
    marginTop: 10,
    textAlign: "center",
    color: "white",
  },
  ButtonContainer: {
    backgroundColor: "#0067f3",
    width: "100%",
    alignSelf: "center",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },

  ButtonText: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "600",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  logo: {
    position: "absolute",
    alignSelf: "center",
    // marginTop: "35%",
    zIndex: 1,
    width: "50%",
    height: "50%",
    resizeMode: "contain",
  },
});

export default index;
