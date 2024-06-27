// components/SavingCirclesList.tsx
import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

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
  {
    id: "2",
    title: "Circle 1",
    description: "Description for Circle 1",
    imageUrl: "https://via.placeholder.com/150",
    numUsers: 10,
    profitLoss: 5,
    creationDate: "2023-01-01",
    isFull: false,
  },
  {
    id: "3",
    title: "Circle 1",
    description: "Description for Circle 1",
    imageUrl: "https://via.placeholder.com/150",
    numUsers: 10,
    profitLoss: 5,
    creationDate: "2023-01-01",
    isFull: false,
  },
  {
    id: "4",
    title: "Circle 1",
    description: "Description for Circle 1",
    imageUrl: "https://via.placeholder.com/150",
    numUsers: 10,
    profitLoss: 5,
    creationDate: "2023-01-01",
    isFull: false,
  },
  {
    id: "5",
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

export default function SavingCirclesList() {
  const router = useRouter();

  return (
    <FlatList
      data={savingCircles}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.card}
          onPress={() => router.push(`/details/${item.id}`)}
        >
          <Image source={{ uri: item.imageUrl }} style={styles.image} />
          <View style={styles.info}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.details}>Users: {item.numUsers}</Text>
            <Text style={styles.details}>Profit/Loss: {item.profitLoss}%</Text>
            {/* <Text style={styles.details}>Created on: {item.creationDate}</Text> */}
            {/* <Text style={styles.details}>
              Status: {item.isFull ? "Full" : "Available"}
            </Text> */}
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 20,
    height: "100%",
    marginHorizontal: 15,
  },
  card: {
    backgroundColor: "#1E1E1E",
    borderRadius: 7,
    padding: 15,
    marginBottom: 15,
    flexDirection: "row",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },
  info: {
    marginLeft: 15,
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  description: {
    fontSize: 14,
    color: "#AAAAAA",
    marginVertical: 5,
  },
  details: {
    fontSize: 12,
    color: "#888888",
  },
});
