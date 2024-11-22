import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";


const Header = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [username, setUsername] = useState('');
  const [imageError, setImageError] = useState(false);

  const userName = "Thais";

  const renderGreeting = () => {
    const hours = new Date().getHours();
    if (hours < 12) return "Good Morning";
    if (hours < 18) return "Good Afternoon";
    return "Good Evening";
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const renderAvatar = () => {
    if (imageError) {
      return <Ionicons name="person-circle" size={40} color="#6F7BF7" />;
    }

    return (
      <Image
        source={require("../assets/avatar/avatar.jpg")}
        style={[
          styles.avatar,
          route.name === "Home" ? styles.avatarLeft : styles.avatarRight,
        ]}
        onError={handleImageError}
      />
    );
  };

  return (
    <View style={styles.header}>
      {route.name === "Home" ? (
        <View style={styles.greetingContainer}>
          {renderAvatar()}
          <Text style={styles.greetingText}>
            {renderGreeting()}, {userName}!
          </Text>
        </View>
      ) : (
        <View style={styles.backButtonContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={30} color="#6F7BF7" />
          </TouchableOpacity>
          {renderAvatar()}
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
    backgroundColor: "#fff",
    paddingTop: 40,
  },
  greetingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  backButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  greetingText: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "open-sans-bold",
    color: "#6F7BF7",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
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
