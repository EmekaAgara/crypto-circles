// app/details/[circleId].tsx
import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";

type SavingCircle = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  numUsers: number;
  profitLoss: number;
  creationDate: string;
  isFull: boolean;
};

const savingCircles: SavingCircle[] = [
  {
    id: "1",
    title: "Circle 1",
    description: "Description for Circle 1",
    imageUrl: "https://via.placeholder.com/150",
    numUsers: 10,
    profitLoss: 5,
    creationDate: "2023-01-01",
    isFull: false,
  },
  // Add more circles as needed
];

export default function CircleDetails() {
  const onConnectPressed = () => {
    // open();
    router.push({ pathname: "(tabs)" });

    // navigation.navigate("SignupScreen");
  };
  const { circleId } = useLocalSearchParams<{ circleId: string }>();
  const router = useRouter();

  const circle = savingCircles.find((c) => c.id === circleId);

  if (!circle) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Circle not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: circle.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{circle.title}</Text>
      <Text style={styles.description}>{circle.description}</Text>
      <Text style={styles.details}>Users: {circle.numUsers}</Text>
      <Text style={styles.details}>Profit/Loss: {circle.profitLoss}%</Text>
      <Text style={styles.details}>Created on: {circle.creationDate}</Text>
      <Text style={styles.details}>
        Status: {circle.isFull ? "Full" : "Available"}
      </Text>
      {!circle.isFull && (
        <TouchableOpacity
          onPress={onConnectPressed}
          style={styles.ButtonContainer}
        >
          <Text style={styles.ButtonText}>Join Circle</Text>
        </TouchableOpacity>
      )}
      <Button title="Go Back" onPress={() => router.back()} color="#888888" />
    </View>
  );
}

const styles = StyleSheet.create({
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
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 20,
    marginTop: 20,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  description: {
    fontSize: 16,
    color: "#AAAAAA",
    marginVertical: 10,
  },
  details: {
    fontSize: 14,
    color: "#888888",
    marginBottom: 10,
  },
});
