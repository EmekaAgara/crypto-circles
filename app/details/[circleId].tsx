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
    title: "Vacation Fund",
    description: "Saving up for a group vacation to a tropical destination.",
    imageUrl:
      "https://images.unsplash.com/photo-1502301197179-65228ab57f78?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dmFjYXRpb258ZW58MHx8MHx8fDA%3D",
    numUsers: 5,
    profitLoss: 8,
    creationDate: "2024-06-01",
    isFull: false,
  },
  {
    id: "2",
    title: "Concert Crew",
    description:
      "Investing and saving for upcoming music festivals and concerts.",
    imageUrl:
      "https://images.unsplash.com/photo-1501527459-2d5409f8cf9f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D",
    numUsers: 12,
    profitLoss: 5,
    creationDate: "2024-06-05",
    isFull: false,
  },
  {
    id: "3",
    title: "Gadget Geeks",
    description:
      "Pooling funds to buy the latest tech gadgets and accessories.",
    imageUrl:
      "https://images.unsplash.com/photo-1636115305669-9096bffe87fd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FkZ2V0c3xlbnwwfHwwfHx8MA%3D%3D",
    numUsers: 7,
    profitLoss: 10,
    creationDate: "2024-06-10",
    isFull: false,
  },
  {
    id: "4",
    title: "Adventure Seekers",
    description:
      "Saving and investing for outdoor adventures and extreme sports.",
    imageUrl:
      "https://images.unsplash.com/photo-1528543606781-2f6e6857f318?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFkdmVudHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    numUsers: 9,
    profitLoss: 12,
    creationDate: "2024-06-15",
    isFull: false,
  },
  {
    id: "5",
    title: "Dining Delights",
    description:
      "Collectively saving for fine dining experiences and food festivals.",
    imageUrl:
      "https://images.unsplash.com/photo-1529832588601-c01e066263a8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGluaW5nfGVufDB8fDB8fHww",
    numUsers: 8,
    profitLoss: 6,
    creationDate: "2024-06-20",
    isFull: false,
  },
  {
    id: "6",
    title: "Crypto Investors",
    description:
      "A group focused on investing in various cryptocurrencies for potential profit.",
    imageUrl:
      "https://images.unsplash.com/photo-1639843885527-43b098a9661a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3J5cHRvY3VycmVuY3l8ZW58MHx8MHx8fDA%3D",
    numUsers: 15,
    profitLoss: 20,
    creationDate: "2024-06-25",
    isFull: false,
  },
  {
    id: "7",
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

      <TouchableOpacity
        onPress={() => router.back()}
        style={styles.ButtonContainer2}
      >
        <Text style={styles.ButtonText}>Go Back</Text>
      </TouchableOpacity>
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
