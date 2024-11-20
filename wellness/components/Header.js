import React, {useState} from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";


const Header = () => {
  const navigation = useNavigation();
  const route = useRoute();// Identifica a rota atual
  const [username, setUsername] = useState('');

  const renderGreeting = () => {
    const hours = new Date().getHours();
    if (hours < 12) return "Good Morning Thais!";
    if (hours < 18) return "Good Afternoon Thais!";
    return "Good Evening Thais!";
  };

  return (
    <View style={styles.header}>
      {route.name === "Home" ? (
        // Na Home exibe a saudação e o avatar alinhado à esquerda
        <View style={styles.greetingContainer}>
          <Image
            source={require("../assets/avatar/avatar.jpg")}
            style={[styles.avatar, styles.avatarLeft]}
          />
          <Text style={styles.greetingText}>{renderGreeting()}</Text>
        </View>
      ) : (
        // Nas outras telas exibe o botão de voltar e o avatar alinhado à direita
        <View style={styles.backButtonContainer}>
          {/* Botão de voltar */}
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={30} color="black" />
          </TouchableOpacity>
          {/* Avatar à direita nas outras telas */}
          <Image
            source={require("../assets/avatar/avatar.jpg")}
            style={[styles.avatar, styles.avatarRight]}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#f5f5f5",
    paddingTop: 40,
  },
  greetingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  greetingText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  backButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    marginLeft: 10,
  },
  avatarLeft: {
    marginRight: 10,
  },
  avatarRight: {
    marginLeft: 10,
    marginRight: 0,
  },
});

export default Header;
