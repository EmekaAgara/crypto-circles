import Ionicons from "@expo/vector-icons/Ionicons";
import {
  StyleSheet,
  Image,
  Platform,
  View,
  TouchableOpacity,
  Text,
  FlatList,
  SafeAreaView,
} from "react-native";
import { useRouter } from "expo-router";
import { W3mButton } from "@web3modal/wagmi-react-native";
import SavingCirclesList from "@/components/SavingCirclesList";

const data = [
  {
    id: "1",
    title: "$5,000,000",
    description: "My Crypto Circles Wallet ⭕️ ",
    account: "00000020",
    name: "John James",
    backgroundImage: require("@/assets/images/card9.png"),
    screen: "Development",
  },

  {
    id: "2",
    title: "$5,000,000",
    description: "My Crypto Circles Wallet ⭕️ ",
    account: "0000 0000 0000 0000",
    name: "John James",
    backgroundImage: require("@/assets/images/card7.png"),
    screen: "Development",
  },
];
const CardData = [
  {
    id: "2",
    image: require("@/assets/images/card12.png"),
    description: "⭕️ Create a Circle",
    screen: "Development",
  },
  {
    id: "4",
    image: require("@/assets/images/card12.png"),
    description: " 💰 Make a Deposit",
    screen: "Development",
  },
  {
    id: "3",
    image: require("@/assets/images/card12.png"),
    description: "🚀 Explore Saving Circles",
    screen: "Development",
  },
];

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

export default function circles() {
  const router = useRouter();

  const handlePress = () => {
    router.push({ pathname: "(tabs)" });

    // navigation.navigate("SignupScreen");
  };
  const cardPress = () => {
    router.push({ pathname: "(tabs)" });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.HeaderContainer}>
        <TouchableOpacity onPress={handlePress}>
          <Text style={styles.HelloText}>Hello John</Text>
          <Text style={styles.descText1}>
            Explore crypto saving circles ⭕️
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
          <Image
            source={require("@/assets/images/profile.png")}
            resizeMode="cover"
            style={styles.btnImg}
          />
        </TouchableOpacity>
      </View>
      {/* <FlatList
        horizontal
        pagingEnabled
        data={data}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={cardPress}>
            <View style={styles.ButtonContainer}>
              <View style={styles.profileContainer}>
                <Text style={styles.descText}>{item.description}</Text>

                <Text style={styles.acctText}>{item.account}</Text>

                <View style={styles.WalletConnect}>
                  <W3mButton balance="show" size="md" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      /> */}

      <FlatList
        style={styles.ServiceslistContainer}
        horizontal
        pagingEnabled
        data={CardData}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={handlePress}
            style={styles.ServicesContainer}
          >
            <View style={styles.profileContainer}>
              <Text style={styles.serviceText}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      <Text style={styles.descText2}>Featured Saving Circles ⭕️</Text>
      <SavingCirclesList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  circlecontainer: {
    // flex: 1,
    backgroundColor: "#121212",
    marginBottom: 100,
  },
  HeaderContainer: {
    display: "flex",
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  FlatList: {
    padding: "2%",
    display: "flex",
    flexDirection: "column",
  },

  btnContainer: {
    // width: "40px",
    width: 40,
    height: 40,
    backgroundColor: "#000",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  btnImg: {
    marginLeft: 4,
    height: 50,
    width: 50,
    resizeMode: "contain",
  },
  ServiceslistContainer: {
    paddingLeft: 15,
    paddingVertical: 15,
  },

  chipimg: {
    marginLeft: 4,
    height: 70,
    width: 30,
    resizeMode: "contain",
  },

  container: {
    backgroundColor: "black",
    justifyContent: "center",
    paddingBottom: 20,
    paddingTop: 40,
    padding: 60,
    // marginHorizontal: 10,
    paddingHorizontal: 15,
    // flex: 1,
  },
  WalletConnect: {
    paddingTop: 15,
  },
  HelloText: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "left",
    paddingBottom: 5,
  },

  cardImage: {
    marginLeft: 4,
    height: 70,
    width: 70,
    resizeMode: "contain",
  },

  mainText: {
    color: "white",
    fontSize: 25,
    fontWeight: "700",
    textAlign: "left",
    // paddingBottom: 10,
    paddingLeft: 0,
    paddingTop: 40,
  },

  descText: {
    color: "#898A8B",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    paddingLeft: 0,
    paddingBottom: 5,
  },
  acctText: {
    color: "#898A8B",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    paddingLeft: 0,

    paddingTop: 3,
  },
  nameText: {
    color: "#898A8B",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    paddingLeft: 0,

    paddingTop: 4,
  },
  descText1: {
    color: "#898A8B",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    paddingBottom: 20,
    paddingLeft: 0,
  },
  descText2: {
    color: "#898A8B",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "left",
    // paddingTop: 10,
    // paddingBottom: 20,
    paddingVertical: 20,
    paddingLeft: 15,
  },

  ButtonContainer: {
    backgroundColor: "#141518",
    flexDirection: "row",
    padding: 27,
    marginBottom: 15,
    marginRight: 10,
    // paddingBottom: 20,
    paddingRight: 120,
    paddingVertical: 20,
    borderRadius: 10,
    marginLeft: 10,
    // width: "90%",
  },

  CardContainer: {
    backgroundColor: "#5659C6",
    borderRadius: 5,
    paddingVertical: 0,
    paddingHorizontal: 140,
    marginBottom: 0,
    height: 100,
  },

  profileContainer: {
    flexDirection: "column",
    marginLeft: 0,
    paddingLeft: 10,
    justifyContent: "center",
  },

  ServicesContainer: {
    backgroundColor: "#141518",
    flexDirection: "row",
    // padding: 12,
    // marginBottom: 16,
    marginRight: 12,
    paddingRight: 20,
    height: 60,
    overflow: "hidden",

    borderRadius: 6,
  },
  serviceText: {
    color: "#898A8B",
    fontSize: 14,
    fontWeight: "500",
  },
});
