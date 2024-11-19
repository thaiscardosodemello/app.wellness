import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

// Função para a Splash Screen
const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Depois de 2 segundos carrega a tela de login
    const timer = setTimeout(() => {
      navigation.replace("Login");
    }, 2000); // 2 segundos

    return () => clearTimeout(timer); // Limpar o timer
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Splash Screen</Text>
    </View>
  );
};

// Style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
});

export default SplashScreen;
