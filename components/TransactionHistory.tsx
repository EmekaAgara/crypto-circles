import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

interface Transaction {
  id: string;
  name: string;
  amount: number;
  date: string;
  icon: string; // URL or local path to the icon image
}

const TransactionHistory: React.FC<TransactionHistoryProps> = ({
  transactions,
}) => {
  const router = useRouter();

  const handlePress = (transaction: Transaction) => {
    router.push(`/transaction-details/${transaction.id}`, { transaction });
  };

  const renderItem = ({ item }: { item: Transaction }) => (
    <TouchableOpacity
      style={styles.transactionContainer}
      onPress={() => handlePress(item)}
    >
      <Image source={{ uri: item.icon }} style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.amount}>BTC {item.amount.toFixed(4)}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={transactions}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      style={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    backgroundColor: "",
  },
  transactionContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    marginVertical: 6,
    marginHorizontal: 12,
    backgroundColor: "#141518",
    borderRadius: 8,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  amount: {
    color: "#ffffff",
    fontSize: 14,
  },
  date: {
    color: "#888888",
    fontSize: 12,
  },
});

export default TransactionHistory;
