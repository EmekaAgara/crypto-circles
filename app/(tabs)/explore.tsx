import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform, View } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import SavingCirclesList from "@/components/SavingCirclesList";
View;
export default function explore() {
  return (
    <View style={styles.circlecontainer}>
      <SavingCirclesList />
    </View>
  );
}

const styles = StyleSheet.create({
  circlecontainer: {
    flex: 1,
    backgroundColor: "#121212",
  },
});