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
import MintSection from "@/components/MintSsection";

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
    title: "Charity Givers",
    description:
      "Pooling resources to donate to various humanitarian causes and charities.",
    imageUrl:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    numUsers: 10,
    profitLoss: 0,
    creationDate: "2024-06-30",
    isFull: false,
  },
  {
    id: "2",
    title: "Clean Water Initiative",
    description:
      "Collecting funds to provide clean water solutions in underdeveloped regions.",
    imageUrl:
      "https://images.unsplash.com/photo-1574482620811-1aa16ffe3c82?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xlYW4lMjB3YXRlcnxlbnwwfHwwfHx8MA%3D%3D",
    numUsers: 8,
    profitLoss: 0,
    creationDate: "2024-06-25",
    isFull: false,
  },
  {
    id: "3",
    title: "Education Fund",
    description: "Raising money to support education for children in need.",
    imageUrl:
      "https://images.unsplash.com/flagged/photo-1574097656146-0b43b7660cb6?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cnVyYWwlMjBlZHVjYXRpb258ZW58MHx8MHx8fDA%3D",
    numUsers: 15,
    profitLoss: 0,
    creationDate: "2024-06-20",
    isFull: false,
  },
  {
    id: "4",
    title: "Disaster Relief Fund",
    description:
      "Pooling funds to provide emergency aid in disaster-stricken areas.",
    imageUrl:
      "https://images.unsplash.com/photo-1519846484635-651f73f4aa2b?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJpb3R8ZW58MHx8MHx8fDA%3D",
    numUsers: 12,
    profitLoss: 0,
    creationDate: "2024-06-15",
    isFull: false,
  },
  {
    id: "5",
    title: "Medical Supplies Donation",
    description:
      "Raising money to donate essential medical supplies to those in need.",
    imageUrl:
      "https://images.unsplash.com/photo-1693264251393-d28f984ca283?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1lZGljYWwlMjBzdXBwbGllc3xlbnwwfHwwfHx8MA%3D%3D",
    numUsers: 9,
    profitLoss: 0,
    creationDate: "2024-06-10",
    isFull: false,
  },
  {
    id: "6",
    title: "Wildlife Conservation",
    description:
      "Funding efforts to protect endangered wildlife and their habitats.",
    imageUrl:
      "https://images.unsplash.com/photo-1522869433267-35e14411c1da?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdpbGQlMjBsaWZlfGVufDB8fDB8fHww",
    numUsers: 7,
    profitLoss: 0,
    creationDate: "2024-06-05",
    isFull: false,
  },
  {
    id: "7",
    title: "Support for Homeless",
    description:
      "Pooling resources to provide aid and support for homeless individuals.",
    imageUrl:
      "https://images.unsplash.com/photo-1526168637801-e9f490d6bc04?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9tZWxlc3N8ZW58MHx8MHx8fDA%3D",
    numUsers: 11,
    profitLoss: 0,
    creationDate: "2024-06-01",
    isFull: false,
  },
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
        // <TouchableOpacity
        //   onPress={onConnectPressed}
        //   style={styles.ButtonContainer}
        // >
        //   <Text style={styles.ButtonText}>Join Circle</Text>
        // </TouchableOpacity>
        <MintSection />
      )}

      {/* <TouchableOpacity
        onPress={() => router.back()}
        style={styles.ButtonContainer2}
      >
        <Text style={styles.ButtonText}>Go Back</Text>
      </TouchableOpacity> */}
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
  ButtonContainer2: {
    backgroundColor: "#e63b60",
    width: "100%",
    alignSelf: "center",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
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
