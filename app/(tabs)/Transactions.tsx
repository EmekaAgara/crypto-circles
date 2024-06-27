import { View, Text, StyleSheet } from "react-native";
import React from "react";
import TransactionHistory from "@/components/TransactionHistory";

const transactions = [
  {
    id: "1",
    name: "Coffee",
    amount: 4.99,
    date: "2024-06-26",
    icon: "https://via.placeholder.com/40", // Replace with actual icon URL or local path
    participants: [
      {
        id: "1",
        name: "Alice",
        profilePicture: "https://via.placeholder.com/30",
      },
      {
        id: "2",
        name: "Bob",
        profilePicture: "https://via.placeholder.com/30",
      },
      {
        id: "3",
        name: "Charlie",
        profilePicture: "https://via.placeholder.com/30",
      },
      {
        id: "4",
        name: "David",
        profilePicture: "https://via.placeholder.com/30",
      },
      {
        id: "5",
        name: "Eve",
        profilePicture: "https://via.placeholder.com/30",
      },
    ],
  },
  // Add more transactions as needed
];

const Transactions = () => {
  return (
    <View style={styles.container}>
      <TransactionHistory transactions={transactions} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141518",
    justifyContent: "center",
  },
});

export default Transactions;
